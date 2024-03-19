import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined } from '@ant-design/icons';
import NewTable from './table';

const JobMenu: React.FC = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState<string>('matchingjob');

    const handleMenuSelect = (selected: any) => {
        setSelectedMenuItem(selected.key);
    };

    useEffect(() => {
        // Set initial state here without causing an update
        setSelectedMenuItem('matchingjob');
    }, []); // Empty dependency array to run the effect only once

    return (
        <div style={{ width: '100%', overflowX: 'auto' }}>
            <Menu theme="light" mode="horizontal" selectedKeys={[selectedMenuItem]} onSelect={handleMenuSelect}>
                <Menu.Item key="matchingjob" icon={<PieChartOutlined />}>
                    Matching job
                </Menu.Item>
                <Menu.Item key="recentlyapplied" icon={<DesktopOutlined />}>
                    Recently applied job
                </Menu.Item>
                <Menu.Item key="savedjob" icon={<FileOutlined />}>
                    Saved job
                </Menu.Item>
            </Menu>
            {/* Content goes here */}
            <div style={{ background: '#fff', padding: '24px', minHeight: '360px', }}>
                {/* Display content based on selectedMenuItem */}
                {selectedMenuItem === 'matchingjob' && <div>
                    <NewTable />
                </div>}
                {selectedMenuItem === 'recentlyapplied' && <div>
                    <NewTable />
                </div>}
                {selectedMenuItem === 'savedjob' && <div>
                    <NewTable />
                </div>}
            </div>
        </div>
    );
};

export default JobMenu;
