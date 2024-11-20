import React from "react";

import VideoSection from "@/components/VideoSection";

interface TermsLayoutProps {
  children: React.ReactNode;
}

const TermsLayout: React.FC<TermsLayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <VideoSection
          videoSrc={"/seattleHome.webm"}
          text="Services"
          poster="/images/seattleHome-min.jpg"
        />
      </header>

      {children}
    </>
  );
};

export default TermsLayout;
