import Link from 'next/link';
import VideoSection from './components/VideoSection';
import IncidentComponent from './components/IncidentComponent';

export default function Home() {
  return (
    <div className='bg-transparent'>
      <div className="absolute h-screen w-screen overflow-hidden text-white">
        <VideoSection
          videoSrc="/seattleVidAbout.webm"
          homePage={true}
          size='70vh'
        />
      </div>

      <main className="relative z-20 bg-transparent ">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center h-[70vh] bg-opacity-30 bg-black">
          <div className="text-center max-w-4xl p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-text-shine">
              A New Approach to Security
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Focusing on <span className="underline text-shadow-2 text-white">De-escalation</span> and <span className="text-shadow-2 text-white">Building Bridges</span> between communities and emergency services.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-3 font-bold text-lg bg-blue-600 opacity-90 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Learn More
            </Link>
          </div>
        </section>
        {/* Hero Section */}
        <section className="w-full bg-slate-800">
          <div className="text-center p-8 w-full">
            <span className='text-5xl sm:text-6xl md:text-8xl  text-shadow text-white font-bold uppercase text-center flex justify-center items-center'>Iron & Oak</span>
            <span className={`flex justify-center items-center text-shadow-2 text-white text-center text-base md:text-sm md-lg:text-lg`}>Protective Services</span>
          </div>
        </section>

        {/* Incident Overview Section */}
        <IncidentComponent />

        {/* Services and News Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16 bg-slate-900">
          {/* Services Overview */}
          <div className="bg-slate-700 p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Explore the wide range of security services we offer to keep your business, community, and events safe.
            </p>
            <Link
              href="/services"
              className="inline-block px-6 py-3 font-bold text-lg bg-blue-600 opacity-90 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              View All Services
            </Link>
          </div>

          {/* Recent News */}
          <div className="bg-slate-700 p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Recent News & Articles
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Stay informed with the latest updates and articles on security and community engagement.
            </p>
            <Link
              href="/media"
              className="inline-block px-6 py-3 font-bold text-lg bg-blue-600 opacity-90 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Read More
            </Link>
          </div>
        </section>

        {/* Careers and Contact Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16 bg-slate-800">
          {/* Careers Section */}
          <div className="bg-slate-700 p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              We&apos;re always looking for dedicated professionals. Explore current job opportunities.
            </p>
            <Link
              href="/careers"
              className="inline-block px-6 py-3 font-bold text-lg bg-blue-600 opacity-90 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              See Open Positions
            </Link>
          </div>

          {/* Contact Us Section */}
          <div className="bg-slate-700 p-8 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Have questions or concerns? We&apos;re here to help. Contact us today!
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 font-bold text-lg bg-blue-600 opacity-90 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}