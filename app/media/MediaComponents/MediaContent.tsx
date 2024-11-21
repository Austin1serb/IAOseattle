"use client";
import React, { useState } from "react";
import Image from "next/image";

interface MediaContentProps {
  videoEmbed?: string;
  videoUrl?: string;
  imageUrl: string;
  title: string;
}

const MediaContent: React.FC<MediaContentProps> = ({
  videoEmbed,
  videoUrl,
  imageUrl,
  title,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const defaultImageUrl = "/images/noImage.png";
  const [imgSrc, setImgSrc] = useState(imageUrl || defaultImageUrl);

  const videoEmbedSrc = videoEmbed?.match(/src="([^"]+)"/)?.[1] || "";

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  if (videoEmbed && isVideoPlaying) {
    const autoplayVideoEmbedSrc = `${videoEmbedSrc}`;

    return (
      <div className="absolute top-0 left-0 w-full h-full group object-fill">
        <iframe
          title="Media player"
          src={autoplayVideoEmbedSrc}
          width="100%"
          height="100%"
          className="border-none overflow-hidden"
          loading="lazy"
          allowFullScreen={true}
        />
      </div>
    );
  } else if (videoEmbed && !isVideoPlaying) {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black group transition-all duration-300">
        <button
          aria-label="play button"
          type="button"
          onClick={handlePlayButtonClick}
          className="rounded-full p-2 flex items-center justify-center hover:cursor-pointer"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            className="fill-gray-300 hover:fill-gray-600 transition-colors duration-300"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="4.5em"
            width="4.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
          </svg>
        </button>
      </div>
    );
  } else if (videoUrl) {
    return (
      <video
        controls
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  } else {
    return (
      <Image
        src={imgSrc}
        alt={title}
        onError={() => setImgSrc(defaultImageUrl)} // Fallback to default image on error
        fill
        sizes="25vw"
        className="object-cover group-hover:grayscale-[50%]"
        priority
      />
    );
  }
};

export default MediaContent;
