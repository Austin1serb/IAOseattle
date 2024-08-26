import React from 'react';

import VideoSection from '@/components/VideoSection';

interface MediaLayoutProps {
    children: React.ReactNode;
}

const MediaLayout: React.FC<MediaLayoutProps> = ({ children }) => {
    return (
        <>
            <header>
                <VideoSection videoSrc={'/seattleVidMedia.webm'} text="Media & Articles" />
            </header>

            {children}
        </>
    );
};

export default MediaLayout;