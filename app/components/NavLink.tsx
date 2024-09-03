import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    label: string;
    className?: string;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, className = '', onClick }) => {
    const pathname = usePathname();
    const isActive = href === '/' ? pathname === href : pathname.startsWith(href);

    const combinedClassName = `${className} px-3 py-2 rounded-md font-medium uppercase transition-colors duration-300 ${
        isActive
            ? 'animate-shine text-blue-600 hover:text-blue-800 shadow-md'
            : 'hover:animate-under-shine text-white hover:text-blue-600 hover:bg-[#ffffff64]'
    }`;

    return (
        <Link onClick={onClick} href={href} className={combinedClassName}>
            {label}
        </Link>
    );
};

export default NavLink;