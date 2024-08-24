import React from 'react';
import BoxCard from './BoxCard'; // Adjust the import path according to your file structure

interface Card {
  icon: React.ReactElement;
  number: string;
  description: string;
}

interface BoxCardData {
  totalLiveJobs: string;
  totalCompanies: string;
  totalApplicants: string;
  totalResume: string;
}


const BoxCards = ({ bgColor, highlightColor, strokeColor,boxCardData }:{bgColor:string,highlightColor:string,strokeColor:string,boxCardData:BoxCardData}) => {
  
  const cards: Card[] = getCards(bgColor, highlightColor, strokeColor, boxCardData);
  

  return (
    <div className=" lg:absolute lg:top-[550px] xl:top-[644px] lg:px-[300px] sm:px-[100px]  lg:-left-[204px] xl:w-[1920px] w-full p-4 ">
      <div className="flex lg:justify-between justify-center items-start md:items-center flex-col lg:flex-row gap-4">
        {cards.map((card, index) => (
          <BoxCard
            key={index}
            icon={card.icon}
            number={card.number}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxCards;


function getCards(bgColor: string, highlightColor: string, strokeColor: string,boxCardData:BoxCardData): Card[] {
  



  const cards: Card[] = [
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="72" height="72" rx="4" fill={bgColor} />
          <path d="M36 39.75C30.734 39.758 25.56 38.374 21 35.737V48.5C21 48.664 21.033 48.827 21.096 48.978C21.159 49.13 21.251 49.268 21.367 49.384C21.484 49.5 21.621 49.592 21.773 49.655C21.925 49.718 22.087 49.75 22.251 49.75H49.751C49.915 49.75 50.078 49.718 50.23 49.655C50.381 49.592 50.519 49.5 50.635 49.384C50.751 49.268 50.843 49.13 50.906 48.978C50.969 48.827 51.001 48.664 51.001 48.5V35.736C46.442 38.374 41.267 39.758 36 39.75Z" fill={strokeColor} opacity="0.2" />
          <path d="M49.751 27.25H22.251C21.561 27.25 21.001 27.81 21.001 28.5V48.5C21.001 49.19 21.561 49.75 22.251 49.75H49.751C50.442 49.75 51.001 49.19 51.001 48.5V28.5C51.001 27.81 50.442 27.25 49.751 27.25Z" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42.25 27.25V24.75C42.25 24.087 41.987 23.451 41.518 22.982C41.049 22.513 40.413 22.25 39.75 22.25H32.25C31.587 22.25 30.951 22.513 30.482 22.982C30.013 23.451 29.75 24.087 29.75 24.75V27.25" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M51.001 35.736C46.442 38.374 41.267 39.758 36 39.75C30.734 39.758 25.559 38.374 21.001 35.737" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34.125 34.75H37.875" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      number: boxCardData.totalLiveJobs ?? '0',
      description: 'Live Job',
    },
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="72" height="72" rx="4" fill={bgColor} />
          <path d="M38.499 49.747V22.247C38.499 21.916 38.367 21.598 38.133 21.363C37.898 21.129 37.581 20.997 37.249 20.997H22.249C21.917 20.997 21.599 21.129 21.365 21.363C21.131 21.598 20.999 21.916 20.999 22.247V49.747" fill={strokeColor} opacity="0.2" />
          <path d="M18.5 49.747H53.5" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38.499 49.747V22.247C38.499 21.916 38.367 21.598 38.133 21.363C37.898 21.129 37.581 20.997 37.249 20.997H22.249C21.917 20.997 21.599 21.129 21.365 21.363C21.131 21.598 20.999 21.916 20.999 22.247V49.747" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M51 49.747V32.247C51 31.916 50.867 31.598 50.633 31.363C50.398 31.129 50.081 30.997 49.749 30.997H38.499" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 27.247H31" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28.499 37.247H33.499" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 43.497H31" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M43.499 43.497H46" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M43.499 37.247H46" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      number: boxCardData.totalCompanies ?? '0',
      description: 'Companies',
    },
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="72" height="72" rx="4" fill={bgColor} />
          <path d="M29.75 41C34.237 41 37.875 37.362 37.875 32.875C37.875 28.388 34.237 24.75 29.75 24.75C25.263 24.75 21.625 28.388 21.625 32.875C21.625 37.362 25.263 41 29.75 41Z" fill={strokeColor} opacity="0.2" />
          <path d="M29.75 41C34.237 41 37.875 37.362 37.875 32.875C37.875 28.388 34.237 24.75 29.75 24.75C25.263 24.75 21.625 28.388 21.625 32.875C21.625 37.362 25.263 41 29.75 41Z" stroke={strokeColor} strokeWidth="2" strokeMiterlimit="10" />
          <path d="M40.283 26.283C41.117 26.03 41.998 25.924 42.876 25.974C43.755 26.023 44.611 26.228 45.396 26.578C46.181 26.929 46.879 27.419 47.449 28.018C48.02 28.617 48.45 29.315 48.708 30.062C48.966 30.808 49.045 31.588 48.939 32.354C48.832 33.12 48.544 33.852 48.094 34.501C47.643 35.15 47.042 35.7 46.336 36.104C45.63 36.509 44.838 36.756 44.021 36.83C43.205 36.904 42.384 36.803 41.611 36.535" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32.554 39.631L32.024 42.183C31.839 43.043 31.359 43.81 30.664 44.375C29.97 44.94 29.102 45.272 28.199 45.32H24.894C23.991 45.272 23.123 44.94 22.429 44.375C21.735 43.81 21.254 43.043 21.07 42.183L20.54 39.631" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38.533 37.297L38.2 38.84C38.064 39.445 37.737 39.987 37.262 40.381C36.787 40.774 36.19 41 35.571 41H24.929C24.31 41 23.713 40.774 23.238 40.381C22.763 39.987 22.436 39.445 22.3 38.84L21.967 37.297" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      number: boxCardData.totalApplicants ?? '0',
      description: 'Members',
    },
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="72" height="72" rx="4" fill={bgColor} />
          <path d="M27.75 39.75C28.442 39.75 29.12 39.528 29.687 39.118C30.254 38.708 30.683 38.128 30.914 37.451C31.145 36.775 31.166 36.034 30.975 35.346C30.784 34.659 30.391 34.059 29.859 33.635C29.327 33.211 28.684 32.988 28.016 32.999C27.295 33.01 26.605 33.268 26.062 33.725C25.519 34.182 25.158 34.808 25.045 35.494C24.932 36.18 25.075 36.878 25.448 37.462C25.82 38.045 26.396 38.469 27.075 38.644C27.3 38.707 27.526 38.746 27.75 38.75C28.269 38.75 28.769 38.563 29.172 38.228C29.575 37.893 29.86 37.428 29.983 36.908C30.106 36.388 30.059 35.842 29.854 35.358C29.648 34.874 29.302 34.48 28.875 34.229C28.448 33.977 27.965 33.883 27.5 33.964C27.035 34.045 26.62 34.295 26.333 34.653C26.046 35.011 25.9 35.454 25.916 35.903" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28.25 25.25C34.265 25.25 39.5 28.709 41.836 34.083C42.295 35.151 42.595 36.274 42.722 37.425C42.848 38.576 42.801 39.738 42.583 40.871C42.366 42.005 41.982 43.088 41.442 44.081C40.901 45.073 40.214 45.963 39.413 46.718C38.611 47.474 37.698 48.085 36.705 48.521C35.713 48.958 34.651 49.215 33.582 49.28C32.514 49.345 31.45 49.216 30.439 48.901C29.428 48.585 28.486 48.09 27.655 47.439C26.824 46.788 26.116 45.992 25.573 45.095C25.03 44.198 24.663 43.213 24.493 42.186C24.324 41.159 24.355 40.11 24.585 39.099C24.815 38.089 25.239 37.136 25.832 36.288C26.425 35.439 27.171 34.713 28.021 34.14" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.625 25.25H20.25C19.42 25.25 18.625 25.5 17.952 25.96C17.279 26.42 16.754 27.072 16.445 27.827C16.136 28.582 16.058 29.406 16.221 30.2C16.384 30.994 16.78 31.718 17.36 32.288C17.94 32.858 18.68 33.248 19.485 33.407C20.291 33.566 21.123 33.484 21.875 33.171C22.627 32.858 23.257 32.33 23.689 31.662C24.121 30.993 24.33 30.214 24.293 29.429" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      number: boxCardData.totalResume ?? '0',
      description: 'Resumes',
    },
  ];

  return cards;

}