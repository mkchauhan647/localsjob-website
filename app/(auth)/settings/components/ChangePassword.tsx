'use client'
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { changePassword } from '@/app/utils/api';
import { useRouter } from 'next/navigation';
import { withAuth } from '@/app/utils/auth';
const ChangePassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    setLoading(true);
      try {
        const formData = new FormData();
        formData.append('current_password', values.current_password);
        formData.append('new_password', values.new_password);
        formData.append('new_password_confirmation', values.new_password_confirmation);

        // console.log('Form Data:', formData);
        const response = await changePassword(formData);
        console.log('Response:', response);
        if (response.status === 200) {
          
          typeof response.message == 'string' ? message.success(response.message) : message.success('Password changed successfully');
          router.refresh();
        } else {
          typeof response.message == 'string' ? message.error(response.message):  message.error('Error changing password');
        }
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
          rules={[{ required: true, message: 'Please confirm your new password' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('new_password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          })
          
        ]
          
          }
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

export default withAuth(ChangePassword);
