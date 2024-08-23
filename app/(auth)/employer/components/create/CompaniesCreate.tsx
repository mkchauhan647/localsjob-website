// import React, { useState ,useEffect} from 'react';
// import { fetchCountries, fetchStates, fetchCities, saveCompany } from './api';
// import { Country, State, City, CompanyData } from './types';

// const CreateCompany: React.FC = () => {
//   const [companyData, setCompanyData] = useState<CompanyData>({
//     name: '',
//     description: '',
//     country_id: 0,
//     state_id: null,
//     city_id: null,
//     address: '',
//   });

//   const [countries, setCountries] = useState<Country[]>([]);
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setCompanyData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleCountryChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const countryId = Number(e.target.value);
//     setCompanyData((prevData) => ({ ...prevData, country_id: countryId, state_id: null, city_id: null }));
//     const statesData = await fetchStates(countryId);
//     setStates(statesData);
//   };

//   const handleStateChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const stateId = Number(e.target.value);
//     setCompanyData((prevData) => ({ ...prevData, state_id: stateId, city_id: null }));
//     const citiesData = await fetchCities(companyData.country_id, stateId);
//     setCities(citiesData);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await saveCompany(companyData);
//       alert('Company saved successfully!');
//     } catch (error) {
//       console.error('Error saving company:', error);
//       alert('Failed to save company.');
//     }
//   };

//   useEffect(() => {
//     const loadCountries = async () => {
//       const countriesData = await fetchCountries();
//       setCountries(countriesData);
//     };
//     loadCountries();
//   }, []);

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Company Name</label>
//         <input
//           type="text"
//           name="name"
//           value={companyData.name}
//           onChange={handleInputChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea
//           name="description"
//           value={companyData.description}
//           onChange={handleInputChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Country</label>
//         <select
//           name="country_id"
//           value={companyData.country_id}
//           onChange={handleCountryChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           required
//         >
//           <option value="" disabled>Select a country</option>
//           {countries.map((country) => (
//             <option key={country.id} value={country.id}>
//               {country.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {companyData.country_id && (
//         <div>
//           <label className="block text-sm font-medium text-gray-700">State</label>
//           <select
//             name="state_id"
//             value={companyData.state_id || ''}
//             onChange={handleStateChange}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           >
//             <option value="" disabled>Select a state</option>
//             {states.map((state) => (
//               <option key={state.id} value={state.id}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {companyData.state_id && (
//         <div>
//           <label className="block text-sm font-medium text-gray-700">City</label>
//           <select
//             name="city_id"
//             value={companyData.city_id || ''}
//             onChange={(e) => setCompanyData({ ...companyData, city_id: Number(e.target.value) })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           >
//             <option value="" disabled>Select a city</option>
//             {cities.map((city) => (
//               <option key={city.id} value={city.id}>
//                 {city.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       <div>
//         <label className="block text-sm font-medium text-gray-700">Address</label>
//         <input
//           type="text"
//           name="address"
//           value={companyData.address}
//           onChange={handleInputChange}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//         />
//       </div>

//       <button
//         type="submit"
//         className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm"
//       >
//         Save Company
//       </button>
//     </form>
//   );
// };

// export default CreateCompany;

import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Upload, InputNumber, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { saveCompany, fetchCountries, fetchStates, fetchCities } from './api';
import { CompanyData } from './types';
import toast from 'react-hot-toast';

const { TextArea } = Input;
const { Option } = Select;

const CompanyForm: React.FC = () => {
  const [form] = Form.useForm();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [companyData, setCompanyData] = useState<Partial<CompanyData>>({ country_id: 0 });

  useEffect(() => {
    const loadCountries = async () => {
      const countryData = await fetchCountries();
      setCountries(countryData);
    };
    loadCountries();
  }, []);

  const handleCountryChange = async (value: number) => {
    setCompanyData((prevData) => ({ ...prevData, country_id: value, state_id: undefined, city_id: undefined }));
    form.setFieldsValue({ state_id: undefined, city_id: undefined });
    const stateData = await fetchStates(value);
    setStates(stateData);
    setCities([]);
  };

  const handleStateChange = async (value: number) => {
    setCompanyData((prevData) => ({ ...prevData, state_id: value, city_id: undefined }));
    form.setFieldsValue({ city_id: undefined });
    const cityData = await fetchCities(companyData.country_id!, value);
    setCities(cityData);
  };

  const onFinish = async (values: CompanyData) => {
    console.log('Received values:', values);
    try {
      await saveCompany(values);
      console.log('Company saved successfully');
      toast.success('Company saved successfully');
    } catch (error) {
      console.error('Failed to save company:', error);
      toast.error('Failed to save company');
    }
  };

  return (
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
      initialValues={companyData}
      
        >
      {/* <Col span={18}> */}
    <div className='flex flex-col lg:flex-row  gap-6  '>

        <div className='flex flex-col border border-gray-300 p-4 grow' >

        <Form.Item label="Company Name" name="name" rules={[{ required: true, message: 'Please enter the company name' }]}>
            <Input placeholder="Enter company name" />
          </Form.Item>

          <Form.Item label="Permalink" name="permalink">
            <Input placeholder="https://localsjob.com/companies/company-name" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea rows={3} placeholder="Enter a short description of the company" />
          </Form.Item>

          <Form.Item label="Content" name="content">
            <TextArea rows={4} placeholder="Enter detailed company content" />
          </Form.Item>

          <div className='flex flex-col lg:flex-row gap-5 border border-gray-300 p-4 m-1 '>
          <Form.Item label="Tax ID" name="tax_id">
            <Input placeholder="Enter tax ID" />
          </Form.Item>

          <Form.Item label="Company CEO / President" name="ceo">
            <Input placeholder="Enter CEO / President name" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ type: 'email', message: 'Please enter a valid email' }]}>
            <Input placeholder="Ex: contact@your-company.com" />
          </Form.Item>
          </div>

          <div className='flex flex-col lg:flex-row gap-5 border border-gray-300 p-4 m-1'>
          <Form.Item label="Phone" name="phone">
            <Input placeholder="Phone number, will be public" />
          </Form.Item>

          <Form.Item label="Website" name="website" rules={[{ type: 'url', message: 'Please enter a valid URL' }]}>
            <Input placeholder="https://company-website.com" />
          </Form.Item>

          <Form.Item label="Year Founded" name="year_founded">
            <InputNumber placeholder="Ex: 1987" style={{ width: '100%' }} />
            </Form.Item>
            </div>

          <div className='flex flex-col lg:flex-row gap-5 border border-gray-300 p-4 m-1'>
          <Form.Item label="Number of Offices" name="number_of_offices">
            <InputNumber placeholder="Ex: 3" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Number of Employees" name="number_of_employees">
            <InputNumber placeholder="Ex: 100-250" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Annual Revenue" name="annual_revenue">
            <Input placeholder="Ex: 2M" />
            </Form.Item>
            </div>

          <div className='flex flex-col lg:flex-row gap-5 border border-gray-300 p-4 m-1'>
          <Form.Item label="Country" name="country_id" rules={[{ required: true, message: 'Please select a country' }]}>
            <Select placeholder="Select a country" onChange={handleCountryChange}>
              {countries.map((country) => (
                <Option key={country.id} value={country.id}>
                  {country.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="State" name="state_id" rules={[{ required: true, message: 'Please select a state' }]}>
            <Select placeholder="Select a state" onChange={handleStateChange} disabled={!states.length}>
              {states.map((state) => (
                <Option key={state.id} value={state.id}>
                  {state.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="City" name="city_id" rules={[{ required: true, message: 'Please select a city' }]}>
            <Select placeholder="Select a city" disabled={!cities.length}>
              {cities.map((city) => (
                <Option key={city.id} value={city.id}>
                  {city.name}
                </Option>
              ))}
            </Select>
            </Form.Item>
            </div>

          <div className='flex flex-col lg:flex-row gap-5 border border-gray-300 p-4 m-1'>
          <Form.Item label="Address" name="address">
            <Input placeholder="Enter company address" />
          </Form.Item>

          <Form.Item label="Postal Code" name="postal_code">
            <Input placeholder="Ex: 12345" />
            </Form.Item>
            </div>

          <div className='flex flex-col lg:flex-row gap-5 border border-gray-300 p-4 m-1'>
          <Form.Item label="Latitude" name="latitude">
            <InputNumber placeholder="Ex: 14.622260" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Longitude" name="longitude">
            <InputNumber placeholder="Ex: 103.812530" style={{ width: '100%' }} />
            </Form.Item>
            </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 border border-gray-300 p-4 m-1'>
          <Form.Item label="Facebook URL" name="facebook">
            <Input placeholder="https://facebook.com/company-name" />
          </Form.Item>

          <Form.Item label="X (Twitter) URL" name="twitter">
            <Input placeholder="https://x.com/company-name" />
          </Form.Item>

          <Form.Item label="LinkedIn URL" name="linkedin">
            <Input placeholder="https://linkedin.com/company/company-name" />
          </Form.Item>

          <Form.Item label="Instagram URL" name="instagram">
            <Input placeholder="https://instagram.com/company-name" />
          </Form.Item>
          </div>

          {/* </Col> */}

          {/* <Col span={24}> */}
         </div>
        <div className=' w-auto lg:w-1/4 '>
        <Form.Item className=''>
            <div className='border border-gray-300 p-4 h-[200px] flex flex-col justify-center items-center gap-3'>
            <Button type="primary" htmlType="submit">
              Save Company
            </Button>
            <Button type="primary" htmlType="submit">
              Save And Exit
              </Button>
              
              
           </div>
            </Form.Item>
        <Form.Item label="Logo" name="logo" className='border border-gray-300 p-4 h-[350px] text-white'>
            <Upload name="logo" action="" listType="picture" maxCount={1} className=''>
              <Button icon={<UploadOutlined />} className='text-white'>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Cover Image" name="cover_image" className='border border-gray-300 p-4 h-[350px]'>
            <Upload name="cover_image" action="" listType="picture" className='' maxCount={1}>
              <Button icon={<UploadOutlined />} className='text-white'>Click to Upload</Button>
            </Upload>
          </Form.Item>

         
            
          </div>
            {/* </Col> */}
         
    </div>
          
        </Form>
  );
};

export default CompanyForm;
