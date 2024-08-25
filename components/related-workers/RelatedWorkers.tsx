import Image from 'next/image';
import { PiMapPin } from 'react-icons/pi';
import { HiOutlineDotsVertical } from "react-icons/hi";
interface Card {
    image: string,
    name: string,
    profession: string,
    experience: string,
    location: string,
    text:string,
    
}

const RelatedWorkers = () => {

    const cards: Card[] = getCards();


    return (
        <div className="min-h- [1146px] pt-[20px] md:pt-[50px] bg-white w-full px-4 ">
            <div className="mt-[10px] md:mt-[40px] flex flex-col  justify-center gap-[60px] px-4 md:px-[100px] ">

                {/* <p> lorem ipusm dlkfjkdfdlfkjdl </p> */}
                <div className="text-cente w-full flex flex-col gap-[20px] justify-center enter items-start">
                    <h1 className="font-semibold text-[40px]  leading-[48px] whitespace-nowrap">Related Workers</h1>
                    {/* <p className=" line-clamp-1 text-center w-auto md:w-[703px] px-2">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus. Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit. Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.</p> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3   lg:grid-rows-2 gap-[60px] gap-x-[60px] mb-4 xl:w-[1201px]">
        
                    {/* Card Section */}
                    {
                        [...Array(6)].map((_, index) => {
                            return (
                                <div key={index} className="relative bg-white border border-figma_red text-black gap-6  overflow-hidden min-h-[439px] w-auto lg:w-[360px] rounded-[20px] flex items-center justify-start">
                                
                                    <Image src={cards[0].image} alt='no image' width={360} height={227} className=" absolute -top-8 w -auto h-[260px] w-[360px] object-top object-cover"
                                    />

                                    <div className='absolute top-[265px] bg-white z-100 w-full h-[227px]'>
                                    
                                    
                                        <div className='relative -top-10 pl-6 pt-3 h-full flex flex-col gap-1'>
                                            <h1 className='font-medium text-[18px]'>{cards[0].name}</h1>
                                            <div className='flex gap-[10px] items-center'>
                                            <p className='text-figma_red text-[12px] py-1 px-2 rounded bg-mprimary font-semibold leading-5 uppercase'>{cards[0].profession}</p>
                                            <p className='text-figma_red text-[14px] leading-5'>Experience: {cards[0].experience}</p>
                                            </div>
                                            <p className='text-[#767F8C] text-[14px] flex gap-2 items-center'><span> 
                                            <PiMapPin className='text-[#767F8C] text-[20px]' />
</span>{cards[0].location}</p>
                                            <p className='text-[#535353] text-[15px] leading-[24.18px]'>{cards[0].text}</p>


                                            <div className='flex justify-between mt-2'>
                                                
                                                <button className='bg-[#0D161F] text-center text-white w-[143px] h-[40px] rounded-[4px] py- 3 mb-3 px-4 uppercase hover:scale-105 transition-all duration-500'>Request Call</button>
                                                
                                            <HiOutlineDotsVertical className='text-[#535353 text-[32px] cursor-pointer'/>

                                        </div>

                                            </div>


                                        </div>
                            </div>
                            )
                        })
                    }


                </div>
            
            </div>
        </div>
    )
};

export default RelatedWorkers;


function getCards() {
    const cards: Card[] = [
        {
            image: '/worker1.jpeg',
            name: 'Ram Pariyar',
            profession: 'Painter',
            experience: '5 Years',
            location: 'Kathmandu, Nepal',
            text: 'Minim dolor in amet nulla laboris enim dolore consequat proident...',
            
        },
    ]

    return cards;
}