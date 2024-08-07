'use client';

import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

    useEffect(() => {
        setTotalScrollableHeight(document.documentElement.scrollHeight - window.innerHeight);
        const handleScroll = throttle(() => {
            setScrollY(window.scrollY);
        }, 50); // Adjust the delay for the throttle as needed (in milliseconds)

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getOpacity = () => {
        // Calculate the scroll fraction as a number between 0 and 1
        const scrollFraction = scrollY / totalScrollableHeight;
        // Convert the scroll fraction to an opacity value by taking the first two digits after the decimal point
        const opacity = Math.floor(scrollFraction * 100) / 100;
        // Ensure the opacity only takes effect after scrolling down a certain amount (e.g., 330px)

        if (scrollY > 300) {
            return opacity+.3;
        } else {
            return 0;
        }
    };
    

    return (
        <div
            id="navbar"
            className="bg-transparent text-on-primary fixed top-0 z-50 shadow-lg backdrop-blur w-full transition-all duration-300"
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
                        <Link href={'/'}>
                            <Image
                                src="https://www.jotform.com/uploads/iaoadmin/form_files/222058180857156_mainPWAIcon.6382b2a1a860f.png"
                                alt="Iron & Oak Logo"
                                width={50}
                                height={50}
                                className="cursor-pointer rounded-md"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
