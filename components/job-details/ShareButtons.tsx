'use client'
import { usePathname } from 'next/navigation';
import { AiOutlineLink } from 'react-icons/ai';
import { FaLinkedin, FaFacebook, FaTwitter, FaInbox } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useFullUrl = () => {
    const [fullUrl, setFullUrl] = useState('');
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        setFullUrl(window.location.href);
      }
    }, []);
  
    return fullUrl;
  };
  


const ShareJob = ({ description }:{description:string}) => {

    const currentUrl = useFullUrl();
    

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedDescription = encodeURIComponent(description);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
      // alert('Link copied to clipboard!');
      toast.success('Link copied to clipboard!');
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-[18px]">Share this job:</h2>
      <div className="h-[40px] text-xl flex flex-col md:flex-row items-start gap-2 justify-start md:items-center py-2 rounded">
        <a
          className="cursor-pointer text-figma_red bg-mprimary flex gap-2 items-center py-2 px-4 rounded"
          onClick={copyToClipboard}
        >
          <AiOutlineLink /> <span>Copy Link</span>
        </a>
        <ul className="flex gap-2 flex-wrap">
          {/* LinkedIn */}
          <li className="p-[12px] rounded bg-mprimary">
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedDescription}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaLinkedin className="text-figma_red" />
            </a>
          </li>
          {/* Facebook */}
          <li className="p-[12px] rounded bg-figma_red">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaFacebook className="text-white" />
            </a>
          </li>
          {/* Twitter */}
          <li className="p-[12px] rounded bg-mprimary">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedDescription}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaTwitter className="text-figma_red" />
            </a>
          </li>
          {/* Inbox */}
          <li className="p-[12px] rounded bg-mprimary">
            <a
              href={`mailto:?subject=Check out this job&body=${encodedDescription} - ${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaInbox className="text-figma_red" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShareJob;
