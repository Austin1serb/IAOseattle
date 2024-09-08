import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';

interface NavLinkProps {
    href: string;
    label: string;
    className?: string;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, className = '', onClick }) => {
    const pathname = usePathname();
    const isActive = href === '/' ? pathname === href : pathname.startsWith(href);
    const [isPending, startTransition] = useTransition();

    const combinedClassName = `${className} h-10 w-24 text-center py-2 rounded-md font-medium uppercase transition-colors duration-300 ${isActive
            ? 'animate-shine text-blue-600 hover:text-blue-800 shadow-md'
            : 'hover:animate-under-shine text-white hover:text-blue-600 hover:bg-[#ffffff64]'
        }`;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }

        startTransition(() => {
            // Use Next.js' navigation to handle routing
            // Assuming your routes are all link-based, startTransition will manage loading state
        });
    };

    return (
        <Link  onClick={handleClick} href={href} className={combinedClassName}>
            <span className={`${isPending? 'opacity-0':'opacity-100'}`}>{isPending ? <LoadingSpinner /> : label}</span>
        </Link>
    );
};

export default NavLink;