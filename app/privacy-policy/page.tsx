'use client'
import React from 'react';
import { Layout, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Navbar from '@/components/navbar/Navbar';

const { Title, Paragraph } = Typography;

const PrivacyPolicyPage = () => {
  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow rounded-lg p-6">
            <Title level={1} className="border-b pb-4">Privacy Policy</Title>

            <Title level={2} className="mt-6">1. Introduction</Title>
            <Paragraph>
              LocalsJob.com (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website.
            </Paragraph>

            <Title level={2} className="mt-6">2. Information We Collect</Title>
            <Title level={3}>2.1 Personal Data</Title>
            <Paragraph>
              We may collect personal information such as your name, email address, phone number, and payment information when you register for an account or subscribe to our services.
            </Paragraph>

            <Title level={3}>2.2 Usage Data</Title>
            <Paragraph>
              We collect information about your interactions with the Website, including the pages you visit, the links you click, and other actions you take.
            </Paragraph>

            <Title level={2} className="mt-6">3. How We Use Your Information</Title>
            <Title level={3}>3.1 To Provide Services</Title>
            <Paragraph>
              We use your information to provide, maintain, and improve our services, process transactions, and respond to your inquiries.
            </Paragraph>

            <Title level={3}>3.2 To Communicate</Title>
            <Paragraph>
              We may use your personal information to send you updates, newsletters, marketing materials, and other information that may be of interest to you.
            </Paragraph>

            <Title level={3}>3.3 To Improve Our Services</Title>
            <Paragraph>
              We use the information we collect to understand how our services are used and to improve the Website.
            </Paragraph>

            <Title level={2} className="mt-6">4. Sharing Your Information</Title>
            <Title level={3}>4.1 With Service Providers</Title>
            <Paragraph>
              We may share your information with third-party service providers who perform services on our behalf, such as payment processing and data analysis.
            </Paragraph>

            <Title level={3}>4.2 Legal Requirements</Title>
            <Paragraph>
              We may disclose your information if required to do so by law or in response to valid requests by public authorities.
            </Paragraph>

            <Title level={2} className="mt-6">5. Security of Your Information</Title>
            <Paragraph>
              We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </Paragraph>

            <Title level={2} className="mt-6">6. Your Data Protection Rights</Title>
            <Title level={3}>6.1 Access</Title>
            <Paragraph>
              You have the right to request copies of your personal information.
            </Paragraph>

            <Title level={3}>6.2 Correction</Title>
            <Paragraph>
              You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
            </Paragraph>

            <Title level={3}>6.3 Deletion</Title>
            <Paragraph>
              You have the right to request that we erase your personal information, under certain conditions.
            </Paragraph>

            <Title level={2} className="mt-6">7. Cookies</Title>
            <Paragraph>
              We use cookies to enhance your experience on our Website. For more information on our use of cookies, please see our Cookie Policy.
            </Paragraph>

            <Title level={2} className="mt-6">8. Changes to This Privacy Policy</Title>
            <Paragraph>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Website. Your continued use of the Website after such changes constitutes your acceptance of the new Privacy Policy.
            </Paragraph>

            <Title level={2} className="mt-6">9. Contact Us</Title>
            <Paragraph>
              If you have any questions about this Privacy Policy, please contact us at privacy@localsjob.com.
            </Paragraph>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default PrivacyPolicyPage;
