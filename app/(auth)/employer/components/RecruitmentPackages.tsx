import React from 'react';
import { Card, Button, Row, Col } from 'antd';

interface RecruitmentPackage {
    title: string;
    description: string;
    price: string;
}

const RecruitmentPackages: React.FC = () => {
    const packages: RecruitmentPackage[] = [
        {
            title: 'Basic Package',
            description: 'Includes basic job postings.',
            price: '$99/month',
        },
        {
            title: 'Standard Package',
            description: 'Standard job postings with resume access.',
            price: '$199/month',
        },
        {
            title: 'Premium Package',
            description: 'Premium job postings with advanced features.',
            price: '$299/month',
        },
    ];

    const handleSelectPackage = (packageName: string) => {
        // Implement logic for selecting a package
        console.log(`Selected Package: ${packageName}`);
    };

    return (
        <div >
            <h2>Recruitment Packages</h2>
            <Row gutter={16}>
                {packages.map((packageItem) => (
                    <Col key={packageItem.title} span={8}>
                        <Card title={packageItem.title} style={{ marginBottom: '16px' }}>
                            <p>{packageItem.description}</p>
                            <p>Price: {packageItem.price}</p>
                            <Button type="primary" onClick={() => handleSelectPackage(packageItem.title)}>
                                Select
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default RecruitmentPackages;
