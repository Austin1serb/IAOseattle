import React from "react";

import VideoSection from "@/components/VideoSection";

interface AboutLayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <VideoSection
          videoSrc={"/seattleVidAbout.webm"}
          text="About Us"
          poster={"/images/seattleVidAbout-min.jpg"}
        />
      </header>

      {children}
    </>
  );
};

export default AboutLayout;
