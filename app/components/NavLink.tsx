"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
    const pathname = usePathname();
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (pathname === href) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [pathname, href]);

    return (
        <Link href={href} className={`px-3 py-2 rounded font-thin uppercase hover:text-on-primary hover:bg-secondary-darktransparent ${active ? 'text-secondary-light font-semibold border-[1px] border-secondary-light' : 'text-white'}`}>
            {label}
        </Link>
    );
};

export default NavLink;