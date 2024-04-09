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

export interface JobCategories {
  id: number;
  name: string;
  active_jobs_count: number;
  slugable: {
    key: string;
  };
}

export interface CategoryDetails {
  category: {
    id: number;
    name: string;
    description: string;
    status: {
      label: string;
      value: string;
    };
  };

  jobs: {
    data: {
      id: number;
      name: string;
      company: {
        name: string;
        description: string;
      };
      job_experience: {
        name: string;
      };
      job_experience_id: number;
      job_types: {
        name: string;
      }[];
      salary_from: number;
      salary_to: number;
      slugable: {
        key: string;
      };
      tags: {
        name: string;
      }[];
      views: number;
    }[];
  };
}

export interface UserJobDetails {
  name: string;
  number_of_positions: number;
  company: {
    name: string;
    description: string;
  };
  city: {
    name: string;
  };
  salary_from: string;
  salary_to: string;
  expire_date: Date;
}
