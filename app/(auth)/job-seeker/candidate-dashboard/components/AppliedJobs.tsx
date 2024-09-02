import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { JobApplication, JobApplicationResponse } from '@/util/types';
import { headersWithToken } from '@/app/utils/auth';

const AppliedJobs = ({ applications }:{applications:JobApplication[]}) => {
  

  const columns = [
    {
      title: 'Job Name',
      dataIndex: 'jobName',
      key: 'jobName',
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Applicant Name',
      dataIndex: 'applicantName',
      key: 'applicantName',
      render: (_: any, record: JobApplication) => `${record.firstName} ${record.lastName}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Applied Date',
      dataIndex: 'appliedDate',
      key: 'appliedDate',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div className="p-4">
      <Table
        dataSource={applications}
        columns={columns}
        rowKey="id"
              pagination={{ pageSize: 10 }}
              loading={applications.length === 0}
      />
    </div>
  );
};

export default AppliedJobs;
