import React, { useState } from 'react';
import { Input, Button, Table } from 'antd';
import ApplicantsTable from './ApplicantsTable';

interface Candidate {
    key: string;
    name: string;
    skills: string;
    // Add more fields as needed
}

const SearchCandidates: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Candidate[]>([]);

    // Mock data for candidates
    const candidates: Candidate[] = [
        { key: '1', name: 'John Doe', skills: 'React, Node.js' },
        // Add more candidate data as needed
    ];

    const handleSearch = () => {
        // Perform search logic based on searchTerm
        const results = candidates.filter(candidate =>
            candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Skills',
            dataIndex: 'skills',
            key: 'skills',
        },
        // Add more columns as needed
    ];

    return (
        <div>
            <h2>Search for Candidates</h2>
            {/* <Input
                placeholder="Enter search criteria"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '16px' }}
            />
            <Button type="primary" onClick={handleSearch} style={{ marginBottom: '16px' }}>
                Search
            </Button>
            <Table dataSource={searchResults} columns={columns} /> */}
            <ApplicantsTable />
        </div>
    );
};

export default SearchCandidates;
