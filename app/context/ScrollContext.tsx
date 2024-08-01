'use client'
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface ScrollContextType {
  scrollY: number;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const ScrollProvider: React.FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};