
interface Status {
    value: string;
    label: string;
  }
  
  interface Company {
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
