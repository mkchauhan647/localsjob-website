import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from 'antd';
const DynamicLineChart = dynamic(() => import('@ant-design/charts').then((module) => module.Line), {
    ssr: false, // Set ssr to false to ensure it's only loaded on the client side
});


const AnalyticsAndReports: React.FC = () => {
    // Placeholder data
    const data = [
        { month: 'Jan', value: 100 },
        { month: 'Feb', value: 200 },
        { month: 'Mar', value: 150 },
        // Add more data points as needed
    ];

    const config = {
        data: data,
        xField: 'month',
        yField: 'value',
        smooth: true,
        height: 300,
    };

    return (
        <div>
            <h2>Analytics and Reports</h2>
            <Card>
                <DynamicLineChart {...config} />
            </Card>
        </div>
    );
};

export default AnalyticsAndReports;
