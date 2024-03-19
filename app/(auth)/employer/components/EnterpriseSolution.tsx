import React from 'react';
import { Card, Typography, Form, Input, Button, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const EnterpriseSolutions: React.FC = () => {
    const onFinish = (values: any) => {
        // Handle form submission logic (e.g., send an email to the enterprise solutions team)
        console.log('Received values:', values);
    };

    return (
        <div>
            <h2>Enterprise Solutions</h2>
            <Card>
                <Title level={4}>Powering Your Enterprise with Customized Solutions</Title>
                <Paragraph>
                    Explore our comprehensive enterprise solutions designed to scale with your business needs.
                </Paragraph>
                <Divider />

                <Title level={4}>Contact Our Enterprise Solutions Team</Title>
                <Paragraph>
                    For more information about our enterprise offerings, please fill out the form below.
                </Paragraph>
                <Form name="enterpriseSolutionsForm" onFinish={onFinish} layout="vertical">
                    <Form.Item
                        label="Your Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Your Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Company Name"
                        name="companyName"
                        rules={[{ required: true, message: 'Please enter your company name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: 'Please enter your message' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit Inquiry
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default EnterpriseSolutions;
