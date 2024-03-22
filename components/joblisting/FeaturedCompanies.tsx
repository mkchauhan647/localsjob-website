// FeaturedCompaniesGrid.tsx
import React from 'react';
import { Row, Col } from 'antd';


interface FeaturedCompaniesGridProps {
    featuredCompanies: Array<{ id: number; name: string; jobs: number; location: string }>;
}

const FeaturedCompaniesGrid: React.FC<FeaturedCompaniesGridProps> = ({ featuredCompanies }) => {
    return (
        <Row gutter={[16, 8]}>
            {featuredCompanies.map((company) => (
                <Col key={company.id} xs={24} sm={12} md={8} lg={8} xl={8}>
                    <div className="shadow-lg py-2 px-2 hover:bg-[rgb(0,0,0,.1)] duration-500 cursor-pointer border rounded-md border-gray-300">
                        <div className='flex justify-between items-center'>
                            <p className="font-semibold leading-tight whitespace-normal">{company.name}</p>
                          
                        </div>
                        <p className="text-xs"> {company.location}</p>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default FeaturedCompaniesGrid;
