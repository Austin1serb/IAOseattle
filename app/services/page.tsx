import ContactButton from "@/components/ContactButton";
import React from "react";
import BlueCheck from "./BlueCheck";
//
const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <section className="mb-12 ">
          <div className="flex items-center justify-center mb-6">
            <div className="text-blue-500 h-24 w-24 mr-4">
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
            </div>
            <h1 className="md:text-7xl text-5xl text-nowrap font-bold text-[#213343]">
              Our Services
              <span className="ml-1 text-sm text-gray-500 font-normal"> ®</span>
            </h1>
          </div>
          <p className="text-lg text-slate-700">
            At Iron & Oak, we offer a comprehensive range of security services
            designed to protect your business, community, and events. Our
            mission is to bridge the gap between public safety and private
            organizations, ensuring a safe and secure environment for all.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-56 gap-y-16 mb-16">
          {/* Our Guards Section */}
          <div>
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Our Guards
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Our security guards are more than just a presence—they are highly
              trained professionals who are fully licensed in the state of
              Washington. We pride ourselves on the rigorous training and
              certifications our guards undergo, ensuring they are well-prepared
              to handle any situation.
            </p>
            <ul className="list  text-slate-600 space-y-4">
              <li className="flex items-center">
                {" "}
                <BlueCheck />
                Fully licensed and certified security professionals in WA state
              </li>
              <li className="flex items-center">
                {" "}
                <BlueCheck />
                Extensive training in de-escalation techniques and conflict
                resolution
              </li>
              <li className="flex items-center">
                {" "}
                <BlueCheck />
                Proficient in first aid, CPR, and emergency response procedures
              </li>
              <li className="flex items-center">
                {" "}
                <BlueCheck />
                Skilled in advanced surveillance and monitoring technologies
              </li>
              <li className="flex items-center">
                {" "}
                <BlueCheck />
                Experienced in crowd control and event management
              </li>
              <li className="flex items-center">
                {" "}
                <BlueCheck />
                Committed to upholding the highest standards of integrity and
                professionalism
              </li>
            </ul>
          </div>
          {/* Key Services Section */}
          <div>
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Key Services
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              We provide a range of security services tailored to meet your
              specific needs. From on-site personnel and mobile patrols to event
              management and emergency response, our team delivers reliable and
              professional protection. We customize our services to ensure your
              business, community, or event remains secure, reflecting our
              commitment to excellence and trust.&rsquo;
            </p>
            <ul className="list space-y-4">
              <li className="flex items-center text-slate-600">
                <BlueCheck />
                24/7 On-Site Security Personnel
              </li>
              <li className="flex items-center text-slate-600">
                <BlueCheck />
                Mobile Patrol Services
              </li>
              <li className="flex items-center text-slate-600">
                <BlueCheck />
                Event Security Management
              </li>
              <li className="flex items-center text-slate-600">
                <BlueCheck />
                Surveillance and Monitoring
              </li>
              <li className="flex items-center text-slate-600">
                <BlueCheck />
                Emergency Response Services
              </li>
              <li className="flex items-center text-slate-600">
                <BlueCheck />
                Custom Solutions to Meet Your Unique Needs
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-[#eaf0f6] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#213343] mb-4">
            Contact Us for a Consultation
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            To ensure that our services align with your organization&apos;s
            goals and values, we require an initial consultation. This allows us
            to understand your needs and make sure that our mission of
            &apos;bridging the gap&apos; aligns with your organizational
            ideology. We are committed to providing services that not only
            secure but also build trust within the community.
          </p>
          <div className="flex justify-center">
            <ContactButton />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
