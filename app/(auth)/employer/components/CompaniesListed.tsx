import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import Cookies from 'js-cookie';
import axios from '@/config/AxiosConfig';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RxFilePlus } from 'react-icons/rx';
import Link from 'next/link';
import CompaniesCreate from './create/CompaniesCreate';

interface Company {
    id: number;
    name: string;
    logo: string;
    created_at: string;
    status: {
        value: string;
        label: string;
    };
}

const CompaniesTable: React.FC = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [createCompany, setCreateCompany] = useState<boolean>(false);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        setLoading(true);
        try {
            const token = Cookies.get("token") || null;
            const headers = {
              Authorization: `Bearer ${token}`,
              "Api-Version": "v1",
              Accept: "application/json",
            };
            const response = await axios.get('/companies', {
                headers
            });
            const fetchedCompanies: Company[] = response.data.data.data;
            setCompanies(fetchedCompanies);
        } catch (error) {
            console.error('There was an error fetching the company data!', error);
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
        fetchCompanies();
    };


    function handleEdit(): void {
        // throw new Error('Function not implemented.');
    }
    
    function handleDelete(): void {
        // throw new Error('Function not implemented.');
    }
    
  async function handleCreate() {
      // throw new Error('Function not implemented.');
      
        const token = Cookies.get("token") || null;
            const headers = {
              Authorization: `Bearer ${token}`,
              "Api-Version": "v1",
              Accept: "application/json",
            };
        try {
            const response = await axios.post('/companies/save', {}, {
                headers
            });

            console.log(response.data);
        } catch (error) {
            console.error('There was an error creating the company!', error);
        }
    }



    // Columns configuration for antd Table
    const columns: ColumnsType<Company> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            align: 'center',
        },
        {
            title: 'Logo',
            dataIndex: 'logo',
            key: 'logo',
            align: 'center',
            render: (logo: string, record) => (
                <img
                    src={`https://main.localsjob.com/storage/${logo}`}
                    alt={record.name}
                    className="w-12 h-12 object-cover"
                />
            ),
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
                            icon={<FaRegEdit />}
                            size="small"
                            style={{ width: 90 }}
                        >

                            search
                            
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
            title: 'Operations',
            key: 'operations',
            align: 'center',
            render: () => (
                <>
                 <Button
                            type="primary"
                            onClick={() => handleEdit()}
                            icon={<FaRegEdit />}
                            size="middle"
                            style={{ width: 50 , padding:"3px", margin:"2px" }}
                        >
                            
                        </Button>

                        <Button
                            onClick={() => handleDelete()}
                            size="middle"
                            style={{ width: 50, padding:"3px", margin:"2px", }}
                        icon={<RiDeleteBinLine />}
                        className=' text-white'
                        
                        >

                        </Button>
                </>

            ),
        },
    ];

    // Apply search filter
    const filteredData = companies.filter(company => 
        company.name.toLowerCase().includes(searchTerm)
    );

    return (
        <>
        {
                createCompany && createCompany ?
                    <div className='bg-white p-5 '>
                        <div className='flex justify-between '>
                        <h1 className='mb-3'>Create Company</h1>
                        <button onClick={() => setCreateCompany(false)} className='mb-3'>Back</button>
                        </div>
                        <CompaniesCreate/>

                        
            </div> :
           <div>
          <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
              <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{ width: 200 }}
                  prefix={<SearchOutlined />}
              />
              <div className='flex gap-4'>
             
                  <Button
                  onClick={() => setCreateCompany(true)}
                  icon={<RxFilePlus />}
                  // size='middle'
                  type="default"
                  className='bg-[#f08c38] text-white rounded-md min-w-[100px] py-2 text-xs'

              >
                  Create New
                      </Button>
                  <Button
                  onClick={handleReload}
                  icon={<ReloadOutlined />}
                  type="default"
                  className='bg-[#f08c38] text-white rounded-md min-w-[100px] py-2 text-xs'

              >
                  Reload
              </Button>
             </div>
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
         
            }
        </>
            
    );
};

export default CompaniesTable;
