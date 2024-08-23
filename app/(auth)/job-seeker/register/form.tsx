import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import axios from "@/config/AxiosConfig";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
    md: { span: 12 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 9,
    },
    md: {
      span: 24,
      offset: 5,
    },
    lg: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);

    try {
      const { data } = await axios.post("/register", values);
      console.log("data",data);
      toast.success(data?.message, {
        duration: 3000,
        position: "top-left",
      });
      router.push("/login");
    } catch (error) {
      toast("User registration failed", {
        duration: 3000,
        position: "top-right",
        className: "text-red-900",
      });
    }
  };

  return (
    <Form
      {...formItemLayout}
      className="mt-10 ml-0 lg:ml-8 xl:ml-8 "
      form={form}
      name="register"
      onFinish={onFinish}
      style={{ width: "100%" }}
      scrollToFirstError
    >
      <Form.Item
        name="first_name"
        label="First Name"
        labelAlign="left"
        rules={[
          {
            required: true,
            message: "Please provide your first name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="last_name"
        label="Last Name"
        labelAlign="left"
        rules={[
          {
            required: true,
            message: "Please provide your last name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        labelAlign="left"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        labelAlign="left"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="password_confirmation"
        label="Confirm Password"
        labelAlign="left"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        labelAlign="left"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input style={{ width: "100%" }} />
      </Form.Item>

      {/* <Form.Item
        name="gender"
        label="Gender"
        labelAlign="left"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item> */}

      <Form.Item
        name="agreement"
        valuePropName="checked"
        labelAlign="left"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={{ width: "75%" }}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
