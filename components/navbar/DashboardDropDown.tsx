import React, { useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { HomeOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link'
import { useState } from 'react';



const DashboardDropDown = ({ home, handleLogout }: { home: boolean, handleLogout: () => {} }) => {

  const [userType, setUserType] = useState<string | null>(null);

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <Link href={`${userType && userType == 'job-seeker' ? "/job-seeker/candidate-dashboard" : "/employer/employer-dashboard"}`}>
               <div className="flex items-center px-[8px] py-[10px] hover:bg-gray-300 text-gray-600 rounded-md">
              <HomeOutlined style={{ fontSize: '24px', color: 'rgba(0,0,0,.5)', marginRight: '8px' }} />
              <span className="font-semibold !text-gray-600" >
                Dashboard
              </span>
              </div>
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link href='/settings'>
              <div className="flex items-center px-[8px] py-[10px] hover:bg-gray-300 text-gray-600  rounded-md">
              <SettingOutlined style={{ fontSize: '24px', color: 'rgba(0,0,0,.5)', marginRight: '8px' }} />
              <span className="font-semibold !text-gray-600">
                Setting
              </span>
            </div>
            </Link>
          ),
        },
        {
          key: '3',
          label: (
            <div  onClick={handleLogout}>
            <div className="flex items-center px-[8px] py-[10px] hover:bg-gray-300 text-gray-600 rounded-md">
              <LogoutOutlined style={{ fontSize: '24px', color: 'rgba(0,0,0,.5)', marginRight: '8px' }} />
                <span className="font-semibold !text-gray-600 ">Logout</span>
            </div>
            </div>
          ),
        },
      ];

    
    useEffect(() => {

        if (typeof window !== undefined) {
          const data = localStorage.getItem('userData');
          console.log('User Data:', data);

          if (data) {
            const userData = JSON.parse(data);
            console.log('User Data:', userData);
            setUserType(userData?.type?.value);
          }

        }
        
    },[])
    
    
    
    
return (
  <>
    <Dropdown
      menu={{ items }}
      placement="bottomLeft" arrow
      overlayStyle={{ width: '260px' }}
    >
      {/* <Button className='!bg-[#f08c38] !text-white !border-none flex items-center' > */}
      <Button className={` ${home ? "!bg-white  border-none":"border !border-black !bg-white"}  rounded-full my-auto px-3 min-w-[100px] h-[40px]  text-[16px] font-bold `}>
        {/* Get Started  <UserOutlined /> */}
        Account
      </Button>
    </Dropdown>
  </>
);
}
export default DashboardDropDown;