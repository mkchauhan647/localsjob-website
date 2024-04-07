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
}

export interface TitleProps {
  title: string;
}
