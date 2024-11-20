import React from "react";

interface LazyVideoProps {
  videoSrc: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ videoSrc }) => {
  return (
    <video
      className="video-section absolute w-full h-full object-cover bg-gray-800"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src={videoSrc} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
