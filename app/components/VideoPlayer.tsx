import React from 'react';

interface Props {
    videoSrc: string;
    size?: string;
}

const VideoPlayer: React.FC<Props> = ({ videoSrc }) => {

    return (
        <div className='relative w-full object-cover h-full'>
            <video
                className="absolute w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src={videoSrc} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;