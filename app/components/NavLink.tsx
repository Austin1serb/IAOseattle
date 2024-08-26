import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    label: string;
    className?: string;
    onClick?:() => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, className, onClick }) => {
    const pathname = usePathname();
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(pathname === href);
    }, [pathname, href]);

    return (
        <Link onClick={onClick} href={href} className={`${className} px-3 py-2 rounded-md font-medium uppercase transition-colors duration-300 ${active ? 'text-blue-600 bg-[#ffffffe0] shadow-md' : 'text-white hover:text-blue-600 hover:bg-[#ffffff64]'}`}>
            {label}
        </Link>
    );
};

export default NavLink;