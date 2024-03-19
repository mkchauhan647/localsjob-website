import React from 'react';
import { Table, Button, Space } from 'antd';

interface JobListing {
    key: string;
    jobTitle: string;
    jobDescription: string;
    // Add more fields as needed
}

const ManageJobListings: React.FC = () => {
    const dataSource: JobListing[] = [
        {
            key: '1',
            jobTitle: 'Software Developer',
            jobDescription: 'Looking for a skilled software developer...',
        },
        // Add more job listings as needed
    ];

    const columns = [
        {
            title: 'Job Title',
            dataIndex: 'jobTitle',
            key: 'jobTitle',
        },
        {
            title: 'Job Description',
            dataIndex: 'jobDescription',
            key: 'jobDescription',
        },
        // Add more columns as needed
        {
            title: 'Action',
            key: 'action',
            render: (text: any, record: JobListing) => (
                <Space size="middle">
                    {/* Use danger prop instead of type for a red-colored button */}
                    <Button type="primary">Edit</Button>
                    <Button type='primary'>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <h2>Manage Job Listings</h2>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default ManageJobListings;
