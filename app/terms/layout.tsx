import React from 'react';

import VideoSection from '@/components/VideoSection';

interface TermsLayoutProps {
    children: React.ReactNode;
}

const TermsLayout: React.FC<TermsLayoutProps> = ({ children }) => {
    return (
        <>
            <header>
                <VideoSection videoSrc={'/seattleVidMedia.webm'} text="Terms" />
            </header>

            {children}
        </>
    );
};

export default TermsLayout;