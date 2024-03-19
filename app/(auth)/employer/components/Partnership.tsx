import React from 'react';
import { Card, Typography, Form, Input, Button, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const PartnershipOpportunities: React.FC = () => {
    const onFinish = (values: any) => {
        // Handle form submission logic (e.g., send an email to the partnership team)
        console.log('Received values:', values);
    };

    return (
        <div>
            <h2>Partnership Opportunities</h2>
            <Card>
                <Title level={4}>Explore Partnership Opportunities</Title>
                <Paragraph>
                    Discover collaboration possibilities and explore partnership opportunities with us.
                </Paragraph>
                <Divider />

                <Title level={4}>Contact Us</Title>
                <Paragraph>
                    Interested in exploring a partnership? Contact us using the form below.
                </Paragraph>
                <Form name="partnershipForm" onFinish={onFinish} layout="vertical">
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
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: 'Please enter your message' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default PartnershipOpportunities;
