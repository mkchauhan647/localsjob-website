import Navbar from "@/components/navbar/Navbar";
import CompanyCard from "@/components/top-companies/CompanyCard";
import axios from '@/config/AxiosConfig'
import Link from 'next/link';
import CompanyView from "./components/CompanyView";
interface Company {

    name: string;
    location: string;
    position: number;
    icon: JSX.Element;
    logo?: JSX.Element;
    jobs_count?: number;
    address?: string;
    description?: string;
  }



export default async function Page(props: any) {

    async function getCompanies() {
        try {
            const res = await axios.get('/top-companies');
            
            return res.data.data.topCompanies
        }
        catch (error) {
            console.error(error);
        }

    }

    const companies = await getCompanies();
    
    console.log("props", props);
    return (
        <>
            <Navbar />
            
        <div className=" flex justify- center items- center container mx-auto p-10">
                {/* <h1>Companies Page</h1> */}
                {/* <div className="flex flex-col gap-5 grow"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 w-full mb- 5">

                    {
                        companies.map((company: Company, index: number) => (
                            <Link key={index} href={`/companies/${company.name.replace(/\./g,'').split(/[\/ ]+/).map((value: string) => value.toLocaleLowerCase().trim())
                                .join('-')}`} className="  ">
                            
                                <CompanyView company={company} />
                                </Link>
                        ))
                    }
                    </div>
                
                
        </div>
        </>
    )
}


