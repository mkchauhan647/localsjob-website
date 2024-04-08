export interface dataProps {
  id: number;
  name: string;
  company: {
    name: string;
    logo?: string;
  };
  content: string;
  city: {
    name: string;
  };
  salary_from: string;
  salary_to: string;
  job_time: string;
  slugable?: {
    key: string;
  };
}

export interface TitleProps {
  title: string;
}

export interface JobDataProps {
  id: number;
  name: string;
  company: {
    name: string;
    description?: string;
  };
  state: {
    name: string;
    abbreviation: string;
  };
  skills: {
    name: string;
  }[];
  slugable: {
    key: string;
  };
  views: number;
}
