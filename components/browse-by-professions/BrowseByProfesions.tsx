import { M_PLUS_1 } from "next/font/google";
import React from "react";

interface Card {
    icon: React.ReactElement;
    title: string;
    badge: string;
}


const BrowseByProfessions = () => {

    let cards: Card[] = getCards();

    return (
        <div className="min-h-[1824px] pt-[10px] md:pt-[50px] bg-mprimary w-full ">
            <div className="mt-[10px] md:mt-[71px] flex flex-col xl:items-center justify-center gap-[60px] px-4 md:px-[100px] ">

                 {/* <p> lorem ipusm dlkfjkdfdlfkjdl </p> */}
            <div className="text-center flex flex-col gap-[20px] justify-center items-center">
                <h1 className="font-bold text-[50px]">Browse by Professions</h1>
                <p className=" line-clamp-1 text-center w-auto md:w-[703px] px-2">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus. Lectus dolor blandit massa pretium id ultrices phasellus tortor. Risus risus lectus augue justo lacus viverra sit. Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id tincidunt nunc.</p>
            </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 lg:grid-rows-2 gap-6 mb-4">
            
                    {/* Card Section */}
                    {
                        Array(1, 2).map((_, i) => {
                            if (i == 1) {
                                let letCards = cards.slice(8);
                                cards = cards.slice(0, 4);
                                letCards.map((value, i) => {

                                    cards.push(value);
                                    
                                })
                                }
                            return cards.map((card, index) => (
                                <div key={index} className="bg-white text-black gap-6 p-6 h-[280px] w-auto xl:w-[306px] rounded-[20px] flex items-center justify-start">
                                    <div className="flex flex-col items-center justify-center w-full mx-auto gap-[40px]">
                                        {card.icon}
                                        <span className="text-[18px] font-medium">{card.title}</span>
                                        <span className="mt-1 font-normal text-figma_red bg-mprimary py-2 px-3 rounded-lg">{card.badge}</span>
                                    </div>
                                </div>
                            ))
                        })

                        
                    }


            </div>
                
           </div>
        </div>
       
    )

}


export default BrowseByProfessions;


function getCards() {
    const cards: Card[] = [
        {
            icon: (<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_101_167)">
                <mask id="mask0_101_167" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                <path d="M0 0.500004H40V40.5H0V0.500004Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_101_167)">
                <path d="M31.7187 32.2969C30.5573 32.2969 29.4781 32.6053 28.5128 33.104C27.0348 29.8686 23.7895 27.6094 20 27.6094C16.2106 27.6094 12.9652 29.8686 11.4872 33.104C10.5219 32.6053 9.44266 32.2969 8.28125 32.2969C4.39797 32.2969 1.17188 35.4448 1.17188 39.3281H38.8281C38.8281 35.4448 35.602 32.2969 31.7187 32.2969Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M1.34375 4.35889C1.34375 4.35889 2.08539 3.21522 4.06602 2.37467C5.99695 1.5774 9.49984 0.976153 13.8802 3.38467C17.4301 5.45154 20.4044 9.25076 17.2782 12.8704C10.7475 12.9925 6.95828 11.122 3.235 6.98795C1.93781 5.5649 1.34375 4.35889 1.34375 4.35889Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M38.6303 4.35877C38.6303 4.35877 37.8368 3.21509 35.8561 2.37455C33.9252 1.57728 30.5004 0.976031 26.12 3.38455C22.5702 5.45142 19.5959 9.25064 22.7221 12.8702C29.2528 12.9924 32.9639 11.1219 36.6872 6.98783C37.9843 5.56478 38.6303 4.35877 38.6303 4.35877Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M30.8508 6.27051C27.5685 7.60106 24.5963 9.83918 22.7184 12.8695C20.798 15.8771 20.0559 19.4773 19.9977 23.0166C19.9395 19.4773 19.1973 15.8771 17.277 12.8695C15.399 9.83918 12.4267 7.60106 9.14453 6.27051" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M20 22.7656V27.6094" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_101_167">
                <rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs>
                </svg>
                ),
            title: "Farmer",
            badge:"1254 jobs"
        },
        {
            icon: (
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_101_303)">
<path d="M14.1186 28.7352C15.4181 28.7352 16.4715 27.6817 16.4715 26.3822C16.4715 25.0827 15.4181 24.0293 14.1186 24.0293C12.8191 24.0293 11.7656 25.0827 11.7656 26.3822C11.7656 27.6817 12.8191 28.7352 14.1186 28.7352Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M14.1174 33.4418C18.0159 33.4418 21.1762 30.2815 21.1762 26.383C21.1762 22.4846 18.0159 19.3242 14.1174 19.3242C10.2189 19.3242 7.05859 22.4846 7.05859 26.383C7.05859 30.2815 10.2189 33.4418 14.1174 33.4418Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M1.17578 26.383C1.17578 19.2358 6.96973 13.4418 14.1169 13.4418C18.66 13.4418 22.6562 15.7829 24.9652 19.3242C25.6669 20.4005 26.2128 21.5876 26.5709 22.8536L38.3345 11.0898" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
<path d="M35.0325 5.46722C29.9786 0.41327 21.7847 0.41327 16.7309 5.46722L4.96619 17.2319C-0.0876868 22.2857 -0.0876868 30.4796 4.96619 35.5334C10.0201 40.5873 18.2139 40.5873 23.2678 35.5334L35.0325 23.7687C40.0864 18.715 40.0864 10.521 35.0325 5.46722Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
</g>
<defs>
<clipPath id="clip0_101_303">
<rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>

            ),
            title: "Metal Production",
            badge:"816 jobs"

        },
        {
            icon: (<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_112_448)">
                <mask id="mask0_112_448" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                <path d="M40 0.5H0V40.5H40V0.5Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_112_448)">
                <mask id="mask1_112_448" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                <path d="M0 0.500004H40V40.5H0V0.500004Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_112_448)">
                <path d="M35.8681 39.0156H4.13281L7.12547 10.517H32.8755L35.8681 39.0156Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round"/>
                <path d="M13.9219 14.2715V8.06289C13.9219 4.70594 16.6432 1.98461 20.0002 1.98461C23.3571 1.98461 26.0784 4.70594 26.0784 8.06289V14.2715" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_112_448">
                <rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs>
                </svg>
                
                ),
            title: "Commerce",
            badge:"2082 jobs"
        },
        {
            icon: (<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_112_312" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                <path d="M0 0.500004H40V40.5H0V0.500004Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_112_312)">
                <path d="M22.9258 10.672C29.9173 11.823 35.2413 17.8933 35.2413 25.2108V28.1299" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M4.75781 28.1299V25.2108C4.75781 17.9589 9.98961 11.9305 16.8886 10.7026" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M22.9279 21.3662H16.8906V8.17535H22.9279V21.3662Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M38.8288 32.8242H1.17188V32.1709C1.17188 29.9237 2.99352 28.1021 5.24063 28.1021H34.76C37.0072 28.1021 38.8288 29.9237 38.8288 32.1709V32.8242Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M27.2227 19.0225V12.0919" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M12.5938 19.0225V12.1884" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                </g>
                </svg>
                
                ),
            title: "Thekedar",
            badge:"1520 jobs"
        },
        {
            icon: (<svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.49976 6.97057C1.49976 5.56649 2.05753 4.2199 3.05037 3.22706C4.04321 2.23422 5.38979 1.67645 6.79388 1.67645H33.2645C34.6686 1.67645 36.0152 2.23422 37.008 3.22706C38.0008 4.2199 38.5586 5.56649 38.5586 6.97057V12.2647C38.5586 13.6688 38.0008 15.0154 37.008 16.0082C36.0152 17.001 34.6686 17.5588 33.2645 17.5588H6.79388C5.38979 17.5588 4.04321 17.001 3.05037 16.0082C2.05753 15.0154 1.49976 13.6688 1.49976 12.2647V6.97057Z" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M38.5594 9.61768H41.2064C42.6105 9.61768 43.9571 10.1754 44.9499 11.1683C45.9428 12.1611 46.5006 13.5077 46.5006 14.9118C46.5006 18.422 45.1061 21.7885 42.624 24.2706C40.1419 26.7527 36.7755 28.1471 33.2653 28.1471H20.03V33.4412M14.7358 36.0883C14.7358 35.3862 15.0147 34.713 15.5111 34.2165C16.0076 33.7201 16.6809 33.4412 17.3829 33.4412H22.677C23.3791 33.4412 24.0524 33.7201 24.5488 34.2165C25.0452 34.713 25.3241 35.3862 25.3241 36.0883V46.6765C25.3241 47.3786 25.0452 48.0519 24.5488 48.5483C24.0524 49.0447 23.3791 49.3236 22.677 49.3236H17.3829C16.6809 49.3236 16.0076 49.0447 15.5111 48.5483C15.0147 48.0519 14.7358 47.3786 14.7358 46.6765V36.0883Z" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                ),
            title: "Painter",
            badge:"1254 jobs"
        },
        {
            icon: (<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.4652 0.603005C23.49 0.60302 24.4868 0.937237 25.3045 1.55497C26.1222 2.1727 26.7162 3.04024 26.9963 4.02602L27.0815 4.38717L30.3363 20.6611C30.4904 21.4326 30.8447 22.15 31.3636 22.7414C31.8825 23.3327 32.5478 23.7772 33.2928 24.0303L33.6472 24.1334L37.4515 25.0845C38.2378 25.2811 38.9267 25.7549 39.3915 26.4188C39.8564 27.0827 40.066 27.8921 39.9818 28.6982L39.9347 29.01L38.378 36.7914C38.2621 37.3709 38.0328 37.9219 37.7033 38.4125C37.3739 38.9032 36.9507 39.3239 36.4582 39.6505C35.9657 39.9771 35.4134 40.2032 34.8333 40.3158C34.2531 40.4283 33.6564 40.4251 33.0774 40.3064L32.7499 40.2257L25.8927 38.2652C23.5387 37.5933 21.4692 36.1698 20 34.2118C18.6499 36.0115 16.7898 37.3636 14.6613 38.0924L14.1095 38.2652L7.25228 40.2257C6.6839 40.3879 6.08907 40.4363 5.50195 40.3679C4.91483 40.2996 4.34701 40.1159 3.83111 39.8274C3.31521 39.5389 2.8614 39.1513 2.49576 38.6869C2.13013 38.2225 1.85988 37.6904 1.70053 37.1212L1.62202 36.7914L0.065289 29.0078C-0.093579 28.2131 0.0397257 27.3877 0.4407 26.6834C0.841675 25.9791 1.48338 25.4433 2.24785 25.1742L2.54843 25.0845L6.35278 24.1334C7.11585 23.9426 7.81533 23.5545 8.38109 23.008C8.94684 22.4616 9.35897 21.776 9.57616 21.02L9.66364 20.6611L12.9162 4.38717C13.0652 3.64311 13.3919 2.94609 13.8682 2.3554C14.3446 1.76472 14.9566 1.29786 15.6522 0.994558C16.3478 0.691257 17.1063 0.560491 17.8633 0.613389C18.6203 0.666286 19.3533 0.901281 20 1.29838C20.7178 0.858722 21.5612 0.603005 22.4652 0.603005ZM33.0236 28.6018L31.5543 35.219L33.9792 35.9121L35.3251 29.1782L33.0236 28.6018ZM6.97637 28.6018L4.67492 29.1782L6.0208 35.9121L8.44562 35.2167L6.97637 28.6018ZM22.4652 5.08927C22.4065 5.08985 22.3503 5.11343 22.3088 5.15495C22.2673 5.19647 22.2437 5.25262 22.2431 5.31134V27.4824C22.2429 28.8754 22.6749 30.2342 23.4797 31.3712C24.2845 32.5083 25.4223 33.3675 26.7361 33.8305L27.2318 33.983L28.8783 26.5784C27.3647 25.2741 26.3297 23.5018 25.9375 21.5426L22.685 5.26872C22.6747 5.21805 22.6471 5.17251 22.6071 5.13981C22.567 5.10711 22.5169 5.08925 22.4652 5.08927ZM17.5348 5.08927C17.4835 5.08977 17.4339 5.10786 17.3943 5.14052C17.3547 5.17317 17.3275 5.21842 17.3172 5.26872L14.0624 21.5426C13.6708 23.5015 12.6367 25.2738 11.1239 26.5784L12.7681 33.983L12.8758 33.9516C14.2818 33.55 15.5187 32.7014 16.3993 31.5342C17.28 30.3669 17.7566 28.9446 17.7569 27.4824V5.31134C17.7563 5.25223 17.7324 5.19575 17.6904 5.15417C17.6484 5.11259 17.5916 5.08926 17.5325 5.08927H17.5348Z" fill="#BE123C"/>
                </svg>
                
                ),
            title: "Pandit",
            badge:"816 jobs"
        },
        {
            icon: (<svg width="34" height="43" viewBox="0 0 34 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9817 1.50233H26.6488C26.8376 1.50168 27.0236 1.54813 27.19 1.63748C27.3563 1.72684 27.4977 1.85628 27.6014 2.01407C27.7051 2.17187 27.7678 2.35304 27.7838 2.54118C27.7998 2.72932 27.7687 2.91848 27.6932 3.09153L21.5634 17.3987H31.8964C31.9829 17.3995 32.0674 17.4251 32.1399 17.4724C32.2123 17.5197 32.2698 17.5867 32.3055 17.6655C32.3411 17.7444 32.3535 17.8317 32.3412 17.9174C32.3289 18.003 32.2923 18.0834 32.2359 18.1489L11.1633 41.308C11.1058 41.394 11.0194 41.4565 10.9197 41.4842C10.8201 41.5119 10.7138 41.503 10.6202 41.459C10.5265 41.4151 10.4518 41.3391 10.4094 41.2447C10.367 41.1503 10.3599 41.0439 10.3893 40.9448L12.4801 24.2095H2.8065C2.61863 24.2121 2.43305 24.168 2.26636 24.0813C2.09967 23.9946 1.95705 23.868 1.85125 23.7127C1.74545 23.5574 1.67977 23.3784 1.66007 23.1915C1.64038 23.0047 1.66728 22.8159 1.73838 22.6419L9.91141 2.20504C9.99806 1.99342 10.1466 1.8129 10.3376 1.68713C10.5285 1.56135 10.7531 1.49835 10.9817 1.50233Z" stroke="#BE123C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                ),
            title: "Electrician",
            badge:"2082 jobs"
        },
        {
            icon: (<svg width="54" height="41" viewBox="0 0 54 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.3266 1.15621C46.7639 0.792173 46.1204 0.571938 45.4526 0.514864C44.7848 0.45779 44.1133 0.565626 43.497 0.828893L23.3014 8.78275C22.8232 8.97734 22.3119 9.07739 21.7957 9.07734H8.86658C7.78145 9.07734 6.74076 9.50841 5.97346 10.2757C5.20615 11.043 4.77509 12.0837 4.77509 13.1688V13.4962H0.683594V23.3157H4.77509V23.7412C4.80073 24.8093 5.24308 25.8249 6.00763 26.5711C6.77217 27.3173 7.79825 27.7349 8.86658 27.7345L13.7764 38.1433C14.1088 38.8442 14.6322 39.4372 15.2865 39.854C15.9408 40.2709 16.6993 40.4948 17.4751 40.5H19.5372C20.6166 40.4914 21.6489 40.0565 22.4092 39.2901C23.1694 38.5237 23.596 37.488 23.5959 36.4085V28.1273L43.497 36.0812C43.9865 36.276 44.5085 36.3759 45.0354 36.3758C45.8527 36.3626 46.6487 36.1124 47.3266 35.6557C47.865 35.2922 48.309 34.8057 48.6221 34.2365C48.9351 33.6673 49.1082 33.0318 49.1269 32.3825V4.5276C49.1239 3.86156 48.9583 3.20632 48.6446 2.61878C48.3308 2.03125 47.8784 1.52919 47.3266 1.15621ZM19.5045 13.1688V23.7412H8.86658V13.1688H19.5045ZM19.5045 36.4085H17.4423L13.4163 27.7345H19.5045V36.4085ZM24.807 24.2322C24.4184 24.0336 24.0132 23.8693 23.5959 23.7412V12.9397C24.0092 12.8544 24.4143 12.734 24.807 12.5797L45.0354 4.5276V32.2843L24.807 24.2322ZM49.2251 14.3144V22.4974C50.3102 22.4974 51.3509 22.0664 52.1182 21.2991C52.8855 20.5318 53.3165 19.4911 53.3165 18.4059C53.3165 17.3208 52.8855 16.2801 52.1182 15.5128C51.3509 14.7455 50.3102 14.3144 49.2251 14.3144Z" fill="#BE123C"/>
                </svg>
                
                ),
            title: "Marketing",
            badge:"1520 jobs"
        },
        {
            icon: (<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_112_557)">
                <path d="M19.0927 39.3263H4.47919C2.65689 39.3263 1.17969 37.8491 1.17969 36.0268V15.239C1.17969 13.4167 2.65696 11.9395 4.47919 11.9395H19.0928C20.843 11.9395 22.275 13.3021 22.3855 15.0244" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.6875 11.9399V1.67383H15.8822V11.9399" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M35.3021 39.3261H16.7897C14.8456 39.3261 13.2695 37.75 13.2695 35.8059V23.278C13.2695 21.3338 14.8455 19.7578 16.7897 19.7578H35.3021C37.2462 19.7578 38.8223 21.3338 38.8223 23.278V35.8059C38.8223 37.75 37.2462 39.3261 35.3021 39.3261Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.4023 15.0234H29.6862V19.7581" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.2695 31.874H38.8223" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22.4023 15.0234V19.7581" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_112_557">
                <rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs>
                </svg>
                
                ),
            title: "Hotels & Tourism",
            badge:"1022 jobs"
        },
        {
            icon: (<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_112_466" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="1" y="1" width="38" height="39">
                <path d="M1 1.5H39V39.5H1V1.5Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_112_466)">
                <path d="M20 16.9229L2.11328 10.9606L20 4.99842L37.8867 10.9606L20 16.9229Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.27734 13.3469V24.079C15.2053 30.0062 24.815 30.0062 30.7414 24.079V13.3469L20.0094 16.9243L9.27734 13.3469Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M35.4922 12.076V27.6572" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M37.887 30.0397C37.887 28.7226 36.8197 27.6549 35.5021 27.6549C34.1859 27.6549 33.1172 28.7226 33.1172 30.0397V36.002H37.887V30.0397Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </svg>
                
                
                ),
            title: "Education",
            badge:"1496 jobs"
        },
        {
            icon: (<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_112_762)">
                <mask id="mask0_112_762" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                <path d="M0 0.500004H40V40.5H0V0.500004Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_112_762)">
                <path d="M24.7656 29.9532C24.7656 31.2476 25.815 32.2969 27.1094 32.2969C28.4038 32.2969 29.4531 31.2476 29.4531 29.9532C29.4531 28.6588 28.4038 27.6094 27.1094 27.6094C25.815 27.6094 24.7656 26.5601 24.7656 25.2657C24.7656 23.9713 25.815 22.9219 27.1094 22.9219C28.4038 22.9219 29.4531 23.9556 29.4531 25.25" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M27.1094 19.4063V22.9219" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M27.1094 32.297V35.7969" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M38.8281 27.6094C38.8281 34.0815 33.5815 39.3282 27.1094 39.3282C20.6373 39.3282 15.3906 34.0815 15.3906 27.6094C15.3906 21.1373 20.6373 15.8907 27.1094 15.8907C33.5815 15.8907 38.8281 21.1373 38.8281 27.6094Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M24.7656 7.53128C24.7656 10.7673 19.519 13.3907 13.0469 13.3907C6.57476 13.3907 1.17188 10.7673 1.17188 7.53128C1.17188 4.29526 6.57476 1.67191 13.0469 1.67191C19.519 1.67191 24.7656 4.29526 24.7656 7.53128Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M18.2148 19.9791C16.6559 20.3627 14.9017 20.5782 13.0469 20.5782C6.57476 20.5782 1.17188 17.9549 1.17188 14.7188" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M1.17188 7.53128V28.7813C1.17188 32.0173 6.57477 34.6407 13.0469 34.6407C14.5965 34.6407 16.0759 34.4903 17.4298 34.2171" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M24.7656 7.53129V16.1251" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M15.3912 27.4921C14.6337 27.569 13.8498 27.6094 13.0469 27.6094C6.57476 27.6094 1.17188 24.986 1.17188 21.75" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10"/>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_112_762">
                <rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                </defs>
                </svg>
                
                
                ),
            title: "Financial Services",
            badge:"1529 jobs"
        },
        {
            icon: (<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.7036 33.4023H6.28516V7.89818H33.7036V33.4023Z" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <mask id="mask0_112_607" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="1" y="1" width="38" height="39">
                <path d="M1 1.5H39V39.5H1V1.5Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_112_607)">
                <path d="M33.7036 7.89844V6.63323C33.7036 4.4132 31.907 2.61347 29.6909 2.61347H10.298C8.08177 2.61347 6.28516 4.4132 6.28516 6.63323V7.89844" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M33.7148 8.86523C36.021 8.86523 37.8907 10.6301 37.8907 12.8071V15.1367H33.7148" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.28913 8.86523C3.98293 8.86523 2.11328 10.6301 2.11328 12.8071V15.1367H6.28913" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.0445 33.4023V38.3867H7.16016V33.4023" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M32.8296 33.4023V38.3867H26.9453V33.4023" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.29297 24.5068H33.7001" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.2852 24.4961C20.2852 22.0198 22.2926 20.0123 24.7689 20.0123C27.2452 20.0123 29.2527 22.0198 29.2527 24.4961" stroke="#BE123C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                </svg>
                
                
                ),
            title: "Transport",
            badge:"1244 jobs"
        },
        
       
    ]

    return cards;
}