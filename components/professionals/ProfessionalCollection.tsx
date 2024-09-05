import { Card, Button } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import Navbar from '../navbar/Navbar';
import ProfessionalCard from './ProfessionalCard';

interface Professional {
    id: number;
    name: string;
    position: string;
    summary: string;
    bio: string;
    skills: string[];
    experiences: string[];
  }
  


const ProfessionalCollection = ({ professionals }:{professionals:Professional[]}) => {
  return (
    <>
          <Navbar/>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 pb-16">
        {professionals.map((professional) => (
          <ProfessionalCard key={professional.id} professional={professional} />
        ))}
      </div>
      </div>
    </>
      
  );
};

export default ProfessionalCollection;