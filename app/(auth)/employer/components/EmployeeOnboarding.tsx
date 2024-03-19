import React, { useState } from 'react';
import { Form, Input, Button, Upload, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const EmployeeOnboarding: React.FC = () => {
    const [form] = Form.useForm();
    const [uploadedDocuments, setUploadedDocuments] = useState<string[]>([]);

    const onFinish = (values: any) => {
        // Handle employee onboarding logic, e.g., submit data to a server
        console.log('Received values:', values);
        message.success('Employee onboarding successful!');
    };

    const onDocumentUpload = (info: any) => {
        if (info.file.status === 'done') {
            setUploadedDocuments([...uploadedDocuments, info.file.name]);
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const documentUploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange: onDocumentUpload,
    };

    return (
        <div>
            <h2>Employee Onboarding Solutions</h2>
            <Card>
                <Form form={form} name="employeeOnboardingForm" onFinish={onFinish} layout="vertical">
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[{ required: true, message: 'Please enter your full name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    {/* Add more form fields as needed */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card style={{ marginTop: '16px' }}>
                <h3>Upload Documents</h3>
                <Upload {...documentUploadProps}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <div style={{ marginTop: '8px' }}>
                    <strong>Uploaded Documents:</strong>
                    <ul>
                        {uploadedDocuments.map((document, index) => (
                            <li key={index}>{document}</li>
                        ))}
                    </ul>
                </div>
            </Card>
        </div>
    );
};

export default EmployeeOnboarding;
