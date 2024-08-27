import React from 'react';

import VideoSection from '@/components/VideoSection';

interface PrivacyPolicyProps {
    children: React.ReactNode;
}
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ children }) => {
    return (
        <>
            <header>
                <VideoSection videoSrc={'/seattleVidMedia.webm'} text="Privacy Policy" />
            </header>

            {children}
        </>
    );
};

export default PrivacyPolicy;