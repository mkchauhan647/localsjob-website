"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import toast from "react-hot-toast";
import axios from "@/config/AxiosConfig";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    try {
      const { data } = await axios.post("/login", values);
      if (data?.data?.token) {
        localStorage.setItem("token", data?.data?.token);
        router.push("/job-seeker/candidate-dashboard");
        toast.success("You have been logged in", {
          duration: 3000,
          position: "top-left",
        });
      }
    } catch (error) {
      toast.error("Invalid credentials", {
        duration: 4000,
        position: "top-left",
      });
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a
          className="login-form-forgot text-[#0958d9] absolute right-0"
          href=""
        >
          Forgot password ?
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button w-[50%]"
        >
          Log in
        </Button>
        <a
          className="text-[#0958d9] absolute right-0 top-2"
          href="/employer/register"
        >
          Register now!
        </a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
