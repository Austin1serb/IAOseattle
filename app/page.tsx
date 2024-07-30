import Link from "next/link";
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
    <div className="relative bg-background text-on-background">
      <div className="absolute sm:top-12 md:top-20 lg:top-24 left-20 inset-0 flex flex-col items-start justify-start z-10">
        <div>
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase">Iron & Oak</h1>
          <p className="text-white text-sm sm:text-base md:text-2xl text-center">Protective Services</p>
        </div>
        <div className="w-full -ml-2.5">
        <div className="text-white mt-16 w-1/3 bg-secondary-darktransparen backdrop-blur p-4 rounded-lg">
          <p className="text-sm sm:text-base md:text-xl">
            <span className="bg-secondary-darktransparent p-2 -ml-1 uppercase"> Bridging the gap </span>
            between our client communities and publicly funded emergency and law enforcement services.  <br />
          </p>
        </div>
        <div className="text-white mt-4 w-1/3 bg-secondary-darktransparen backdrop-blur p-4 rounded-lg">
          <p className="text-sm sm:text-base md:text-xl">
            We focus on clients who foster community engagement and create a positive social impact.
          </p>
        </div>
        <div className="w-1/3 flex justify-start items-center backdrop-blur mt-4 p-4 rounded-lg">
          <Link className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 w-1/3 text-center mr-12 cursor-pointer" href={'/contact'}>Contact</Link>
          <Link className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-800 w-1/3 text-center cursor-pointer" href={'/about'}>Learn More</Link>
        </div>
        </div>
      </div>
      <VideoSection videoSrc={"/SeattleVidLong1.webm"} size='screen' includeBrand={false} />
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full h-">
          <div className="w-1/2">

          </div>
          <div className="w-1/2 flex items-center justify-center">
            <IncidentWidget />
          </div>
        </div>
      </div>
      <div className="h-screen text-on-light"></div>
    </div>
  );
}