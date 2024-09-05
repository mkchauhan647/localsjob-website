'use client'
import React from 'react';
import { Layout, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Navbar from '@/components/navbar/Navbar';

const { Title, Paragraph } = Typography;

const TermsPage = () => {
  return (
    <Layout className="min-h-screen">
      <Navbar />
      <Content className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow rounded-lg p-6">
            <Title level={1} className="border-b pb-4">Terms and Conditions</Title>

            <Title level={2} className="mt-6">1. Introduction</Title>
            <Paragraph>
              Welcome to LocalsJob (“the Website”). By accessing or using our Website, you agree to comply with and be bound by these Terms and Conditions (“Terms”). Please review these Terms carefully. If you do not agree with these Terms, you must not use our Website.
            </Paragraph>

            <Title level={2} className="mt-6">2. Use of the Website</Title>
            <Title level={3}>2.1 Eligibility</Title>
            <Paragraph>You must be at least 13 years old to use this Website.</Paragraph>

            <Title level={3}>2.2 User Accounts</Title>
            <Paragraph>
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
            </Paragraph>

            <Title level={3}>2.3 Prohibited Conduct</Title>
            <Paragraph>
              You agree not to use the Website for any unlawful purpose or any purpose prohibited under these Terms. You agree not to use the Website in any way that could damage the Website, or the general business of LocalsJob.com.
            </Paragraph>

            <Title level={2} className="mt-6">3. User Content</Title>
            <Title level={3}>3.1 Ownership</Title>
            <Paragraph>
              You retain ownership of all content you submit, post, or display on or through the Website. By submitting content, you grant LocalsJob.com a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, publish, and display such content in connection with the Website.
            </Paragraph>

            <Title level={3}>3.2 Responsibility</Title>
            <Paragraph>
              You are solely responsible for the content you upload, post, or otherwise transmit via the Website.
            </Paragraph>

            <Title level={2} className="mt-6">4. Job Postings and Applications</Title>
            <Title level={3}>4.1 Accuracy</Title>
            <Paragraph>
              Employers are responsible for the accuracy and legality of their job postings. Job seekers are responsible for the accuracy of the information they provide in their applications.
            </Paragraph>

            <Title level={3}>4.2 Prohibited Postings</Title>
            <Paragraph>
              Job postings must not contain misleading, fraudulent, or illegal content. LocalsJob.com reserves the right to remove any job posting that violates these Terms.
            </Paragraph>

            <Title level={2} className="mt-6">5. Subscription and Payment</Title>
            <Title level={3}>5.1 Fees</Title>
            <Paragraph>
              Certain services on the Website require payment of subscription fees. All fees are non-refundable except as required by law.
            </Paragraph>

            <Title level={3}>5.2 Billing</Title>
            <Paragraph>
              By subscribing to a service, you authorize LocalsJob.com to charge the applicable fees to your designated payment method.
            </Paragraph>

            <Title level={2} className="mt-6">6. Intellectual Property</Title>
            <Title level={3}>6.1 Trademarks</Title>
            <Paragraph>
              LocalsJob.com and all related logos are trademarks of LocalsJob.com or its affiliates. You may not use these trademarks without prior written permission.
            </Paragraph>

            <Title level={3}>6.2 Copyright</Title>
            <Paragraph>
              All content on the Website, including text, graphics, logos, and images, is the property of LocalsJob.com or its content suppliers and is protected by international copyright laws.
            </Paragraph>

            <Title level={2} className="mt-6">7. Termination</Title>
            <Paragraph>
              LocalsJob.com reserves the right to terminate your account or access to the Website at any time, without notice, for conduct that LocalsJob.com believes violates these Terms or is harmful to other users of the Website, LocalsJob.com, or third parties, or for any other reason.
            </Paragraph>

            <Title level={2} className="mt-6">8. Disclaimers and Limitation of Liability</Title>
            <Title level={3}>8.1 No Warranty</Title>
            <Paragraph>
              The Website is provided on an “as is” and “as available” basis. LocalsJob.com makes no warranties, either express or implied, about the Website.
            </Paragraph>

            <Title level={3}>8.2 Limitation of Liability</Title>
            <Paragraph>
              LocalsJob.com will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Website.
            </Paragraph>

            <Title level={2} className="mt-6">9. Governing Law</Title>
            <Paragraph>
              These Terms are governed by and construed in accordance with the laws of the jurisdiction in which LocalsJob.com operates, without regard to its conflict of law principles.
            </Paragraph>

            <Title level={2} className="mt-6">10. Changes to These Terms</Title>
            <Paragraph>
              LocalsJob.com reserves the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on the Website. Your continued use of the Website after such changes have been posted constitutes your acceptance of the new Terms.
            </Paragraph>

            <Title level={2} className="mt-6">11. Contact Us</Title>
            <Paragraph>
              If you have any questions about these Terms, please contact us at support@localsjob.com.
            </Paragraph>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default TermsPage;
