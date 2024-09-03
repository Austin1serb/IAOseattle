import React from 'react';

import VideoSection from '@/components/VideoSection';

interface PrivacyPolicyProps {
    children: React.ReactNode;
}
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ children }) => {
    return (
        <>
            <header>
                <VideoSection videoSrc={'/seattleVidMedia.webm'} text="Privacy Policy" poster='/images/seattleVidMedia-min.jpg' />
            </header>

            {children}
        </>
    );
};

export default PrivacyPolicy;