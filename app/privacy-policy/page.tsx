'use client'
import React from 'react';
import { Layout, Breadcrumb, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { HomeOutlined } from '@ant-design/icons';
import Navbar from '@/components/navbar/Navbar';

const { Title, Paragraph } = Typography;

const PrivacyPolicyPage = () => {
  return (
    <Layout className="min-h-screen">
      <Navbar/>
      <Content className="bg-gray-50 py-6 ">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow rounded-lg p-6">
            <Title className="border-b pb-4">Privacy Policy</Title>
            <Paragraph className="mt-4">
              Your privacy is important to us. It is localsjob.com's policy to respect your privacy regarding any information we may collect from you across our website, localsjob.com, and other sites we own and operate.
            </Paragraph>
            <Paragraph>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </Paragraph>
            <Paragraph>
              We protect any personal information you provide when using localsjob.com. We do not share personally identifying information publicly or with third-parties, except when required to by law.
            </Paragraph>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default PrivacyPolicyPage;
