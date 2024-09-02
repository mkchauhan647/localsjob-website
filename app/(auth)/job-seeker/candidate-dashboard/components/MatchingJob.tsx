import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Typography } from 'antd';
import { headersWithToken } from '@/app/utils/auth';
import Link from 'next/link';

const { Title } = Typography;

interface JobType {
  id: number;
  name: string;
}

interface TagType {
  id: number;
  name: string;
}

interface CompanyType {
  id: number;
  name: string;
  description: string;
  logo: string;
}

interface FeaturedJob {
  id: number;
  name: string;
  salary_from: string;
  salary_to: string | null;
  address: string;
  company: CompanyType;
  job_types: JobType[];
  tags: TagType[];
  slugable: {
    key: string;
  };
}

const MatchingJobs: React.FC = () => {
  const [featuredJobs, setFeaturedJobs] = useState<FeaturedJob[]>([]);

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        const response = await axios.get(
          'https://main.localsjob.com/api/v1/featured-jobs', // Adjust the API endpoint as needed
          {
            headers: headersWithToken(),
          }
        );
        setFeaturedJobs(response.data.data.featuredJobs);
      } catch (error) {
        console.error('Error fetching featured jobs:', error);
      }
    };

    fetchFeaturedJobs();
  }, []);

  // Function to handle the "Apply" button click
  const handleApply = (name:string,slug:string) => {
      console.log(`Applying for job with ID: ${name}`);
      window.location.href = `/jobs/${name}/${slug}`;
    // Implement application logic here
  };

  // Table columns definition
  const columns = [
    {
      title: 'Job Title',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Company',
      dataIndex: ['company', 'name'],
      key: 'company',
    },
    {
      title: 'Salary',
      dataIndex: ['salary_from', 'salary_to'],
      key: 'salary',
      render: (text: any, record: FeaturedJob) => (
        <span>
          {record.salary_from} - {record.salary_to || 'Negotiable'}
        </span>
      ),
    },
    {
      title: 'Location',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
        render: (_: any, record: FeaturedJob) => (
          <Link href={`/jobs/${record.name.toLowerCase().split(" ").join("-")}/${record.slugable.key}`} target="_blank">
        <Button type="primary" >
          Apply
                </Button>
                </Link> 
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      {/* <Title level={2}>Featured Jobs</Title> */}
      <Table
        dataSource={featuredJobs}
        columns={columns}
        rowKey="id"
              pagination={{ pageSize: 10 }} // Adjust pagination as needed
              loading={featuredJobs.length === 0}
      />
    </div>
  );
};

export default MatchingJobs;
