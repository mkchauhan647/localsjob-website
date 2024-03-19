import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';

interface Resume {
    key: string;
    name: string;
    skills: string;
    experience: string;
    // Add more fields as needed
}

const ResumeDatabase: React.FC = () => {
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [form] = Form.useForm();

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Skills',
            dataIndex: 'skills',
            key: 'skills',
        },
        {
            title: 'Experience',
            dataIndex: 'experience',
            key: 'experience',
        },
        // Add more columns as needed
    ];

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields().then(values => {
            const newResume: Resume = {
                key: Math.random().toString(),
                ...values,
            };
            setResumes([...resumes, newResume]);
            form.resetFields();
            setIsModalVisible(false);
        });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <h2>Resume Database</h2>
            <Button type="primary" onClick={showModal} style={{ marginBottom: '16px' }}>
                Add Resume
            </Button>
            <Table dataSource={resumes} columns={columns} />

            <Modal title="Add Resume" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter the name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="skills"
                        label="Skills"
                        rules={[{ required: true, message: 'Please enter the skills' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="experience"
                        label="Experience"
                        rules={[{ required: true, message: 'Please enter the experience' }]}
                    >
                        <Input />
                    </Form.Item>
                    {/* Add more form fields as needed */}
                </Form>
            </Modal>
        </div>
    );
};

export default ResumeDatabase;
