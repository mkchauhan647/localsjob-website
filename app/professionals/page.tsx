import ProfessionalCollection from "@/components/professionals/ProfessionalCollection";

const professionals = [
    {
      id: 1,
      name: 'Jane Smith',
      position: 'Data Scientist',
      summary: 'Expert in machine learning and data analysis...',
      bio: 'Data scientist with a strong background in statistics and programming, specializing in predictive modeling and data visualization.',
      skills: ['Python', 'R', 'TensorFlow', 'SQL', 'Pandas'],
      experiences: [
        'Built and deployed predictive models to forecast customer behavior',
        'Conducted extensive data analysis to identify key business metrics',
        'Collaborated with cross-functional teams to drive data-driven decision making',
      ],
    },
    {
      id: 2,
      name: 'Alice Johnson',
      position: 'Product Manager',
      summary: 'Skilled in leading product development from concept to launch...',
      bio: 'Product manager with a passion for creating user-centered products that solve real problems.',
      skills: ['Product Management', 'Agile', 'JIRA', 'User Research', 'Wireframing'],
      experiences: [
        'Managed the entire product lifecycle for a successful SaaS platform',
        'Led user research efforts to uncover pain points and opportunities',
        'Collaborated with design and engineering teams to deliver features on time',
      ],
    },
    {
      id: 3,
      name: 'Michael Brown',
      position: 'UI/UX Designer',
      summary: 'Creative designer with a focus on user experience and interface design...',
      bio: 'UI/UX designer with a keen eye for detail and a passion for creating intuitive and aesthetically pleasing user interfaces.',
      skills: ['Sketch', 'Figma', 'Adobe XD', 'HTML/CSS', 'Prototyping'],
      experiences: [
        'Designed user interfaces for mobile and web applications',
        'Conducted usability testing and iterated on designs based on user feedback',
        'Collaborated with developers to ensure design fidelity in implementation',
      ],
    },
    {
      id: 4,
      name: 'Robert Lee',
      position: 'DevOps Engineer',
      summary: 'Experienced in automating infrastructure and improving CI/CD pipelines...',
      bio: 'DevOps engineer with a strong background in cloud infrastructure, automation, and continuous integration/deployment.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      experiences: [
        'Implemented CI/CD pipelines to automate testing and deployment processes',
        'Managed cloud infrastructure and optimized resource usage to reduce costs',
        'Collaborated with development teams to improve deployment efficiency',
      ],
    },
    {
      id: 5,
      name: 'Emily Davis',
      position: 'Digital Marketing Specialist',
      summary: 'Expert in SEO, content marketing, and social media strategy...',
      bio: 'Digital marketing specialist with a focus on driving online growth through strategic content and SEO practices.',
      skills: ['SEO', 'Content Marketing', 'Google Analytics', 'Social Media', 'Email Marketing'],
      experiences: [
        'Developed and executed SEO strategies that increased organic traffic by 40%',
        'Managed social media campaigns that boosted engagement and brand visibility',
        'Created content marketing strategies that aligned with business goals',
      ],
    },
    {
      id: 6,
      name: 'David Wilson',
      position: 'Cybersecurity Analyst',
      summary: 'Specialist in identifying and mitigating cybersecurity threats...',
      bio: 'Cybersecurity analyst with expertise in threat detection, risk assessment, and vulnerability management.',
      skills: ['Network Security', 'Penetration Testing', 'SIEM', 'Firewalls', 'Incident Response'],
      experiences: [
        'Performed vulnerability assessments and implemented security measures',
        'Monitored network traffic and identified potential security threats',
        'Collaborated with IT teams to ensure compliance with security protocols',
      ],
    },
  ];
  
  
  export default function ResumePage() {
    return <ProfessionalCollection professionals={professionals} />;
  }
  