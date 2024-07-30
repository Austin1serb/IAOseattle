import React from 'react';

interface VideoSectionProps {
    videoSrc: string;
    size: string;
    includeBrand: boolean;

}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc, size, includeBrand }) => {
    return (
        <div className={`relative w-screen h-${size}`}>
            <video className={`w-full h-${size} object-cover`} autoPlay loop muted playsInline>
                <source src={videoSrc} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            {includeBrand ? <div className="hidden absolute sm:top-12 md:top-20 lg:top-24 left-20 inset-0 lg:flex flex-col items-start justify-start z-10">
                <div>
                    <h1 className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase">Iron & Oak</h1>
                    <p className="text-white text-sm sm:text-base md:text-2xl text-center">Protective Services</p>
                </div>
            </div> : ''}
        </div>
    );
};

export default VideoSection;