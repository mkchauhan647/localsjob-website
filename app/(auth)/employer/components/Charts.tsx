import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartOptions {
    xLabels: string[];
}

const JobseekerGraph: React.FC = () => {
    const [barChartOptions, setBarChartOptions] = useState<BarChartOptions>({
        xLabels: [],
    });

    const [barChartData, setBarChartData] = useState([
        { level: 'Entry Level', count: 300000 },
        { level: 'Mid Level', count: 400000 },
        { level: 'Senior Level', count: 193281 },
    ]);

    useEffect(() => {
        // Code to run on component mount (client-side)
        // Log or perform other actions if needed
        console.log('JobseekerGraph component has been mounted.');

        // Clean up or perform actions on component unmount if needed
        return () => {
            console.log('JobseekerGraph component will unmount.');
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div>
            <p>Total Jobseeker Registered: </p>
            <ResponsiveContainer width="100%" height={300} minWidth={300}>
                <BarChart data={barChartData}>
                    <XAxis dataKey="level" />
                    <YAxis type="number" domain={[0, 'dataMax + 50000']} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default JobseekerGraph;
