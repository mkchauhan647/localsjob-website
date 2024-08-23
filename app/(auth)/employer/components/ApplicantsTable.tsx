import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import axios from '@/config/AxiosConfig';
import Cookies from 'js-cookie';

interface Applicant {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    message: string;
    job_id: number;
    resume: string;
    cover_letter: string;
    account_id: number;
    is_external_apply: number;
    status: {
        value: string;
        label: string;
    };
    created_at: string;
}

const ApplicantsTable: React.FC = () => {
    const [applicants, setApplicants] = useState<Applicant[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchApplicants();
    }, []);

    const fetchApplicants = async () => {
        setLoading(true);
        try {
            const token = Cookies.get("token") || null;
            const headers = {
              Authorization: `Bearer ${token}`,
              "Api-Version": "v1",
              Accept: "application/json",
            };
            const response = await axios.get('/applicants', {
                headers
            });
            const fetchedApplicants: Applicant[] = response.data.data.data;
            setApplicants(fetchedApplicants);
        } catch (error) {
            console.error('There was an error fetching the applicants data!', error);
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
        fetchApplicants();
    };

    // Columns configuration for antd Table
    const columns: ColumnsType<Applicant> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            align: 'center',
        },
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
            sorter: (a, b) => a.first_name.localeCompare(b.first_name),
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        placeholder="Search first name"
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
            onFilter: (value, record) => record.first_name.toLowerCase().includes((value as string).toLowerCase()),
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
            sorter: (a, b) => a.last_name.localeCompare(b.last_name),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            sorter: (a, b) => a.phone.localeCompare(b.phone),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            render: (status) => (
                <span className={`text-white font-bold py-1 px-2 rounded ${status.value === 'checked' ? 'bg-green-500' : 'bg-gray-500'}`}>
                    {status.label}
                </span>
            ),
        },
        {
            title: 'Resume',
            dataIndex: 'resume',
            key: 'resume',
            align: 'center',
            render: (resume: string) => (
                <a href={`https://main.localsjob.com/storage/${resume}`} target="_blank" rel="noopener noreferrer">
                    View Resume
                </a>
            ),
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
    const filteredData = applicants.filter(applicant => 
        applicant.first_name.toLowerCase().includes(searchTerm)
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

export default ApplicantsTable;
