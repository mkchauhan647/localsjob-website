
import TestimonialCard from './TestimonialCard';
import axios from '@/config/AxiosConfig'
// interface Testimonial {
//     star: number;
//     title: string;
//     description: string;
//     avatar: string;
//     name: string;
//     avatar_text: string;
// }
import { Testimonial } from '@/util/types';

const Testimonials = async () => {

    const testimonials:Testimonial[] = await getTestimonials();

    return (
        
        <div className="relative min-h-[788px] bg-mprimary p-4 sm:px-[96px]">
            {/* Testimonials */}

            <div className="pr-4">
                <div className="flex flex-col items-center justify-center text-center py-20">
                    <h2 className="text-black text-[50px] leading-[60px] font-semibold text-left line-clamp-1">Testimonials from Our Customers</h2>
                    <p className="text-black mt-4 text-center line-clamp-1 mx-auto md:w-[703px]">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus. Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit. Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.</p>
                </div>
            </div>


            {/* <div className="flex gap-6 justify-center flex-col lg:flex-row mb-3 items-center"> */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-5'>

                {
                    testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))
                }
                
            </div>

        </div>
    )
}

export default Testimonials;



async function getTestimonials() {



    try {
        const res = await axios.get('/testimonials');
        return res.data.data.testimonials;
    } catch (error) {
        console.log("error",error);
    }



    // const testimonials:Testimonial[] = [
    //     {
    //         star: 5,
    //         title: "Amazing Services",
    //         description: "Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis",
    //         avatar: 'tavatar1.png',
    //         name: 'Marko Kihn',
    //         avatar_text:'Happy Client'
    // },
    //     {
    //         star: 5,
    //         title: "Everything Simple",
    //         description: "Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus",
    //         avatar: 'tavatar2.png',
    //         name: 'Kristin Hester',
    //         avatar_text:'Happy Client'
    // },
    //     {
    //         star: 5,
    //         title: "Awesome, thank you! ",
    //         description: "Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes",
    //         avatar: 'tavatar3.png',
    //         name: 'Zis Cisneros',
    //         avatar_text:'Happy Client'
    // },
    // ]

    // return testimonials;
}