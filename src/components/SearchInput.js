import React, { useState, useEffect } from 'react';
import { Input, Button, Select, Slider } from 'antd';
import '../styles/globals.css'; 

const { Option } = Select;

function SearchInput({ onSearch }) {
    const [input, setInput] = useState({
        first_name: '',
        last_name: '',
        role: [],
        gpa: 0
    });

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/candidates')
            .then(response => response.json())
            .then(data => {
                const roleSet = new Set();
                data.forEach(item => item.role.forEach(role => roleSet.add(role.trim())));
                setRoles(Array.from(roleSet));
            })
            .catch(error => console.error('Error fetching roles:', error));
    }, []);

    const handleInputChange = (eventOrValue, fieldName) => {
        setInput(prev => ({
            ...prev,
            [fieldName ?? eventOrValue.target.name]: fieldName ? eventOrValue : eventOrValue.target.value
        }));
    };

    const handleGPAChange = value => {
        setInput(prev => ({ ...prev, gpa: value }));
    };

    const handleSubmit = () => {
        onSearch(input);
        setInput({ first_name: '', last_name: '', role: [], gpa: 0 });
    };

    return (
        <div className="search-container">
            <Input
                type="text"
                name="first_name"
                value={input.first_name}
                onChange={handleInputChange}
                placeholder="Enter candidate's first name"
                className="search-input"
            />
            <Input
                type="text"
                name="last_name"
                value={input.last_name}
                onChange={handleInputChange}
                placeholder="Enter candidate's last name"
                className="search-input"
            />
            <Select
                name="role"
                value={input.role}
                onChange={value => handleInputChange(value, 'role')}
                mode="multiple"
                className="search-select"
                placeholder="Select candidate's role"
            >
                {roles.map(role => <Option key={role} value={role}>{role}</Option>)}
            </Select>
            <div className="slider-container">
                <label htmlFor="gpa-slider">Select minimum GPA:</label>
                <Slider
                    range
                    min={0}
                    max={4}
                    step={0.01}
                    onChange={handleGPAChange}
                    value={input.gpa}
                    marks={{ 0: '0', 1: '1', 2: '2', 3: '3', 4: '4' }}
                    className="search-slider"
                />
            </div>
            <Button type="primary" onClick={handleSubmit} className="search-button">
                Search
            </Button>
        </div>
    );
}

export default SearchInput;
