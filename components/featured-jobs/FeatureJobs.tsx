import FeatureJobCard from './FeatureJobCard'; 


interface Category {
    title: string;
    type: string;
    salary: string;
    icon: string;
    company: string;
    location: string;
}


const FeatureJobs = ({ relatedJob = false }:{relatedJob:boolean}) => {

    const categories: Category[] = getCategories();

    return (
        <div className="bg-white min-h-[648px] flex flex-col border-b border-[#E4E5E8] shadow-custom gap-[105px] sm:gap-[50px] p-4 pt-[60px] sm:px-[100px] top-[1229px]">
        <div className="flex justify-between h-[48px] flex-col sm:flex-row gap-10">
                <h2 className="text-4xl font-semibold text-black">{relatedJob ? "Related Jobs" : "Featured Jobs"}</h2>
                {
                    <button className="text-figma_red border border-figma_red px-6 py-3 rounded-lg">{relatedJob ? "View more" : "View All"} <span className="ml-2">&rarr;</span></button>
                }
                    </div>
            <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-6 w-full mb- 5">

          {categories.map((category, index) => (
            <FeatureJobCard key={index} job={category} />
          ))}
            </div>
            {/* <button className='bg-black text-white py-2 float-right rounded px-4 text-lg'>View more <span className='ml-3'>&rarr;</span></button> */}
      </div>
    );
}
    

export default FeatureJobs;


function getCategories() {
    const categories:Category[] = [
        {
            title: 'Junior Graphic Designer',
            company: 'F1soft International Pvt Ltd',
            type: 'Internship',
            icon: 'f1soft.png',
            location: 'Kathmandu, Nepal',
            salary: '$20,000 - $25,000',
        },
        {
            title: 'Junior Graphic Designer',
            company: 'F1soft International Pvt Ltd',
            type: 'Full-Time',
            icon: 'f1soft.png',
            location: 'Kathmandu, Nepal',
            salary: '$20,000 - $25,000',
        },
        {
            title: 'Junior Graphic Designer',
            company: 'F1soft International Pvt Ltd',
            type: 'Remote',
            icon: 'f1soft.png',
            location: 'Kathmandu, Nepal',
            salary: '$20,000 - $25,000',
        },
        {
            title: 'Junior Graphic Designer',
            company: 'F1soft International Pvt Ltd',
            type: 'Part-Time',
            icon: 'f1soft.png',
            location: 'Kathmandu, Nepal',
            salary: '$20,000 - $25,000',
        },
        {
            title: 'Junior Graphic Designer',
            company: 'F1soft International Pvt Ltd',
            type: 'Internship',
            icon: 'f1soft.png',
            location: 'Kathmandu, Nepal',
            salary: '$20,000 - $25,000',
        },
        {
            title: 'Junior Graphic Designer',
            company: 'F1soft International Pvt Ltd',
            type: 'Internship',
            icon: 'f1soft.png',
            location: 'Kathmandu, Nepal',
            salary: '$20,000 - $25,000',
        }
    ]
    return categories;
}