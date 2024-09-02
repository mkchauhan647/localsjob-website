import axios from 'axios';
import { CompanyData } from './types';
import { Country, State, City } from './types';
import Cookies from 'js-cookie';

const token = Cookies.get("token") || null;

export const saveCompany = async (companyData: CompanyData): Promise<void> => {

    if (token === null) {
        throw new Error('Token not found or unauthorized');
    }

  await axios.post('https://localsjob.com/api/v1/companies/save', { data: companyData }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};



export const fetchCountries = async (): Promise<Country[]> => {
    if (token === null) {
        throw new Error('Token not found or unauthorized');
    }
  const response = await axios.get('https://localsjob.com/api/v1/countries', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const fetchStates = async (countryId: number): Promise<State[]> => {
    if (token === null) {
        throw new Error('Token not found or unauthorized');
    }
  const response = await axios.get(`https://localsjob.com/api/v1/states?country_id=${countryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const fetchCities = async (countryId: number, stateId: number): Promise<City[]> => {
    if (token === null) {
        throw new Error('Token not found or unauthorized');
    }
  const response = await axios.get(
    `https://localsjob.com/api/v1/cities?country_id=${countryId}&state_id=${stateId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.data;
};


