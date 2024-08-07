import Link from "next/link";
import IncidentWidget from "./components/IncidentWidget";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-900 text-white">
      <VideoSection videoSrc={"/seattleVidAbout.webm"} homePage={true} size="screen" />
      <div className="absolute bottom-4 right-4 z-20 p-8">
        <IncidentWidget />
      </div>
      <div className="absolute top-0 left-0 right-0 p-8 flex flex-col items-center justify-center h-full z-10 bg-black bg-opacity-50">
        <p className="text-lg md:text-2xl text-center mb-8 max-w-2xl">
          a new approach in security, focusing on de-escalation and building bridges between the public and emergency services. Our mission is to ensure safety while fostering community trust.
        </p>
        <Link href="/about" className="">
            Learn More
        </Link>
      </div>

    </div>
  );
}