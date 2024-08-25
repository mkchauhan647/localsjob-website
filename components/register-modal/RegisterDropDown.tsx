import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';


const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a className='font-semibold block px-[8px] py-[10px] !text-[rgba(0,0,0,.7)]' href="/job-seeker/register">
        Jobseeker Registration
      </a>
    ),
    icon: <UserOutlined style={{ fontSize: '24px', color: 'rgba(0,0,0,.5)' }} />
  },
  {
    key: '2',
    label: (
      <a className='font-semibold block px-[8px] py-[10px] !text-[rgba(0,0,0,.7)]' href="/employer/register">
        Employer Registration
      </a>
    ),
    icon: <HomeOutlined style={{ fontSize: '24px', color: 'rgba(0,0,0,.5)' }} />
  },
];

const RegisterDropDown = ({ home }:{home:boolean}) => (
  <>
    <Dropdown
      menu={{ items }}
      placement="bottomLeft" arrow
      overlayStyle={{ width: '260px' }}
    >
      {/* <Button className='!bg-[#f08c38] !text-white !border-none flex items-center' > */}
      <Button className={` ${home ? "!bg-white  border-none":"border !border-black !bg-white"}  h-[48px] rounded-full pb-2 px-3  w-[143px] text-[16px] font-bold `}>
        {/* Get Started  <UserOutlined /> */}
        Get Started
      </Button>
    </Dropdown>
  </>
);

export default RegisterDropDown;