import React from 'react';

interface Props {
    videoSrc: string;
    size?: string;
}

const VideoPlayer: React.FC<Props> = ({ videoSrc }) => {

    return (
        <div className={`relative w-full h-full`}>
            <video
                className="video-setion absolute w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/images/seattleVidAbout-min.jpg"
                

            >
                <source src={videoSrc} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;