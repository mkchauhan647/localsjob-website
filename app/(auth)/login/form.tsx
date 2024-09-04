'use client';
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import toast from "react-hot-toast";
import axios from "@/config/AxiosConfig";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginForm: React.FC = () => {
  const router = useRouter();
  
  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    try {
      const { data } = await axios.post("/login", values);
      console.log("data", data);
      if (data?.data?.access_token) {
        Cookies.set("token", data.data.access_token, { expires: 7 }); // Set expiry for 7 days
        localStorage.setItem("userData", JSON.stringify(data.data.data));

        const backUrl = localStorage.getItem("backUrl") as string;
        localStorage.removeItem("backUrl");

        if (data.data.data.type.value === "job-seeker") {
          router.push(backUrl || "/job-seeker/candidate-dashboard");
        } else {
          router.push(backUrl || "/employer/employer-dashboard");
        }

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
    } finally {
      localStorage.removeItem("backUrl");
    }
  };

  return (
    <Form
      name="login_form"
      className="max-w-sm mx-auto bg-white p-8 shadow-lg rounded-lg"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Login to Your Account
      </h3>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          prefix={<UserOutlined className="text-gray-400" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="text-gray-400" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item className="flex justify-between items-center">
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="text-blue-600 hover:underline" href="/forget-password">
          Forgot password?
        </a>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
        >
          Log in
        </Button>
      </Form.Item>
      <Form.Item className="text-center">
        <a className="text-blue-600 hover:underline block mb-2" href="/job-seeker/register">
          Register as Job Seeker
        </a>
        <a className="text-blue-600 hover:underline" href="/employer/register">
          Register as Employer
        </a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
