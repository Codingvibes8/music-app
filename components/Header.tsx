'use client';
import React from "react";
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import { FaUserAlt } from 'react-icons/fa';

import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';





interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter();
    return (
        <div
            className={twMerge(
                `
        h-fit 
        bg-gradient-to-b 
        from-indigo-800
        p-6
        `,
                className
            )}
        >
            <div className={'flex items-center justify-center w-full text-yellow-400 text-3xl mb-2 font-bold'}>
                MusicShark
            </div>
            <div className='w-full mb-4 flex items-center justify-between'>
                <div className='hidden md:flex gap-x-2 items-center'>
                    <button
                        onClick={() => router.back()}
                        className='
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            '
                    >
                        <RxCaretLeft className='text-white' size={35} />
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className='
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            '
                    >
                        <RxCaretRight className='text-white' size={35} />
                    </button>
                </div>
                <div className='flex md:hidden gap-x-2 items-center'>
                    <button
                        onClick={() => router.push('/')}
                        className='
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            '
                    >
                        <HiHome className='text-black' size={20} />
                    </button>
                    <button
                        onClick={() => router.push('/search')}
                        className='
              rounded-full
              p-2
              bg-white
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-75
              transition
            '
                    >
                        <BiSearch className='text-black' size={20} />
                    </button>
                </div>
                <div className='flex justify-between items-center gap-x-4'>

                        <div className='flex gap-x-4 items-center'>
                            <Button className='bg-white px-6 py-2'>
                                Logout
                            </Button>
                            <Button
                                onClick={() => router.push('/account')}
                                className='bg-white'
                            >
                                <FaUserAlt />
                            </Button>
                        </div>

                        <>
                            <div>
                                <Button

                                    className='
                    bg-blue-600
                    text-neutral-300
                    font-medium
                  '
                                >
                                    Sign up
                                </Button>
                            </div>
                            <div>
                                <Button
                                    className='bg-yellow-400 px-6 py-2'
                                >
                                    Log in
                                </Button>
                            </div>
                        </>

                </div>
            </div>
            {children}
        </div>
    );
};

export default Header;
