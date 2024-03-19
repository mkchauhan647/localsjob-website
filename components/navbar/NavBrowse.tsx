import React from 'react'
import Link from 'next/link'
import {IoMdArrowDropdown} from 'react-icons/io'
interface NavElementsProps {
    text: string;
    link: string;
  }
const NavBrowse = ({text,link}:NavElementsProps) => {
  return (
    <Link href={link}>
      <div className='flex gap-x-[2px]'>
        <button className='text-[14px]'>{text}</button>
        <IoMdArrowDropdown/>
        </div>
    </Link>
  )
}

export default NavBrowse