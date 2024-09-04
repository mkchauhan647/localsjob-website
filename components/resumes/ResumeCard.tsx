import { Card, Button, Tag } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';

interface Resume {
    id: number;
    name: string;
    position: string;
    summary: string;
    bio: string;
    skills: string[];
    experiences: string[];
  }
  




  const ResumeCard = ({ resume }:{resume:Resume}) => {
    return (
      <Card
        title={resume.name}
        className="shadow-lg hover:shadow-xl transition-shadow duration-300"
        actions={[
          <Button type="primary" icon={<EyeOutlined />} className="bg-blue-500 hover:bg-blue-600">
            View
          </Button>,
          <Button type="primary" icon={<DownloadOutlined />} className="hover:bg-gray-200">
            Download
          </Button>,
        ]}
      >
        <p className="text-gray-600">{resume.position}</p>
        <p className="text-gray-500 text-sm mt-2">{resume.summary}</p>
      </Card>
    );
};
  
export default ResumeCard;
  

