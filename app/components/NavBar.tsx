'use client';
import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HamburgerIcon from './HamburgerIcon';

// Utility function for throttling
const throttle = <T extends (...args: any[]) => void>(func: T, delay: number) => {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        func(...args);
    };
};

const Navbar: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [totalScrollableHeight, setTotalScrollableHeight] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTotalScrollableHeight(document.documentElement.scrollHeight - window.innerHeight);
        const handleScroll = throttle(() => {
            setScrollY(window.scrollY);
        }, 50);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getOpacity = () => {
        const scrollFraction = scrollY / totalScrollableHeight;
        const opacity = Math.floor(scrollFraction * 100) / 100;
        return scrollY > 300 ? opacity + 0.3 : 0;
    };

    return (
        <>
            <div
                id="navbar"
                className="bg-transparent text-on-primary fixed top-0 z-50 shadow-lg backdrop-blur w-full transition-all duration-300 py-2 sm:pt-0 min-w-[350px]"
                style={{ backgroundColor: `rgba(0, 0, 0, ${getOpacity()})` }}
            >
                <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">

                            <span className='text-3xl sm:hidden text-center  text-shadow text-white font-bold uppercase flex justify-center items-center'>Iron & Oak</span>
                            <div className="hidden sm:block ml-12 w-full">
                                <div className="flex space-x-4 font-bold">
                                    <NavLink href="/" label="Home" />
                                    <NavLink href="/about" label="About" />
                                    <NavLink href="/media" label="Media" />
                                    <NavLink href="/articles" label="Articles" />
                                    <NavLink href="/contact" label="Contact" />
                                    <NavLink href="/careers" label="Careers" />
                                </div>
                            </div>
                            <Link href={'/'} className='flex sm:block'>
                                <Image
                                    src="https://www.jotform.com/uploads/iaoadmin/form_files/222058180857156_mainPWAIcon.6382b2a1a860f.png"
                                    alt="Iron & Oak Logo"
                                    width={50}
                                    height={50}
                                    className="cursor-pointer rounded-md  hidden sm:block"
                                />

                            </Link>
                            {/* Hamburger Icon for Mobile */}
                            <div className=' sm:hidden'>
                                <HamburgerIcon isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-menu sm:hidden fixed top-0 left-0 w-full z-40 transition-transform ease-out duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="w-full h-[60vh] bg-[#0000009d] backdrop-blur flex flex-col items-center justify-center">
                    <div className={`mobile-nav-links w-1/3 h-3/4 mt-16 flex flex-col items-center justify-evenly text-xl`}>
                        <NavLink onClick={() => setIsOpen(false)} href="/" label="Home" className={`${isOpen ? 'translate-x-0 transition-transform ease-out delay-[300ms] duration-300' : 'translate-x-[100vw] delay-0'}  `} />
                        <NavLink onClick={() => setIsOpen(false)} href="/about" label="About" className={`${isOpen ? 'translate-x-0 transition-transform ease-out delay-[400ms] duration-300' : 'translate-x-[100vw]  delay-0'}  `} />
                        <NavLink onClick={() => setIsOpen(false)} href="/media" label="Media" className={`${isOpen ? 'translate-x-0 transition-transform ease-out delay-[500ms] duration-300' : 'translate-x-[100vw]  delay-0'}  `} />
                        <NavLink onClick={() => setIsOpen(false)} href="/articles" label="Articles" className={`${isOpen ? 'translate-x-0  transition-transform ease-out delay-[600ms] duration-300' : 'translate-x-[100vw]  delay-0'} `} />
                        <NavLink onClick={() => setIsOpen(false)} href="/contact" label="Contact" className={`${isOpen ? 'translate-x-0 transition-transform ease-out delay-[700ms] duration-300' : 'translate-x-[100vw]  delay-0'}  `} />
                        <NavLink onClick={() => setIsOpen(false)} href="/careers" label="Careers" className={`${isOpen ? 'translate-x-0 transition-transform ease-out delay-[800ms] duration-500 ' : 'translate-x-[100vw]  delay-0'} `} />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;