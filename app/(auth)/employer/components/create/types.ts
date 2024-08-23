// types.ts
export interface CompanyData {
    id?: number;
    name: string;
    email?: string | null;
    description?: string;
    content?: string;
    website?: string;
    logo?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    address?: string;
    country_id: number;
    state_id?: number | null;
    city_id?: number | null;
    postal_code?: string | null;
    phone?: string | null;
    year_founded?: number | null;
    ceo?: string;
    number_of_offices?: number | null;
    number_of_employees?: number | null;
    annual_revenue?: string;
    cover_image?: string | null;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    is_featured?: number;
    status?: {
      value: string;
      label: string;
    };
    views?: number;
    created_at?: string;
    updated_at?: string;
    tax_id?: string | null;
  }

export interface Country {
    id: number;
    name: string;
  }
  
  export interface State {
    id: number;
    name: string;
  }
  
  export interface City {
    id: number;
    name: string;
  }
  