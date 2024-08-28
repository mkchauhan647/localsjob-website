import Link from 'next/link';
import FeatureJobCard from './FeatureJobCard'; 
import axios from '@/config/AxiosConfig';
import { SearchJobCard } from '../search-jobs/JobSearch';
import { Job } from '@/util/types';
// interface Category {
//     title: string;
//     type: string;
//     salary: string;
//     icon: string;
//     company: string;
//     location: string;
// }

// interface Category {
//     id:string
//     name: string;
//     job_types: [
//         {
//             id: string,
//             name: string
//         }
//     ];
//     salary_from: string;
//     salary_to: string;
//     icon: string;
//     company_id: string;
//     address: string;
// }


const FeatureJobs = async ({ relatedJob = false }:{relatedJob:boolean}) => {

    const categories: Job[] = await getCategories();

    // console.log("categories", categories);

    return (
        
        <>
        
            {
                categories && 
                <div className="bg-white  flex flex-col border-b border-[#E4E5E8] shadow-custom gap-[105px] sm:gap-[50px] p-4 py-[60px] sm:px-[100px] top-[1229px]">
                <div className="flex justify-between h-[48px] flex-col sm:flex-row gap-10">
                        <h2 className="text-4xl font-semibold text-black">{relatedJob ? "Related Jobs" : "Featured Jobs"}</h2>
                        {
                            <button className="text-figma_red border border-figma_red px-6 py-3 rounded-lg hover:bg-figma_red hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">{relatedJob ? "View more" : "View All"} <span className="ml-2">&rarr;</span></button>
                        }
                            </div>
                    <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 xl:grid-cols-3  gap-6 w-full mb- 5">
        
                  {categories.map((category:Job, index) => (
                      <Link href={`/jobs/${category.name.split(" ").map(value => value.toLocaleLowerCase()).join('-')}/${category.slugable.key}`} key={index}>
                          {/* <FeatureJobCard  job={category} /> */}
                            <SearchJobCard job={category} />  
                      </Link>
                  ))}
                    </div>
                    {/* <button className='bg-black text-white py-2 float-right rounded px-4 text-lg'>View more <span className='ml-3'>&rarr;</span></button> */}
              </div>
            }
        </>
    );
}
    

export default FeatureJobs;


async function getCategories() {


    try {
        const res = await axios.get('/featured-jobs');

        // console.log("res", res.data);

        return res.data.data.featuredJobs;
    }
    catch (error) {
        console.log(error);
    }

    return;

    // const categories:Category[] = [
    //     {
    //         title: 'Junior Graphic Designer',
    //         company: 'F1soft International Pvt Ltd',
    //         type: 'Internship',
    //         icon: 'f1soft.png',
    //         location: 'Kathmandu, Nepal',
    //         salary: '$20,000 - $25,000',
    //     },
    //     {
    //         title: 'Junior Graphic Designer',
    //         company: 'F1soft International Pvt Ltd',
    //         type: 'Full-Time',
    //         icon: 'f1soft.png',
    //         location: 'Kathmandu, Nepal',
    //         salary: '$20,000 - $25,000',
    //     },
    //     {
    //         title: 'Junior Graphic Designer',
    //         company: 'F1soft International Pvt Ltd',
    //         type: 'Remote',
    //         icon: 'f1soft.png',
    //         location: 'Kathmandu, Nepal',
    //         salary: '$20,000 - $25,000',
    //     },
    //     {
    //         title: 'Junior Graphic Designer',
    //         company: 'F1soft International Pvt Ltd',
    //         type: 'Part-Time',
    //         icon: 'f1soft.png',
    //         location: 'Kathmandu, Nepal',
    //         salary: '$20,000 - $25,000',
    //     },
    //     {
    //         title: 'Junior Graphic Designer',
    //         company: 'F1soft International Pvt Ltd',
    //         type: 'Internship',
    //         icon: 'f1soft.png',
    //         location: 'Kathmandu, Nepal',
    //         salary: '$20,000 - $25,000',
    //     },
    //     {
    //         title: 'Junior Graphic Designer',
    //         company: 'F1soft International Pvt Ltd',
    //         type: 'Internship',
    //         icon: 'f1soft.png',
    //         location: 'Kathmandu, Nepal',
    //         salary: '$20,000 - $25,000',
    //     }
    // ]
    // return categories;
}