import React from 'react';
import { Card, Divider, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const SupportAndTraining: React.FC = () => {
    return (
        <div>
            <h2>Support and Training</h2>
            <Card>
                <Title level={4}>Support Information</Title>
                <Paragraph>
                    If you need assistance or have any questions, please contact our support team.
                </Paragraph>
                <Divider />

                <Title level={4}>Training Resources</Title>
                <Paragraph>
                    Explore our training materials to enhance your skills and knowledge.
                </Paragraph>
                <Button type="primary" style={{ marginBottom: '16px' }}>
                    Access Training Portal
                </Button>
                {/* Add more training resources as needed */}
            </Card>
        </div>
    );
};

export default SupportAndTraining;
