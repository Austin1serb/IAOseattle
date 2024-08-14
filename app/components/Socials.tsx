'use client';
import React, { useEffect, useState } from 'react';
import ClipboardButton from './ClipboardButton';
import Link from 'next/link';

interface SocialsProps {
    title: string;
    slug: string;
}

const Socials: React.FC<SocialsProps> = ({ title, slug }) => {
    const [articleUrl, setArticleUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setArticleUrl(`${window.location.origin}/articles/${slug}`);

        }
    }, [slug]);


    return (
        <div className="relative flex flex-col justify-between items-center space-y-2 w-full sm:w-auto pb-8 sm:pb-0">
            <span className="absolute -top-8 left-0 text-lg font-semibold">Share:</span>
            <div className="flex flex-row w-full justify-between items-center  sm:space-x-4">
                <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                    aria-label='facebook share link'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 transition-all duration-150 hover:underline hover:text-blue-800 hover:bg-blue-50 rounded-md p-3 flex items-center border cursor-pointer"
                >
                    {/* SVG for Facebook */}
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                </Link>
                <Link
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(title)}`}
                    aria-label='twitter share link'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black transition-all duration-150 hover:underline hover:text-blue-800 hover:bg-blue-50 rounded-md p-3 flex items-center border cursor-pointer"
                >
                    {/* SVG for Twitter */}
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
                </Link>
                <Link
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                    aria-label='linkedIn share link'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 transition-all duration-150 hover:underline hover:text-blue-800 hover:bg-blue-50 rounded-md p-3 flex items-center border cursor-pointer"
                >
                    {/* SVG for LinkedIn */}
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                </Link>
                <ClipboardButton url={articleUrl} />
            </div>
        </div>
    );
};

export default Socials;