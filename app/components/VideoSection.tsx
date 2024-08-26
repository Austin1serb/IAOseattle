import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

// Lazy load the VideoPlayer component
const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
    ssr: true,
    loading: () => (
        <div className="relative w-full h-1/3 md:h-96 object-cover min-h-48">
            <Image
                src={'/images/seattleVidMediaPic.jpg'}
                alt='background-img'
                fill
                className='w-full h-full object-cover min-h-48'
                //priority // Ensure the image loads quickly
            />
        </div>
    ),
});

interface VideoSectionProps {
    videoSrc: string;
    size?: string;
    homePage?: boolean;
    text?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc, size = '96', homePage, text }) => {
    return (
        <div className={`relative w-full h-${size}`}>
            <VideoPlayer size={size} videoSrc={videoSrc} />
            <div className={`text-nowrap z-10 w-fit h-fit ${homePage ? 'absolute inset-0 flex items-start md:justify-start top-20 left-8 md:items-start justify-center' : "hidden absolute sm:top-12 md:top-20 lg:top-20 left-10 inset-0 md-lg:flex flex-col items-start justify-start"} `}>
                <div>
                    <span className={`${homePage ? 'text-5xl sm:text-6xl md:text-8xl ' : "sm:text-4xl md:text-3xl lg:text-5xl"} text-shadow text-white font-bold uppercase text-center flex justify-center items-center`}>Iron & Oak</span>
                    <span className={`flex justify-center items-center text-shadow-2 text-white text-center ${homePage ? 'text-xl md:text-2xl' : 'text-base md:text-sm md-lg:text-lg '}`}>Protective Services</span>
                </div>
            </div>

            <div className={`${homePage && 'hidden'} transform lg:-translate-y-36 md:-translate-y-32 -translate-y-20 `}>
                <span className="flex justify-center items-center text-shadow text-white text-5xl sm:text-6xl md:text-[78px] lg:text-8xl font-bold uppercase text-center">{text}</span>
            </div>
        </div>
    );
};

export default VideoSection;