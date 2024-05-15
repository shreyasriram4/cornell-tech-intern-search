import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput';
import CandidateList from '../components/CandidateList';
import '../styles/globals.css';

function App() {
    const [searchCriteria, setSearchCriteria] = useState({
        role: '',
        first_name: '',
        last_name: ''
    });
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                let url = `http://localhost:3001/candidates`;
    
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                let data = await response.json();
                if (searchCriteria.role.length) {
                    data = data.filter(candidate => 
                        candidate.role.some(role => searchCriteria.role.includes(role))
                    );
                }
                if (searchCriteria.first_name) {
                    data = data.filter(candidate => 
                        candidate.first_name.toLowerCase().includes(searchCriteria.first_name.toLowerCase())
                    );
                }
                if (searchCriteria.last_name) {
                    data = data.filter(candidate => 
                        candidate.last_name.toLowerCase().includes(searchCriteria.last_name.toLowerCase())
                    );
                }
                if (searchCriteria.gpa) {
                    data = data.filter(candidate => 
                        candidate.gpa >= searchCriteria.gpa
                    );
                }
                setCandidates(data);
            } catch (error) {
                setError(error.message);
                setCandidates([]);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [searchCriteria]);
        

    const handleSearch = criteria => {
        setSearchCriteria(criteria);
    };

    return (
        <div className="App">
            <header className="header">
                <h1>Cornell Tech Intern Search App</h1>
            </header>
            <SearchInput onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <CandidateList candidates={candidates} />
        </div>
    );
}

export default App;


