
import React from 'react';

import VideoSection from '@/components/VideoSection';

interface ContactLayoutProps {
    children: React.ReactNode;
}

const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
    return (
        <>
            <header>
                <VideoSection videoSrc={'/seattleVidMedia.webm'} text="Contact Us" poster='/images/seattleVidMedia-min.jpg'  />
            </header>

            {children}
        </>
    );
};

export default ContactLayout;