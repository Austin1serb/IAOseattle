// src/app/careers/CareersLayout.tsx

import React from 'react';
import VideoSection from '@/components/VideoSection';
import ScrollOnLoad from '@/components/utils/ScrollOnLoad';

const CareersLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <main className="w-full min-w-350px">
            <header>
                <VideoSection videoSrc={'/seattleHome.webm'} text='Careers' size='96' homePage={false} />
                <ScrollOnLoad scrollPosition={150} />
            </header>
            
                {children}
        
        </main>
    );
};

export default CareersLayout;