
import TestimonialCard from './TestimonialCard';

interface Testimonial {
    star: number;
    title: string;
    description: string;
    avatar: string;
    name: string;
    avatar_text: string;
}

const Testimonials = () => {

    const testimonials:Testimonial[] = getTestimonials();

    return (
        
        <div className="relative min-h-[788px] bg-mprimary p-4">
            {/* Testimonials */}

            <div className="pr-4">
                <div className="flex flex-col items-center justify-center text-center py-20">
                    <h2 className="text-black text-[50px] leading-[60px] font-semibold text-left line-clamp-1">Testimonials from Our Customers</h2>
                    <p className="text-black mt-4 text-center line-clamp-1 mx-auto md:w-[703px]">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus. Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit. Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.</p>
                </div>
            </div>


            <div className="flex gap-6 justify-center flex-col lg:flex-row mb-3 items-center">

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



function getTestimonials() {
    const testimonials:Testimonial[] = [
        {
            star: 5,
            title: "Amazing Services",
            description: "Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis",
            avatar: 'tavatar1.png',
            name: 'Marko Kihn',
            avatar_text:'Happy Client'
    },
        {
            star: 5,
            title: "Everything Simple",
            description: "Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus",
            avatar: 'tavatar2.png',
            name: 'Kristin Hester',
            avatar_text:'Happy Client'
    },
        {
            star: 5,
            title: "Awesome, thank you! ",
            description: "Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes",
            avatar: 'tavatar3.png',
            name: 'Zis Cisneros',
            avatar_text:'Happy Client'
    },
    ]

    return testimonials;
}