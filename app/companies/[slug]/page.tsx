import React from 'react';
import { Card, Tag, Avatar } from 'antd';
import { EnvironmentOutlined, GlobalOutlined, UserOutlined } from '@ant-design/icons';
import axios from '@/config/AxiosConfig';
import Navbar from '@/components/navbar/Navbar';
import Link from 'next/link';
interface CompanyProps {
  company: {
    name: string;
    description: string;
    logo: string;
    ceo: string;
    address: string;
    cover_image: string;
    website: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    status: { value: string; label: string };
    jobs_count: number;
    reviews_count: number;
    reviews_avg_star: number;
  };
    jobs: {
      data: Array<{
        id: number;
        name: string;
        description: string;
        address: string;
        salary_from: number | null;
        salary_to: number | null;
        job_types: Array<{ name: string }>;
        job_experience: { name: string };
          currency_id: number;
        slugable: { key: string };
      }>
  };
}

const CompanyComponent = async (props: any) => {
    
    const slug = props.params.slug;

    const getCompanyDetails = async () => {
        try {
            const res = await axios.get(`/companies/${slug}`);
            console.log("data", res.data.data);
            return res.data.data;
        } catch (error) {
            console.error(error);
        }
    }

    const companyDetails:CompanyProps = await getCompanyDetails();


    return (
      <>
      <Navbar/>
    <div className="container mx-auto px-4 ">
      <Card
        className="shadow-md"
        // cover={<img alt="cover" src={companyDetails.company?.cover_image} />}
      >
        <div className="flex items-center">
                        {/* <Avatar  className='w-[250px] h-[100px]' /> */}
                        {
                            companyDetails.company.logo && (
                        <img src={`https://main.localsjob.com/storage/${companyDetails.company.logo}`} alt="company logo" className="w-[150px] h-[150px] object- cover rounded-full "/>

                            )
                        }
          <div className="ml-4">
            <h1 className="text-3xl font-bold">{companyDetails.company.name}</h1>
            <p className="text-gray-600">{companyDetails.company.description}</p>
            {companyDetails.company.ceo && (
              <p className="text-gray-500 mt-2">
                <UserOutlined /> CEO: {companyDetails.company.ceo}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          {companyDetails.company.address && (
            <p className="flex items-center text-gray-500">
              <EnvironmentOutlined className="mr-2" />
              {companyDetails.company.address}
            </p>
          )}
          {companyDetails.company.website && (
            <p className="flex items-center text-gray-500">
              <GlobalOutlined className="mr-2" />
              <a href={companyDetails.company.website} target="_blank" rel="noopener noreferrer">
                {companyDetails.company.website}
              </a>
            </p>
          )}
        </div>

        <div className="mt-4">
          <Tag color={companyDetails.company.status.value === 'published' ? 'green' : 'red'}>
            {companyDetails.company.status.label}
          </Tag>
          <p className="text-gray-500 mt-2">Jobs: {companyDetails.company.jobs_count}</p>
          <p className="text-gray-500">Reviews: {companyDetails.company.reviews_count} (Avg. {companyDetails.company.reviews_avg_star} stars)</p>
        </div>

        <div className="mt-6 ">
          <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
          {companyDetails.jobs.data.map((job,index) => (
              <Link href={`/jobs/${job.name.split(" ").map(value => value.toLocaleLowerCase()).join('-')}/${job.slugable.key}`} key={index}>
                   <Card key={job.id} className="mb-4  " >
              <h3 className="text-xl font-bold mb-1">{job.name}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <p className="text-gray-500 mb-1 ">
                Location: {job.address}
              </p>
              <div className="flex space-x-4 mt-2">
                {job.job_types.map((type) => (
                  <Tag color="blue" key={type.name}>{type.name}</Tag>
                ))}
                <Tag color="purple">{job.job_experience.name} Experience</Tag>
              </div>
            </Card>
              </Link>
           
          ))}
        </div>
      </Card>
            </div>
      </>
            
  );
};

export default CompanyComponent;
