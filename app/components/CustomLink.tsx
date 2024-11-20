"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner"; // Assume this is your spinner component

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className = "",
  onClick,
}) => {
  const pathname = usePathname();
  const [isPending, setIsPending] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      onClick();
    }
    if (pathname !== href) {
      setIsPending(true);
    }
  };

  useEffect(() => {
    setIsPending(false); // Reset pending state when the pathname changes
  }, [pathname]);

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${className} ${
        isPending ? "pointer-events-none " : ""
      } relative`}
      aria-busy={isPending ? "true" : "false"}
    >
      <LoadingSpinner
        className={`absolute ${isPending ? "opacity-100" : "opacity-0"}`}
      />
      <span className={` ${isPending ? "opacity-0" : "opacity-100"}`}>
        {children}
      </span>
    </Link>
  );
};

export default CustomLink;
