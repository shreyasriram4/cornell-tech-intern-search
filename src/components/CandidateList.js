import React from 'react';
import { Table } from 'antd';
import '../styles/globals.css';

function CandidateList({ candidates }) {
    const columns = [
        {
            title: 'Name',
            key: 'name',
            render: (text, record) => `${record.first_name} ${record.last_name}`
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: email => <a href={`mailto:${email}`}>{email}</a>
        },
        {
            title: 'LinkedIn',
            dataIndex: 'linkedin',
            key: 'linkedin',
            render: url => <a href={url} target="_blank" rel="noopener noreferrer">Profile</a>
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: roles => roles.join(', ')
        },
        {
            title: 'GPA',
            dataIndex: 'gpa',
            key: 'gpa'
        }
    ];


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
