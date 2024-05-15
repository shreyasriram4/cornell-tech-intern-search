import React from 'react';
import { Table } from 'antd';
import '../styles/globals.css'; // Ensure your styles are imported

function CandidateList({ candidates }) {
    // Define the table columns
    const columns = [
        {
            title: 'Name',
            key: 'name',
            render: (text, record) => `${record.first_name} ${record.last_name}` // Combines first and last name
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: email => <a href={`mailto:${email}`}>{email}</a> // Creates a mailto link
        },
        {
            title: 'LinkedIn',
            dataIndex: 'linkedin',
            key: 'linkedin',
            render: url => <a href={url} target="_blank" rel="noopener noreferrer">Profile</a> // Link to LinkedIn profile
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: roles => roles.join(', ') // Joins multiple roles into a single string
        },
        {
            title: 'GPA',
            dataIndex: 'gpa',
            key: 'gpa' // Display GPA directly
        }
    ];

    // Prepare data for rendering in the Table
    const dataSource = candidates.map(candidate => ({
        key: candidate.id,
        first_name: candidate.first_name,
        last_name: candidate.last_name,
        email: candidate.email,
        linkedin: candidate.linkedin,
        role: candidate.role,
        gpa: candidate.gpa
    }));

    return (
        <div className="candidate-list">
            {candidates.length > 0 ? (
                <Table columns={columns} dataSource={dataSource} pagination={false} />
            ) : (
                <p className="no-candidates">No candidates found.</p>
            )}
        </div>
    );
}

export default CandidateList;
