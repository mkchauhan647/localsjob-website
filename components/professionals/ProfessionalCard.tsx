'use client'
import { Card, Button, Tag, notification } from 'antd';
import { ContactsOutlined, DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
interface Professional{
    id: number;
    name: string;
    position: string;
    summary: string;
    bio: string;
    skills: string[];
    experiences: string[];
  }



const ProfessionalCard = ({ professional }: { professional: Professional }) => {
  
  const router = useRouter();
  

  const handleView = () => {
    console.log('View Professional');
    notification.info({ message: 'View Professional', description: professional.name });
    return;
  };

  const handleContact = () => {
    console.log('Contact Professional');
    const token = Cookies.get('token') || null;
    if (token === null) {
      // throw new Error('Token not found or unauthorized');
      router.push('/login');
      return;
      
    }
    notification.info({ message: 'Contact Professional', description: professional.name });
  };



  return (
    <Card
      title={professional.name}
      className="shadow-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300"
      actions={[
        <Button type="primary" icon={<EyeOutlined />} className="bg-blue-500 hover:bg-blue-600" onClick={handleView}>
          View
        </Button>,
        <Button type="primary" icon={<ContactsOutlined />} className="hover:bg-gray-200" onClick={handleContact}>
          Contact
        </Button>,
      ]}
    >
      <p className="text-gray-600">{professional.position}</p>

      {/* Short Bio */}
      <p className="text-gray-500 text-sm mt-2">{professional.bio}</p>

      {/* Skills */}
      <div className="mt-4">
        <p className="font-semibold text-gray-700">Skills:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {professional.skills.map((skill, index) => (
            <Tag key={index} color="blue" className="text-sm">
              {skill}
            </Tag>
          ))}
        </div>
      </div>

      {/* Experiences */}
      <div className="mt-4">
        <p className="font-semibold text-gray-700">Experience:</p>
        <ul className="list-disc list-inside text-gray-500 text-sm mt-2">
          {professional.experiences.map((experience, index) => (
            <li key={index}>{experience}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ProfessionalCard;
