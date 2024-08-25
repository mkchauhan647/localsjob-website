'use client'
import React from 'react';
import { Layout, Breadcrumb, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { HomeOutlined } from '@ant-design/icons';
import Navbar from '@/components/navbar/Navbar';

const { Title, Paragraph } = Typography;

const TermsPage = () => {
  return (
    <Layout className="min-h-screen">
      <Navbar/>
      <Content className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow rounded-lg p-6">
            <Title className="border-b pb-4">Terms and Conditions</Title>
            <Paragraph className="mt-4">
              Welcome to localsjob.com. These terms and conditions outline the rules and regulations for the use of Company Name's Website, located at localsjob.com.
            </Paragraph>
            <Paragraph>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use localsjob.com if you do not agree to take all of the terms and conditions stated on this page.
            </Paragraph>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default TermsPage;
