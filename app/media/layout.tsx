import React from "react";

import VideoSection from "@/components/VideoSection";
import JoinTheTeamCTA from "@/about/aboutComponents/JoinTheTeamCTA";

interface MediaLayoutProps {
  children: React.ReactNode;
}

const MediaLayout: React.FC<MediaLayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <VideoSection
          videoSrc={"/seattleVidMedia.webm"}
          text="Media"
          poster="/images/seattleVidMedia-min.jpg"
        />
      </header>

      {children}
      <JoinTheTeamCTA />
    </>
  );
};

export default MediaLayout;
