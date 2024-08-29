import React, { useState } from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
} from 'antd';
// import axios from 'axios';
import axios from '@/config/AxiosConfig';
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';

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
        md: { span: 12 }
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

    const onFinish = async (values: any) => {
        console.log('Received values of form: ', values);

        // api endpoint is https://main.localsjob.com/api/v1/employers/register

        const formData = new FormData();
        // formData.append('organizationName', values.organizationName);
        // formData.append('organizationIndustryType', values.organizationIndustryType);
        formData.append('first_name', values.first_name);
        formData.append('last_name', values.last_name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('password', values.password);
        formData.append('confirm_password', values.confirm_password);
        // formData.append

        try {
            const response = await axios.post('/register', {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                phone: values.phone,
                password: values.password,
                password_confirmation: values.password_confirmation,
                is_employer: 1,
            }, {
                headers: {
                    'Accept': 'Application/json',
                    'Content-Type': 'Application/x-www-form-urlencoded',
            }, });

        if (response.status === 200) {
            console.log('Employer account created successfully!');
            
            console.log("res", response.data);
            if (response.data?.data?.token) {

                Cookies.set('token', response.data.data.token, { expires: 7 }); // Set expiry for 7 days
               
                toast.success('Employer account created successfully!');
            }


        } 
        }
       catch (error) {
        console.error('There was an error creating the employer account!', error);
           toast.error('There was an error creating the employer account!');
        }


    };

    return (
        <>
        <Form
            {...formItemLayout}
            className='mt-10 ml-8 md:ml-0 lg:ml-8'
            form={form}
            name="register"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            scrollToFirstError
        >
            {/* <Form.Item
                name="organizationName"
                label="Organization Name"
                labelAlign='left'
                rules={[
                    {
                        required: true,
                        message: 'Please provide your organization name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="organizationIndustryType"
                label="Type"
                labelAlign='left'
                hasFeedback
                rules={[{ required: true, message: 'Please select your country!' }]}
            >
                <Select placeholder="Please select Organization Industry Type">
                    <Option value="AdvertisingAgency">Advertising Agency</Option>
                    <Option value="Airlines">Airlines / GSA</Option>
                    <Option value="Hotels">Hotels / Resorts / Resturants</Option>
                    <Option value="Hospital">Hospital / Clinic / Diagnostic Centre</Option>
                    <Option value="Information">Information / Computer / Technology</Option>
                </Select>
                </Form.Item>
                 */}
                <Form.Item
                name="first_name"
                label="First Name"
                    labelAlign='left'
                
                rules={[
                    {
                        required: true,
                        message: 'Please input first name !',
                    },
                ]}
            >
                <Input />
                </Form.Item>
                
                <Form.Item
                name="last_name"
                label="Last Name"
                labelAlign='left'
                rules={[
                    {
                        required: true,
                        message: 'Please input last name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>



            <Form.Item
                name="email"
                label="email"
                labelAlign='left'
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input official email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Phone Number"
                labelAlign='left'
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                labelAlign='left'
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="password_confirmation"
                label="Confirm Password"
                labelAlign='left'
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item
                name="gender"
                label="Gender"
                labelAlign='left'
                rules={[{ required: true, message: 'Please select gender!' }]}
            >
                <Select placeholder="Select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>


            <Form.Item
                name="agreement"
                valuePropName="checked"
                labelAlign='left'
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={{ width: '75%' }}>
                    Create an Employer Account
                </Button>
            </Form.Item>
        </Form>
         <Toaster/>                
        </>
    );
};

export default RegistrationForm;