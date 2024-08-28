import React from 'react';

import VideoSection from '@/components/VideoSection';

interface ArticlesLayoutProps {
    children: React.ReactNode;
}

const ArticlesLayout: React.FC<ArticlesLayoutProps> = ({ children }) => {
    return (
        <>
            <header>
                <VideoSection videoSrc={'/seattleVidMedia.webm'} text="Articles" />
            </header>

            {children}
        </>
    );
};

export default ArticlesLayout;