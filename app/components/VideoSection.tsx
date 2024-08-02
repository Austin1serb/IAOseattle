import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

// Lazy load the VideoPlayer component
const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
    ssr: true, // Disable server-side rendering for this component
    loading: () => (
        <div className="relative w-full h-1/3 md:h-96 object-cover min-h-48">
            <Image
                src={'/images/seattleVidMediaPic.jpg'}
                alt='background-img'
                fill
                className='w-full h-full object-cover min-h-48'
                priority // Ensure the image loads quickly
            />
        </div>
    ),
});

interface VideoSectionProps {
    videoSrc: string;
    size?: string;
    includeBrand?: boolean;
    text?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc, size = '96', includeBrand, text }) => {
    return (
        <div className={`relative w-full min-w h-${size}`}>
            <VideoPlayer size={size} videoSrc={videoSrc} />
            <div className="hidden absolute sm:top-12 md:top-20 lg:top-20 left-12 inset-0 md:flex flex-col items-start justify-start z-10 ">
                <div>
                    <h1 className="text-white sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase">Iron & Oak</h1>
                    <p className="text-white text-base md:text-2xl text-center">Protective Services</p>
                </div>
            </div>

            <div className='transform lg:-translate-y-36 md:-translate-y-32 sm:-translate-y-20 xs:-translate-y-16 -translate-y-20'>
                <h1 className="text-white text-3xl xs:text-5xl sm:text-6xl md:text-[78px] lg:text-8xl font-bold uppercase text-center">{text}</h1>
            </div>
        </div>
    );
};

export default VideoSection;