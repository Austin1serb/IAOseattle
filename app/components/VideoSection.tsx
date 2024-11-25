import React from "react";
import VideoPlayer from "./VideoPlayer";

interface VideoSectionProps {
  videoSrc: string;
  size?: string;
  homePage?: boolean;
  text?: string;
  poster: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoSrc,
  size,
  homePage,
  text,
  poster,
}) => {
  const videoSize = size ?? "33vw";
  return (
    <div
      className={` relative w-full min-h-48 ${
        !homePage ? "max-h-[485px]" : ""
      }`}
      style={{ height: videoSize }}
    >
      <VideoPlayer videoSrc={videoSrc} poster={poster} />
      {/* added hidden for testing  */}
      <div
        className={`text-nowrap z-10 w-fit h-fit ${
          homePage
            ? " hidden absolute inset-0 items-start md:justify-start top-20 left-8 md:items-start justify-center"
            : "hidden absolute sm:top-12 md:top-20 lg:top-20 left-10 inset-0 md-lg:flex flex-col items-start justify-start"
        } `}
      >
        <div>
          <span
            className={`${
              homePage
                ? "text-5xl sm:text-6xl md:text-8xl "
                : "sm:text-4xl md:text-3xl lg:text-5xl"
            } text-shadow text-white font-bold uppercase text-center flex justify-center items-center`}
          >
            Iron & Oak
          </span>
          <span
            className={`flex justify-center items-center text-shadow-2 text-white text-center ${
              homePage
                ? "text-xl md:text-2xl"
                : "text-base md:text-sm md-lg:text-lg "
            }`}
          >
            Protective Services
          </span>
        </div>
      </div>

      <div
        className={`${
          homePage && "hidden"
        } transform lg:-translate-y-36 md:-translate-y-32 -translate-y-20 `}
      >
        <span className="flex justify-center items-center text-shadow text-white text-5xl sm:text-6xl md:text-[78px] lg:text-8xl font-bold uppercase text-center text-nowrap">
          {text}
        </span>
      </div>
    </div>
  );
};

export default VideoSection;
