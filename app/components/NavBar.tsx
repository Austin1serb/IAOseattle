'use client'
import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const getOpacity = () => {
        const maxScroll = 400;
        return Math.min(scrollY / maxScroll, 0.8);
    };
    return (
        <nav id="navbar" className="bg-transparent text-on-primary absolute top-0 z-50 shadow-lg backdrop-blur w-screen transition-all duration-300"
            style={{ backgroundColor: `rgba(0, 0, 0, ${getOpacity()})` }}
        >
            <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6 w-full">
                            <div className="flex space-x-4 font-bold">
                                <NavLink href="/" label="Home" />
                                <NavLink href="/about" label="About" />
                                <NavLink href="/media" label="Media" />
                                <NavLink href="/contact" label="Contact" />
                                <NavLink href="/careers" label="Careers" />
                            </div>
                        </div>
                        <Link href={'/'} className='flex justify-start items-center mr-4'>
                            <Image
                                src='https://www.jotform.com/uploads/iaoadmin/form_files/222058180857156_mainPWAIcon.6382b2a1a860f.png'
                                alt='Iron & Oak Logo'
                                width={50}
                                height={50}
                                className="cursor-pointer rounded-md "
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;