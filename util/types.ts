
interface Status {
    value: string;
    label: string;
  }
  
  export interface Company {
    id: number;
    name: string;
    email: string;
    description: string;
    content: string;
    website: string;
    logo: string;
    latitude: number | null;
    longitude: number | null;
    address: string;
    country_id: number;
    state_id: number;
    city_id: number;
    postal_code: string | null;
    phone: string | null;
    year_founded: number;
    ceo: string;
    number_of_offices: number | null;
    number_of_employees: number;
    annual_revenue: string;
    cover_image: string | null;
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    is_featured: number;
    status: Status;
    views: number;
    created_at: string;
    updated_at: string;
    tax_id: string | null;
  }
  
  interface JobType {
    id: number;
    name: string;
    order: number;
    is_default: number;
    status: Status;
    created_at: string;
    updated_at: string;
    pivot: Record<string, any>; // Adjust the pivot structure based on the actual structure
  }
  
  export interface Job {
    id: number;
    name: string;
    salary_from: number | null;
    salary_to: number | null;
    address: string;
    company_id: number;
    is_featured: number;
    company: Company;
      job_types: JobType[];
      description: string;
    content: string;
    expired_date: string;
    job_level: string;
    created_at: string;
    job_experience: {
      id: string;
      name: string;
    }
    
    degree_level: {
      id: string;
      name: string;
    }
    salary_range: {
      value: string;
      label: string;
    }
    slugable: {
      key: string;
    }
    tags: [
      {
        name: string;
      }
    ]
  }
  

// Testimonials types
  
interface TestimonialStatus {
  value: string;
  label: string;
}

export interface Testimonial {
  id?: number;
  name?: string;
  content?: string;
  image?: string | null;
  company?: string;
  status?: TestimonialStatus;
  created_at?: string;
  updated_at?: string;

  star: number;
      title: string;
      description: string;
      avatar: string;
      avatar_text: string;
}


interface AccountType {
  value: string;
  label: string;
}

export interface Account {
  id: number;
  first_name: string;
  last_name: string;
  description: string | null;
  gender: 'male' | 'female' | 'other';
  email: string;
  avatar_id: number | null;
  dob: string | null;
  phone: string;
  confirmed_at: string | null;
  email_verify_token: string | null;
  type: AccountType;
  credits: number;
  resume: string | null;
  address: string | null;
  bio: string | null;
  is_public_profile: boolean;
  hide_cv: boolean;
  views: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  available_for_hiring: boolean;
  country_id: number | null;
  state_id: number | null;
  city_id: number | null;
  cover_letter: string | null;
  
}

export interface AccountSettings {
  account: Account;
  jobSkills: JobSkill[];
  jobTags: JobTag[];
}

export interface JobSkill {
  id: number;
  name: string;
}

export interface JobTag {
  id: number;
  name: string;
}

export interface JobData {
  jobSkills: JobSkill[];
  jobTags: JobTag[];
}

export interface JobApplication {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  jobName: string;
  companyName: string;
  appliedDate: string;
  status: string;
}

export interface JobApplicationResponse {
  currentPage: number;
  data: JobApplication[];
  lastPage: number;
  total: number;
}
