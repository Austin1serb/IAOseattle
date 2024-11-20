import React from "react";

import VideoSection from "@/components/VideoSection";
import JoinTheTeamCTA from "@/about/aboutComponents/JoinTheTeamCTA";

interface ArticlesLayoutProps {
  children: React.ReactNode;
}

const ArticlesLayout: React.FC<ArticlesLayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <VideoSection
          videoSrc={"/seattleVidMedia.webm"}
          text="Articles"
          poster="/images/seattleVidMedia-min.jpg"
        />
      </header>

      {children}
      <JoinTheTeamCTA />
    </>
  );
};

export default ArticlesLayout;
