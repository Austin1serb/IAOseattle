import ScrollOnLoad from '../components/utils/ScrollOnLoad';
import VideoSection from '../components/VideoSection';
import Intro from './aboutComponents/Intro';
import MeetTheTeam from './aboutComponents/MeetTheTeam';
import OurStory from './aboutComponents/OurStory';


const About: React.FC = () => {

  return (

      <main className='w-full mx-auto'>
        <Intro />
        <OurStory />
        <MeetTheTeam />
      </main>
 
  );
};

export default About;