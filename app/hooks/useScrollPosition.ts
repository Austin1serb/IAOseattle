// hooks/useScrollPosition.ts
'use client'
import { useState, useEffect } from 'react';

type ScrollPosition = {
    scrollY: number;
};

const useScrollPosition = (): ScrollPosition => {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ scrollY: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition({ scrollY: window.scrollY });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
};

export default useScrollPosition;