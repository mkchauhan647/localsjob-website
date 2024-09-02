'use client'
import React, { useState,useEffect } from 'react';
import { Menu } from 'antd';
import { UserOutlined, LockOutlined, MessageOutlined } from '@ant-design/icons';
import AccountComponent from './Account';
import ChangePasswordComponent from './ChangePassword';
import FeedbackComponent from './Feedback';

import { getAccountSettings } from '@/app/utils/api';


const SettingsPage: React.FC = () => {
    const [selectedKey, setSelectedKey] = useState('account');
    const [accountData, setAccountData] = useState(null);

    useEffect(() => {
        async function fetchSettingsData() {
            try {
                const res = await getAccountSettings();
                console.log('Settings Data:', res);

                setAccountData(res.data);                


            } catch (err) {
                console.log('Error:', err);
            }
        }

        fetchSettingsData();


    }, []);


  const renderContent = () => {
    switch (selectedKey) {
      case 'account':
        return <AccountComponent data={accountData} />;
      case 'changepassword':
        return <ChangePasswordComponent />;
      case 'feedback':
        return <FeedbackComponent />;
      default:
        return <AccountComponent data={accountData} />;
    }
  };

  return (
    <div className="flex min-h-[400px] justify- center gap-5 flex-col lg:flex-row p-4">
      <div className="w-auto lg:w-1/4">
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={(e) => setSelectedKey(e.key)}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="account" icon={<UserOutlined />}>
            Account
          </Menu.Item>
          <Menu.Item key="changepassword" icon={<LockOutlined />}>
            Change Password
          </Menu.Item>
          <Menu.Item key="feedback" icon={<MessageOutlined />}>
            Give Feedback
          </Menu.Item>
        </Menu>
      </div>
          {
              accountData &&  <div className="w-auto lg:w-3/4 ">
              {  renderContent()}
            </div>
     }
    </div>
  );
};

export default SettingsPage;
