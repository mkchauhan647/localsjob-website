import CompanyCard from '@/components/top-companies/CompanyCard';
import axios from '@/config/AxiosConfig'
import Link from 'next/link';
interface Company {
    name: string;
    location: string;
    position: number;
    icon: JSX.Element;
    logo?: JSX.Element;
    jobs_count?: number;
    address?: string;
    website?: string;
}

const TopCompanies = async ({ viewAll }:{viewAll:boolean}) => {

    let companies: Company[] = await getCompanies();
    
    if (companies.length < 2) {
        companies = [...companies, ...companies];
        companies.push(
            {
                name: 'F1soft International Pvt Ltd',
                location: 'Kathmandu, Nepal',
                position: 3,
                icon: (
                    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="57" height="57" rx="4.5" fill="white"/>
    <rect x="0.5" y="0.5" width="57" height="57" rx="4.5" stroke="#DBDBDB"/>
    <g clipPath="url(#clip0_0_779)">
    <path d="M22.3189 31.5035L21.4835 34.6222L18.4301 34.6868C17.5176 32.9943 17 31.0578 17 29C17 27.0101 17.4839 25.1336 18.3417 23.4813H18.3424L21.0608 23.9797L22.2516 26.6818C22.0024 27.4084 21.8665 28.1884 21.8665 29C21.8666 29.8809 22.0262 30.7249 22.3189 31.5035Z" fill="#FBBB00"/>
    <path d="M40.7903 26.7582C40.9281 27.4841 41 28.2338 41 29C41 29.8591 40.9097 30.6972 40.7376 31.5055C40.1534 34.2563 38.627 36.6582 36.5125 38.358L36.5119 38.3574L33.0879 38.1827L32.6034 35.1576C34.0064 34.3347 35.1029 33.047 35.6805 31.5055H29.2638V26.7582H35.7741H40.7903Z" fill="#518EF8"/>
    <path d="M36.5119 38.3574L36.5125 38.358C34.4561 40.011 31.8437 41 29 41C24.4301 41 20.4569 38.4457 18.4301 34.6868L22.3189 31.5035C23.3323 34.2081 25.9413 36.1334 29 36.1334C30.3147 36.1334 31.5464 35.778 32.6033 35.1576L36.5119 38.3574Z" fill="#28B446"/>
    <path d="M36.6595 19.7626L32.7721 22.9452C31.6782 22.2615 30.3852 21.8666 29 21.8666C25.8721 21.8666 23.2143 23.8802 22.2516 26.6817L18.3424 23.4813H18.3417C20.3389 19.6308 24.3622 17 29 17C31.9116 17 34.5813 18.0372 36.6595 19.7626Z" fill="#F14336"/>
    </g>
    <defs>
    <clipPath id="clip0_0_779">
    <rect width="24" height="24" fill="white" transform="translate(17 17)"/>
    </clipPath>
    </defs>
    </svg>
    
                ),
            }
        )
    }


    return (
        <div className="min-h- [596px] flex   gap-[50px] p-4 flex-col bg-mprimary top-[1877px] sm:px-[96px] py-[65px]">
            {
                !viewAll && (
                    <div className="flex justify-between h-[48px] flex-col sm:flex-row gap-10">
                                    <h2 className="text-4xl font-semibold text-black">Top Companies</h2>
                                 <Link href="/companies">
                                    <button className="text-figma_red border border-figma_red px-6 py-3 rounded-lg hover:bg-figma_red hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"> View All <span className="ml-2">&rarr;</span></button>
                                </Link>
                                    </div>
                            )
               }
            <div className="grid grid-cols-1  grid-flow-row md:grid-cols-2 xl:grid-cols-3  gap-6">

          {companies.map((category, index) => (
                    <Link href={`/companies/${category.name.replace(/\./g,'').split(/[\/ ]+/).map((value: string) => value.toLocaleLowerCase().trim()).join('-')}`} className="transition-all duration-300 hover:scale-[1.05] ">

                  <CompanyCard company={category} />
                </Link>
          ))}
        </div>


        </div>
    )
}


export default TopCompanies;
    



async function getCompanies() {


    try {
        const res = await axios.get('/top-companies');

        if (res.data.data.topCompanies && res.data.data.topCompanies.length > 0) {
            return res.data.data.topCompanies;
        } else {

           console.log("No data found");
        }

    }
    catch (error) {
        console.log("Error occured", error);
    }




    const companies:Company[] = [
        {
            name: 'F1soft International Pvt Ltd',
            location: 'Kathmandu, Nepal',
            position: 3,
            icon: (
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" fill="white"/>
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" stroke="#DBDBDB"/>
<g clipPath="url(#clip0_0_779)">
<path d="M22.3189 31.5035L21.4835 34.6222L18.4301 34.6868C17.5176 32.9943 17 31.0578 17 29C17 27.0101 17.4839 25.1336 18.3417 23.4813H18.3424L21.0608 23.9797L22.2516 26.6818C22.0024 27.4084 21.8665 28.1884 21.8665 29C21.8666 29.8809 22.0262 30.7249 22.3189 31.5035Z" fill="#FBBB00"/>
<path d="M40.7903 26.7582C40.9281 27.4841 41 28.2338 41 29C41 29.8591 40.9097 30.6972 40.7376 31.5055C40.1534 34.2563 38.627 36.6582 36.5125 38.358L36.5119 38.3574L33.0879 38.1827L32.6034 35.1576C34.0064 34.3347 35.1029 33.047 35.6805 31.5055H29.2638V26.7582H35.7741H40.7903Z" fill="#518EF8"/>
<path d="M36.5119 38.3574L36.5125 38.358C34.4561 40.011 31.8437 41 29 41C24.4301 41 20.4569 38.4457 18.4301 34.6868L22.3189 31.5035C23.3323 34.2081 25.9413 36.1334 29 36.1334C30.3147 36.1334 31.5464 35.778 32.6033 35.1576L36.5119 38.3574Z" fill="#28B446"/>
<path d="M36.6595 19.7626L32.7721 22.9452C31.6782 22.2615 30.3852 21.8666 29 21.8666C25.8721 21.8666 23.2143 23.8802 22.2516 26.6817L18.3424 23.4813H18.3417C20.3389 19.6308 24.3622 17 29 17C31.9116 17 34.5813 18.0372 36.6595 19.7626Z" fill="#F14336"/>
</g>
<defs>
<clipPath id="clip0_0_779">
<rect width="24" height="24" fill="white" transform="translate(17 17)"/>
</clipPath>
</defs>
</svg>

            ),
        },
        {
            name: 'F1soft International Pvt Ltd',
            location: 'Kathmandu, Nepal',
            position: 3,
            icon: (
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" fill="white"/>
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" stroke="#DBDBDB"/>
<g clipPath="url(#clip0_0_779)">
<path d="M22.3189 31.5035L21.4835 34.6222L18.4301 34.6868C17.5176 32.9943 17 31.0578 17 29C17 27.0101 17.4839 25.1336 18.3417 23.4813H18.3424L21.0608 23.9797L22.2516 26.6818C22.0024 27.4084 21.8665 28.1884 21.8665 29C21.8666 29.8809 22.0262 30.7249 22.3189 31.5035Z" fill="#FBBB00"/>
<path d="M40.7903 26.7582C40.9281 27.4841 41 28.2338 41 29C41 29.8591 40.9097 30.6972 40.7376 31.5055C40.1534 34.2563 38.627 36.6582 36.5125 38.358L36.5119 38.3574L33.0879 38.1827L32.6034 35.1576C34.0064 34.3347 35.1029 33.047 35.6805 31.5055H29.2638V26.7582H35.7741H40.7903Z" fill="#518EF8"/>
<path d="M36.5119 38.3574L36.5125 38.358C34.4561 40.011 31.8437 41 29 41C24.4301 41 20.4569 38.4457 18.4301 34.6868L22.3189 31.5035C23.3323 34.2081 25.9413 36.1334 29 36.1334C30.3147 36.1334 31.5464 35.778 32.6033 35.1576L36.5119 38.3574Z" fill="#28B446"/>
<path d="M36.6595 19.7626L32.7721 22.9452C31.6782 22.2615 30.3852 21.8666 29 21.8666C25.8721 21.8666 23.2143 23.8802 22.2516 26.6817L18.3424 23.4813H18.3417C20.3389 19.6308 24.3622 17 29 17C31.9116 17 34.5813 18.0372 36.6595 19.7626Z" fill="#F14336"/>
</g>
<defs>
<clipPath id="clip0_0_779">
<rect width="24" height="24" fill="white" transform="translate(17 17)"/>
</clipPath>
</defs>
</svg>

            ),
        },
        {
            name: 'F1soft International Pvt Ltd',
            location: 'Kathmandu, Nepal',
            position: 3,
            icon: (
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" fill="white"/>
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" stroke="#DBDBDB"/>
<g clipPath="url(#clip0_0_779)">
<path d="M22.3189 31.5035L21.4835 34.6222L18.4301 34.6868C17.5176 32.9943 17 31.0578 17 29C17 27.0101 17.4839 25.1336 18.3417 23.4813H18.3424L21.0608 23.9797L22.2516 26.6818C22.0024 27.4084 21.8665 28.1884 21.8665 29C21.8666 29.8809 22.0262 30.7249 22.3189 31.5035Z" fill="#FBBB00"/>
<path d="M40.7903 26.7582C40.9281 27.4841 41 28.2338 41 29C41 29.8591 40.9097 30.6972 40.7376 31.5055C40.1534 34.2563 38.627 36.6582 36.5125 38.358L36.5119 38.3574L33.0879 38.1827L32.6034 35.1576C34.0064 34.3347 35.1029 33.047 35.6805 31.5055H29.2638V26.7582H35.7741H40.7903Z" fill="#518EF8"/>
<path d="M36.5119 38.3574L36.5125 38.358C34.4561 40.011 31.8437 41 29 41C24.4301 41 20.4569 38.4457 18.4301 34.6868L22.3189 31.5035C23.3323 34.2081 25.9413 36.1334 29 36.1334C30.3147 36.1334 31.5464 35.778 32.6033 35.1576L36.5119 38.3574Z" fill="#28B446"/>
<path d="M36.6595 19.7626L32.7721 22.9452C31.6782 22.2615 30.3852 21.8666 29 21.8666C25.8721 21.8666 23.2143 23.8802 22.2516 26.6817L18.3424 23.4813H18.3417C20.3389 19.6308 24.3622 17 29 17C31.9116 17 34.5813 18.0372 36.6595 19.7626Z" fill="#F14336"/>
</g>
<defs>
<clipPath id="clip0_0_779">
<rect width="24" height="24" fill="white" transform="translate(17 17)"/>
</clipPath>
</defs>
</svg>

            ),
        },
        {
            name: 'F1soft International Pvt Ltd',
            location: 'Kathmandu, Nepal',
            position: 3,
            icon: (
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" fill="white"/>
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" stroke="#DBDBDB"/>
<g clipPath="url(#clip0_0_779)">
<path d="M22.3189 31.5035L21.4835 34.6222L18.4301 34.6868C17.5176 32.9943 17 31.0578 17 29C17 27.0101 17.4839 25.1336 18.3417 23.4813H18.3424L21.0608 23.9797L22.2516 26.6818C22.0024 27.4084 21.8665 28.1884 21.8665 29C21.8666 29.8809 22.0262 30.7249 22.3189 31.5035Z" fill="#FBBB00"/>
<path d="M40.7903 26.7582C40.9281 27.4841 41 28.2338 41 29C41 29.8591 40.9097 30.6972 40.7376 31.5055C40.1534 34.2563 38.627 36.6582 36.5125 38.358L36.5119 38.3574L33.0879 38.1827L32.6034 35.1576C34.0064 34.3347 35.1029 33.047 35.6805 31.5055H29.2638V26.7582H35.7741H40.7903Z" fill="#518EF8"/>
<path d="M36.5119 38.3574L36.5125 38.358C34.4561 40.011 31.8437 41 29 41C24.4301 41 20.4569 38.4457 18.4301 34.6868L22.3189 31.5035C23.3323 34.2081 25.9413 36.1334 29 36.1334C30.3147 36.1334 31.5464 35.778 32.6033 35.1576L36.5119 38.3574Z" fill="#28B446"/>
<path d="M36.6595 19.7626L32.7721 22.9452C31.6782 22.2615 30.3852 21.8666 29 21.8666C25.8721 21.8666 23.2143 23.8802 22.2516 26.6817L18.3424 23.4813H18.3417C20.3389 19.6308 24.3622 17 29 17C31.9116 17 34.5813 18.0372 36.6595 19.7626Z" fill="#F14336"/>
</g>
<defs>
<clipPath id="clip0_0_779">
<rect width="24" height="24" fill="white" transform="translate(17 17)"/>
</clipPath>
</defs>
</svg>

            ),
        },
        {
            name: 'F1soft International Pvt Ltd',
            location: 'Kathmandu, Nepal',
            position: 3,
            icon: (
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" fill="white"/>
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" stroke="#DBDBDB"/>
<g clipPath="url(#clip0_0_779)">
<path d="M22.3189 31.5035L21.4835 34.6222L18.4301 34.6868C17.5176 32.9943 17 31.0578 17 29C17 27.0101 17.4839 25.1336 18.3417 23.4813H18.3424L21.0608 23.9797L22.2516 26.6818C22.0024 27.4084 21.8665 28.1884 21.8665 29C21.8666 29.8809 22.0262 30.7249 22.3189 31.5035Z" fill="#FBBB00"/>
<path d="M40.7903 26.7582C40.9281 27.4841 41 28.2338 41 29C41 29.8591 40.9097 30.6972 40.7376 31.5055C40.1534 34.2563 38.627 36.6582 36.5125 38.358L36.5119 38.3574L33.0879 38.1827L32.6034 35.1576C34.0064 34.3347 35.1029 33.047 35.6805 31.5055H29.2638V26.7582H35.7741H40.7903Z" fill="#518EF8"/>
<path d="M36.5119 38.3574L36.5125 38.358C34.4561 40.011 31.8437 41 29 41C24.4301 41 20.4569 38.4457 18.4301 34.6868L22.3189 31.5035C23.3323 34.2081 25.9413 36.1334 29 36.1334C30.3147 36.1334 31.5464 35.778 32.6033 35.1576L36.5119 38.3574Z" fill="#28B446"/>
<path d="M36.6595 19.7626L32.7721 22.9452C31.6782 22.2615 30.3852 21.8666 29 21.8666C25.8721 21.8666 23.2143 23.8802 22.2516 26.6817L18.3424 23.4813H18.3417C20.3389 19.6308 24.3622 17 29 17C31.9116 17 34.5813 18.0372 36.6595 19.7626Z" fill="#F14336"/>
</g>
<defs>
<clipPath id="clip0_0_779">
<rect width="24" height="24" fill="white" transform="translate(17 17)"/>
</clipPath>
</defs>
</svg>

            ),
        },
        {
            name: 'F1soft International Pvt Ltd',
            location: 'Kathmandu, Nepal',
            position: 3,
            icon: (
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" fill="white"/>
<rect x="0.5" y="0.5" width="57" height="57" rx="4.5" stroke="#DBDBDB"/>
<g clipPath="url(#clip0_0_779)">
<path d="M22.3189 31.5035L21.4835 34.6222L18.4301 34.6868C17.5176 32.9943 17 31.0578 17 29C17 27.0101 17.4839 25.1336 18.3417 23.4813H18.3424L21.0608 23.9797L22.2516 26.6818C22.0024 27.4084 21.8665 28.1884 21.8665 29C21.8666 29.8809 22.0262 30.7249 22.3189 31.5035Z" fill="#FBBB00"/>
<path d="M40.7903 26.7582C40.9281 27.4841 41 28.2338 41 29C41 29.8591 40.9097 30.6972 40.7376 31.5055C40.1534 34.2563 38.627 36.6582 36.5125 38.358L36.5119 38.3574L33.0879 38.1827L32.6034 35.1576C34.0064 34.3347 35.1029 33.047 35.6805 31.5055H29.2638V26.7582H35.7741H40.7903Z" fill="#518EF8"/>
<path d="M36.5119 38.3574L36.5125 38.358C34.4561 40.011 31.8437 41 29 41C24.4301 41 20.4569 38.4457 18.4301 34.6868L22.3189 31.5035C23.3323 34.2081 25.9413 36.1334 29 36.1334C30.3147 36.1334 31.5464 35.778 32.6033 35.1576L36.5119 38.3574Z" fill="#28B446"/>
<path d="M36.6595 19.7626L32.7721 22.9452C31.6782 22.2615 30.3852 21.8666 29 21.8666C25.8721 21.8666 23.2143 23.8802 22.2516 26.6817L18.3424 23.4813H18.3417C20.3389 19.6308 24.3622 17 29 17C31.9116 17 34.5813 18.0372 36.6595 19.7626Z" fill="#F14336"/>
</g>
<defs>
<clipPath id="clip0_0_779">
<rect width="24" height="24" fill="white" transform="translate(17 17)"/>
</clipPath>
</defs>
</svg>

            ),
        },
    ]

    return companies;
}