import Link from "next/link";
import VideoSection from "./components/VideoSection";
import IncidentComponent from "./components/IncidentComponent";
import SectionCard from "./components/SectionCard";

export default function Home() {
  return (
    <div className="bg-transparent relative">
      <div className="absolute h-screen w-screen overflow-hidden text-white">
        <VideoSection
          videoSrc="/seattleVidAbout.webm"
          poster="/images/seattleVidAbout-min.jpg"
          homePage={true}
          size="85vh"
        />
      </div>

      <main className="relative z-20 bg-transparent ">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center h-[80vh] bg-opacity-30 bg-black">
          <div className="text-center max-w-4xl p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-text-shine">
              A New Approach to Security
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Focusing on{" "}
              <span className="underline text-shadow-2 text-white">
                De-escalation
              </span>{" "}
              and{" "}
              <span className="text-shadow-2 text-white">Building Bridges</span>{" "}
              between communities and emergency services.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-3 font-bold text-lg  bg-blue-600 opacity-90 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-white "
            >
              Learn More
            </Link>
          </div>
        </section>
        {/* Hero Section */}
        <section className="w-full bg-slate-800 border-b-2 border-slate-200">
          <div className="text-center p-8 w-full">
            <span className="text-5xl sm:text-6xl md:text-8xl  text-shadow text-white font-bold uppercase text-center flex justify-center items-center">
              Iron & Oak
            </span>
            <span
              className={`flex justify-center items-center text-shadow-2 text-white text-center text-base md:text-sm md-lg:text-lg`}
            >
              Protective Services
            </span>
          </div>
        </section>

        {/* Incident Overview Section */}
        <IncidentComponent />
        <section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-8 px-4 py-16 bg-slate-200 justify-items-center mx-auto">
          <SectionCard
            title="Our Services"
            description="Explore the wide range of security services we offer to keep your business, community, and events safe."
            linkText="View All Services"
            linkHref="/services"
            features={[
              "24/7 On-Site Security Personnel",
              "Mobile Patrol Services",
              "Event Security Management",
              "Surveillance and Monitoring",
              "Emergency Response Services",
            ]}
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z"></path>
                <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z"></path>
              </svg>
            }
          />
          <SectionCard
            title=" News & Articles"
            description="Stay informed with the latest updates and articles on security and community engagement."
            linkText="Read More"
            linkHref="/media"
            features={[
              "Community Safety Initiatives",
              "Latest Security Technologies",
              "Industry News & Trends",
              "Case Studies & Success Stories",
            ]}
            icon={
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                ></path>
              </svg>
            }
          />
          {/* Careers and Contact Section */}
          <SectionCard
            title="Join Our Team"
            description="We're always looking for dedicated professionals. Explore current job opportunities."
            linkText="See Open Positions"
            linkHref="/careers"
            features={[
              "Competitive Salaries & Benefits",
              "Comprehensive Training Programs",
              "Career Advancement Opportunities",
              "Supportive Work Environment",
              "Diverse and Inclusive Culture",
            ]}
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
              </svg>
            }
          />
          <SectionCard
            title="Get in Touch"
            description="Have questions or concerns? We're here to help. Contact us today!"
            linkText="Contact Us"
            linkHref="/contact"
            features={[
              "24/7 Customer Support",
              "Personalized Security Consultations",
              "Immediate Assistance for Emergencies",
              "Request a Quote for Services",
            ]}
            icon={
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                ></path>
              </svg>
            }
          />
        </section>
      </main>
    </div>
  );
}
