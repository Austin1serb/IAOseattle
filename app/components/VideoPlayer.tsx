import Image from "next/image";
import React, { lazy, Suspense } from "react";

const LazyVideo = lazy(() => import("./LazyVideo"));

interface Props {
  videoSrc: string;
  poster: string;
}

const VideoPlayer: React.FC<Props> = ({ videoSrc, poster }) => {
  return (
    <div className="relative w-full h-full">
      <Suspense
        fallback={
          <Image
            src={poster}
            alt="Loading video"
            className="absolute w-full h-full object-cover bg-gray-800"
            priority
          />
        }
      >
        <LazyVideo videoSrc={videoSrc} />
      </Suspense>
    </div>
  );
};

export default VideoPlayer;
