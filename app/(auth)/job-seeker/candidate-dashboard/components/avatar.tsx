import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        ),

    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
    {
        key: '4',
        danger: true,
        label: 'Logout',
    },
];

const AvatarMenu: React.FC = () => (
    <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                <Avatar size="large" icon={<UserOutlined />} />
            </Space>
        </a>
    </Dropdown>
);

export default AvatarMenu;