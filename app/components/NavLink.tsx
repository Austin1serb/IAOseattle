import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  className = "",
  onClick,
}) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
  const [isPending, setIsPending] = useState(false);

  const combinedClassName = `${className} h-10 w-24 text-center py-2 rounded-md font-medium uppercase transition-colors duration-300 ${
    isActive
      ? "animate-shine text-blue-600 hover:text-blue-800 shadow-md"
      : "hover:animate-under-shine text-white hover:text-blue-600 hover:bg-[#ffffff64]"
  }`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log("handleClick");
    if (onClick) {
      onClick();
    }
    if (pathname !== href) {
      setIsPending(true);
    }
  };

  useEffect(() => {
    setIsPending(false);
  }, [pathname]);

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={`${combinedClassName} ${
        isPending ? "pointer-events-none" : ""
      }`}
      aria-busy={isPending ? "true" : "false"}
    >
      {isPending ? <LoadingSpinner /> : label}
    </Link>
  );
};

export default NavLink;
