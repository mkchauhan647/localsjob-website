import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { changePassword } from '@/app/utils/api';

const ChangePassword: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
      try {
        const formData = {
          current_password: values.current_password,
          new_password: values.new_password,
          new_password_confirmation: values.new_password_confirmation,
        };
      const response = await changePassword( formData);
        console.log('Response:', response);
      message.success('Password changed successfully');
    } catch (error) {
      message.error('Error changing password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Current Password"
          name="current_password"
          rules={[{ required: true, message: 'Please enter your current password' }]}
        >
          <Input.Password placeholder="Current Password" />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="new_password"
          rules={[{ required: true, message: 'Please enter your new password' }]}
        >
          <Input.Password placeholder="New Password" />
        </Form.Item>

        <Form.Item
          label="Confirm New Password"
          name="new_password_confirmation"
          rules={[{ required: true, message: 'Please confirm your new password' }]}
        >
          <Input.Password placeholder="Confirm New Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} className="w-full">
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePassword;
