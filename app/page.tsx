import BridgingTheGap from "./components/BridgingTheGap";
import IncidentWidget from "./components/IncidentWidget";
import VideoSection from "./components/VideoSection";

interface IncidentData {
  fields: {
    "Incident Type": string;
  };
}

interface HomeProps {
  incidentData: IncidentData[];
}


export default function Home() {
  return (
    <div className="bg-background text-on-background">
      <VideoSection videoSrc={"/seattleVidSlim.webm"} />
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full h-">
          <div className="w-1/2">
            <BridgingTheGap />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <IncidentWidget/>
          </div>
        </div>
      </div>
      <div className="h-screen text-on-light"></div>
    </div>
  );
}