import React, { useState } from 'react';
import { HomeOutlined, ProfileOutlined, LineChartOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { useRouter } from 'next/navigation';

interface ItemType {
    label: string;
    key: string;
    icon: React.ReactNode;
}

const items1: ItemType[] = [
    {
        label: 'Overview',
        key: 'overview',
        icon: <HomeOutlined />,
    },
    {
        label: 'My Profile',
        key: 'profile',
        icon: <ProfileOutlined />,
    },
    {
        label: 'My status',
        key: 'status',
        icon: <LineChartOutlined />,
    },
    {
        label: 'Settings',
        key: 'settings',
        icon: <SettingOutlined />,
    },
];

const items2: ItemType[] = [
    {
        label: 'Call us:+977 9845672354',
        key: 'contact',
        icon: <MdOutlinePhoneEnabled />,
    },
];

const NavMenuEmployer: React.FC = () => {
    const [current, setCurrent] = useState<string | null>(null);
    const router = useRouter();

    const onClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
        if (e.key === 'overview') {
            router.push('/job-seeker/candidate-dashboard');
        }
    };

    const useItems = true ? items1 : items2; // Adjust the condition as needed

    return (
        <div className='flex items-center justify-center w-[100%]'>
            <Menu onClick={onClick} selectedKeys={current ? [current] : []} mode="horizontal" style={{ minWidth: '150px' }}>
                {useItems.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>
        </div>
    );
};

export default NavMenuEmployer;
