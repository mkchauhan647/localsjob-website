import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import Cookies from 'js-cookie';
import axios from '@/config/AxiosConfig';
interface Job {
    id: number;
    name: string;
    created_at: string;
    status: {
        value: string;
        label: string;
    };
    moderation_status: {
        value: string;
        label: string;
    };
    expire_date: string;
}

const JobsTable: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const token = Cookies.get("token") || null;
            const headers = {
              Authorization: `Bearer ${token}`,
              "Api-Version": "v1",
              Accept: "application/json",
            };
            const response = await axios.get('/jobs', {
               headers
            });
            const fetchedJobs: Job[] = response.data.data.data;
            setJobs(fetchedJobs);
        } catch (error) {
            console.error('There was an error fetching the job data!', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
    };

    const handleReload = () => {
        setSearchTerm('');
        fetchJobs();
    };

    // Columns configuration for antd Table
    const columns: ColumnsType<Job> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            align: 'center',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        placeholder="Search name"
                        value={selectedKeys[0] as string}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => confirm()}
                        style={{ marginBottom: 8, display: 'block' }}
                    />
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => confirm()}
                            icon={<SearchOutlined />}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Search
                        </Button>
                        <Button
                            onClick={() => clearFilters && clearFilters()}
                            size="small"
                            style={{ width: 90 }}
                        >
                            Reset
                        </Button>
                    </Space>
                </div>
            ),
            filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
            onFilter: (value, record) => record.name.toLowerCase().includes((value as string).toLowerCase()),
        },
        {
            title: 'Created At',
            dataIndex: 'created_at',
            key: 'created_at',
            sorter: (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
            align: 'center',
            render: (text: string) => new Date(text).toLocaleDateString(),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            render: (status) => (
                <span className={`text-white font-bold py-1 px-2 rounded ${status.value === 'published' ? 'bg-green-500' : 'bg-gray-500'}`}>
                    {status.label}
                </span>
            ),
        },
        {
            title: 'Moderation Status',
            dataIndex: 'moderation_status',
            key: 'moderation_status',
            align: 'center',
            render: (moderation_status) => (
                <span className={`text-white font-bold py-1 px-2 rounded ${moderation_status.value === 'approved' ? 'bg-green-500' : 'bg-gray-500'}`}>
                    {moderation_status.label}
                </span>
            ),
        },
        {
            title: 'Expire Date',
            dataIndex: 'expire_date',
            key: 'expire_date',
            align: 'center',
            render: (text: string) => (
                <span className={new Date(text) < new Date() ? 'text-red-500' : ''}>
                    {new Date(text).toLocaleDateString()}
                </span>
            ),
        },
        {
            title: 'Operations',
            key: 'operations',
            align: 'center',
            render: () => (
                <Space size="middle">
                    <Button type="primary" icon={<SearchOutlined />} />
                    <Button type="default" icon={<ReloadOutlined />} />
                </Space>
            ),
        },
    ];

    // Apply search filter
    const filteredData = jobs.filter(job => 
        job.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
                <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ width: 200 }}
                    prefix={<SearchOutlined />}
                />
                <Button
                    onClick={handleReload}
                    icon={<ReloadOutlined />}
                    type="default"
                    className='bg-[#f08c38] text-white rounded-md min-w-[100px] py-2 text-xs'
                >
                    Reload
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={filteredData}
                rowKey="id"
                pagination={{ pageSize: 10 }}
                bordered
                loading={loading}
            />
        </div>
    );
};

export default JobsTable;
