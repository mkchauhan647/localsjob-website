import { Card, Button } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import ResumeCard from './ResumeCard';
import Navbar from '../navbar/Navbar';

interface Resume {
    id: number;
    name: string;
    position: string;
    summary: string;
    bio: string;
    skills: string[];
    experiences: string[];
  }
  


const ResumeCollection = ({ resumes }:{resumes:Resume[]}) => {
  return (
      <div className="container mx-auto p-4">
          <Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 pb-16">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    </div>
  );
};

export default ResumeCollection;