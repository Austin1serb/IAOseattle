import ScrollOnLoad from '../components/utils/ScrollOnLoad';
import VideoSection from '../components/VideoSection';
import Intro from './aboutComponents/Intro';
import MeetTheTeam from './aboutComponents/MeetTheTeam';
import OurStory from './aboutComponents/OurStory';


const About: React.FC = () => {

  return (
    <div className='w-screen min-w-[350px]'>
      <ScrollOnLoad scrollPosition={150} />
      <header>
        <VideoSection videoSrc={'/seattleVidAbout.webm'} size={'1/3'} text='About Us' />
      </header>
      <main className='w-[85%] mx-auto'>
        <Intro />
        <OurStory />
        <MeetTheTeam />
      </main>
    </div>
  );
};

export default About;