import React from 'react';

interface VideoSectionProps {
    videoSrc: string;
    size?: string;
    includeBrand?: boolean;
    text?: string

}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc, size, includeBrand, text }) => {

    return (
        <div className={`relative w-screen min-w-96 h-${size}`}>
            <video className={`w-full h-${size} object-cover min-h-48`} autoPlay loop muted playsInline preload='auto'>
                <source src={videoSrc} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            {includeBrand ? <div className="hidden absolute sm:top-12 md:top-20 lg:top-20 left-16 inset-0 lg:flex flex-col items-start justify-start z-10 ">
                <div>
                    <h1 className="text-white sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase">Iron & Oak</h1>
                    <p className="text-white text-base md:text-2xl text-center">Protective Services</p>
                </div>
            </div> : ''}
            <div className='transform lg:-translate-y-36 md:-translate-y-24 sm:-translate-y-20 xs:-translate-y-16 -translate-y-20'>
                <h1 className="text-white text-3xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-center">{text}</h1>
            </div>
        </div>
    );
};

export default VideoSection;