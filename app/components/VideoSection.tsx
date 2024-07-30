import React from 'react';

interface VideoSectionProps {
    videoSrc: string;
}


const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc }) => {
    return (
        <div className="relative w-screen h-1/3">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={videoSrc} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute sm:top-12 md:top-0 lg:-top-12 inset-0 flex flex-col items-center justify-center">
                <h1 className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold">IRON & OAK</h1>
                <p className="text-white text-sm sm:text-base md:text-2xl">Protective Services</p>
            </div>
        </div>
    );
};

export default VideoSection;