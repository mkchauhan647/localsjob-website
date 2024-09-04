'use client';
import React, { useState } from 'react';
import { Button, Form, Input, Modal, notification } from 'antd';
import axios from '@/config/AxiosConfig';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';

const ForgotPassword: React.FC = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [code, setCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [email, setEmail] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(false);

  const handleSubmitEmail = async (values: { email: string }) => {
    try {
        setLoading(true);
      await axios.post('/forgot-password', { email: values.email });
      setEmail(values.email);
      setEmailSent(true);
      setModalVisible(true);
      startResendTimer();
    } catch (error) {
      notification.error({ message: 'Error', description: 'Email not found' });
    } finally {
        setLoading(false);
    }
  };

  const handleCodeSubmit = async () => {
    try {
      const { data } = await axios.post('/verify-code', { email, code });
      if (data.valid) {
        router.push('/change-password');
      } else {
        notification.error({ message: 'Error', description: 'Invalid code' });
      }
    } catch (error) {
      notification.error({ message: 'Error', description: 'Code validation failed' });
    }
  };

  const handleResendCode = async () => {
    try {
      await axios.post('/resend-code', { email });
      notification.success({ message: 'Success', description: 'Code has been resent' });
      setResendTimer(60);
      startResendTimer();
    } catch (error) {
      notification.error({ message: 'Error', description: 'Failed to resend code' });
    }
  };

  const startResendTimer = () => {
    const timer = setInterval(() => {
      setResendTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

    return (
      <>
            <Navbar />
            <div className='py-16'>

      <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg ">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Forgot Password
      </h3>
      <Form
        name="forgot_password"
        onFinish={handleSubmitEmail}
        layout="vertical"
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
            Send Verification Code
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Verification Code Sent"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <p>A verification code has been sent to your email address.</p>
        <p>If you don't see the email, please check your spam folder.</p>
        <Form
          name="verify_code"
          onFinish={handleCodeSubmit}
          layout="vertical"
        >
          <Form.Item
            name="code"
            label="Verification Code"
            rules={[{ required: true, message: 'Please enter the verification code!' }]}
          >
            <Input
              placeholder="Enter verification code"
              onChange={(e) => setCode(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Verify Code
            </Button>
          </Form.Item>
          <Button
            type="link"
            className="w-full"
            onClick={handleResendCode}
            disabled={resendTimer > 0}
          >
            {resendTimer > 0 ? `Resend Code (${resendTimer}s)` : 'Resend Code'}
          </Button>
        </Form>
      </Modal>
                </div>
            </div>
                
      </>
            
  );
};

export default ForgotPassword;
