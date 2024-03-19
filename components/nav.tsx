import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
    return (
        <div>
            <div className='flex items-center justify-between shadow-md'>
                <Link href="/" className='ml-[15%]'>
                    <Image src='/main_logo.jpg' alt="job logo" className="max-w-[150px] py-2" width={150} height={150} />
                </Link>
                <Link href='/login' className='mr-56'>
                    <span className='text-blue-500 text-sm'>Login</span>
                </Link>

            </div>

        </div>
    )
}

export default Nav;