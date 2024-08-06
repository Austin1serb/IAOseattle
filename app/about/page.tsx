import ScrollOnLoad from '../components/utils/ScrollOnLoad';
import VideoSection from '../components/VideoSection';
import Intro from './aboutComponents/Intro';
import MeethTheOwner from './aboutComponents/MeethTheOwner';


const Media: React.FC = () => {

  return (
    <div className='w-screen min-w-[350px]'>
      <ScrollOnLoad scrollPosition={150} />
      <header>
        <VideoSection videoSrc={'/seattleVidMedia.webm'} size={'1/3'} includeBrand={true} text='About Us' />
      </header>
      <main className='w-[85%] mx-auto'>
        <Intro />
        <MeethTheOwner/>
        {/*
      
     <MeetTheTeam/>*/}
      </main>
    </div>
  );
};

export default Media;