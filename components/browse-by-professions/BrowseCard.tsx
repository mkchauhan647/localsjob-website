

import Image from "next/image";
import Link from "next/link";
const BrowseCard = ({ title, image, link }:{title:string,image:string,link:string}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="relative w-32 h-32">
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </div>
      <Link href={link}>
        <a className="text-lg font-medium text-center text-[#3A3A3A]">
          {title}
        </a>
      </Link>
    </div>
  );
};

export default BrowseCard;