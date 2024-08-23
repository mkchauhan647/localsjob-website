
import parse from 'html-react-parser'
interface JobDescriptionProps {

    description: string;
    content: string;
    // requirements: string[];
    // desirable: string[];
    // benefits: string[];

}




const JobDescription = ({ desc }: { desc: JobDescriptionProps }) => {
    // console.log("desc", desc);
    return (
        <div className="xl:w-[761px]">
            {/* description */}
            <div className="mb-4 flex flex-col gap-4 text-left text-gray-500">
                <h2 className="text-[18px] font-medium ">Job Description</h2>
                {/* <p className="text-gray-500">
                    Velstar is a Shopify Plus agency, and we partner with brands
                    to help them grow, we also do the same with our people!
                </p>
                <p>
                    Here at Velstar, we don't just make websites, we create
                    exceptional digital experiences that consumers love. Our team
                    of designers, developers, strategists, and creators work
                    together to push brands to the next level. From Platform
                    Migration, User Experience & User Interface Design, to Digital
                    Marketing, we have a proven track record in delivering
                    outstanding eCommerce solutions and driving sales for our
                    clients.
                </p>
                <p>
                    The role will involve translating project specifications into
                    clean, test-driven, easily maintainable code. You will work
                    with the Project and Development teams as well as with the
                    Technical Director, adhering closely to project plans and
                    delivering work that meets functional & non-functional
                    requirements. You will have the opportunity to create new,
                    innovative, secure and scalable features for our clients on
                    the Shopify platform
                </p> */}
                <p>{desc.description}</p>
                
                <p>Want to work with us? You're in good company!</p>
            </div>

            {/* Requirements */}
            {/* <div className="mb-4 mt-2 flex flex-col gap-4 text-left text-gray-500">
                <h2 className="text-[18px] font-medium ">Requirements</h2>
                <ul className="flex gap-2 flex-col list-disc list-outside pl-6">
                    <li>
                        Great troubleshooting and analytical skills combined with
                        the desire to tackle challenges head-on
                    </li>
                    <li>
                        3+ years of experience in back-end development working
                        either with multiple smaller projects simultaneously or
                        large-scale applications
                    </li>
                    <li>
                        Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
                        Laravel
                    </li>
                    <li>
                        Working regularly with APIs and Web Services (REST,
                        GrapthQL, SOAP, etc)
                    </li>
                    <li>
                        Have experience/awareness in Agile application development,
                        commercial off-the-shelf software, middleware, servers and
                        storage, and database management.
                    </li>
                    <li>
                        Familiarity with version control and project management
                        systems (e.g., Github, Jira)
                    </li>
                    <li>
                        Great troubleshooting and analytical skills combined with
                        the desire to tackle challenges head-on
                    </li>
                    <li>
                        Ambitious and hungry to grow your career in a fast-growing
                        agency
                    </li>
                </ul>
            </div> */}

            {/* Desirable */}
            {/* <div className="mb-4 mt-2 flex flex-col gap-4 text-left text-gray-500">
                <h2 className="text-[18px] font-medium ">Desirable</h2>
                <ul className="flex gap-2 flex-col list-disc list-outside pl-6">
                    <li>
                        Working knowledge of eCommerce platforms, ideally Shopify
                        but also others e.g. Magento, WooCommerce, Visualsoft to
                        enable seamless migrations.
                    </li>
                    <li>Working knowledge of payment gateways</li>
                    <li>API platform experience / Building restful APIs</li>
                </ul>
            </div> */}

            {/* Benefits */}
            {/* <div className="mb-4 mt-2 flex flex-col gap-4 text-left text-gray-500">
                <h2 className="text-[18px] font-medium ">Benefits</h2>
                <ul className="flex gap-2 flex-col list-disc list-outside pl-6">
                    <li>
                        Early finish on Fridays for our end of week catch up (4:30
                        finish, and drink of your choice from the bar)
                    </li>
                    <li>
                        28 days holiday (including bank holidays) rising by 1 day
                        per year PLUS an additional day off on your birthday
                    </li>
                    <li>Generous annual bonus.</li>
                    <li>Healthcare package</li>
                    <li>
                        Paid community days to volunteer for a charity of your
                        choice
                    </li>
                    <li>
                        £100 contribution for your own personal learning and
                        development
                    </li>
                    <li>
                        Free Breakfast on Mondays and free snacks in the office
                    </li>
                    <li>
                        Access to Perkbox with numerous discounts plus free points
                        from the company to spend as you wish.
                    </li>
                    <li>Cycle 2 Work Scheme</li>
                    <li>Brand new MacBook Pro</li>
                    <li>
                        Joining an agency on the cusp of exponential growth and
                        being part of this exciting story.
                    </li>
                </ul>
            </div> */}


            <div className="text-left text-gray-500">
                {parse(desc.content || '')}
        </div>
        </div>
    )
};

export default JobDescription;