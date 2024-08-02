import React from 'react';

interface Props {
    videoSrc: string;
    size?: string;
}

const VideoPlayer: React.FC<Props> = ({ videoSrc, size = '96' }) => {
    return (
        <div className={`relative w-full h-1/3 md:h-96 object-cover min-h-48`}>
            <video
                className="w-full h-full object-cover min-h-48"
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