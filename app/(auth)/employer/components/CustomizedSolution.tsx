import React from 'react';
import { Card, Typography, Form, Input, Button, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const CustomizedSolutions: React.FC = () => {
    const onFinish = (values: any) => {
        // Handle form submission logic (e.g., send an email to the custom solutions team)
        console.log('Received values:', values);
    };

    return (
        <div>
            <h2>Customized Solutions</h2>
            <Card>
                <Title level={4}>Tailored Solutions for Your Needs</Title>
                <Paragraph>
                    Explore customized solutions designed to meet your unique business requirements.
                </Paragraph>
                <Divider />

                <Title level={4}>Request More Information</Title>
                <Paragraph>
                    Interested in learning more about our customized solutions? Fill out the form below.
                </Paragraph>
                <Form name="customSolutionsForm" onFinish={onFinish} layout="vertical">
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
                            Submit Request
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default CustomizedSolutions;
