'use client'; // This directive indicates the component should be client-side

import React, { useEffect } from 'react';

interface ScrollOnLoadProps {
    scrollPosition: number; // Define a prop to set the scroll position
}

const ScrollOnLoad: React.FC<ScrollOnLoadProps> = ({ scrollPosition }) => {
    useEffect(() => {
        window.scrollTo({
            top: scrollPosition, // Use the prop to determine scroll position
            behavior: 'smooth', // Optional: animate the scrolling
        });
    }, [scrollPosition]);

    return null;
};

export default ScrollOnLoad;
