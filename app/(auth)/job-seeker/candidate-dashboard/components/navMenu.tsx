import React, { useState } from 'react';
import { HomeOutlined, ProfileOutlined, LineChartOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import AvatarMenu from './avatar';
import { useRouter } from 'next/navigation';

interface ItemType {
    label: string;
    key: string;
    icon: React.ReactNode;
}


const items: (ItemType | null)[] = [
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


const NavMenuUser: React.FC = () => {
    const [current, setCurrent] = useState<string | null>(null);
    const router = useRouter();

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        if (e.key === 'overview') {
            router.push('/job-seeker/candidate-dashboard')
        }
    };

    return < div className='flex items-center justify-center w-[100%]'>
        <Menu
            onClick={onClick}
            selectedKeys={current ? [current] : []}
            mode="horizontal"
        >
            {items.map((item) => (
                <Menu.Item key={item?.key} icon={item?.icon}>
                    {item?.label}
                </Menu.Item>
            ))}
        </Menu>
        <AvatarMenu />
    </div>;
};

export default NavMenuUser;