import React from "react";
import Image from "next/image";

const MeetTheOwner: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto sm:px-8">
        <div className="flex items-center justify-center">
          <div className="flex flex-col  items-center justify-center mr-4 sm:mr-0 ">
            <div className="relative w-24 h-24  sm:w-48 sm:h-48 md:w-64 md:h-64 mb-8 md:mb-0 md:mr-8">
              <Image
                src="/images/aleksandr-butowicz.jpg"
                alt="Aleksandr Butowicz img"
                className="rounded-full border-4 border-black object-cover z-10"
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
              />
              <div className="hidden sm:block absolute top-2 left-2 -z-1 w-[110%] h-[110%] border-[8px] border-blue-600 rounded-full "></div>
            </div>
          </div>
          <div className="sm:p-12">
            <h3 className="text-4xl font-bold text-slate-700 mb-2">
              Aleksandr Butowicz
            </h3>
            <p className="text-blue-600 text-lg font-semibold mb-4">
              Founder & CEO
            </p>
          </div>
        </div>

        <div className="text-center md:text-left mt-12">
          <p className="text-xl text-slate-700 leading-relaxed">
            <strong>Iron and Oak</strong> was founded in 2019 by{" "}
            <strong>Aleksandr Butowicz</strong>, a visionary leader who
            recognized the need for a new approach to security services. With a
            background rooted in community engagement and non-aggressive
            practices, Aleksandr has shaped Iron and Oak into a company that
            prioritizes safety through trust and collaboration.
          </p>
        </div>

        <div className="text-xl text-slate-700 leading-relaxed">
          <p className="mb-6">
            Under Aleksandr’s leadership, Iron and Oak has become a trusted
            partner for businesses and communities across Seattle. The company
            is known for stepping in where traditional law enforcement resources
            have been stretched thin, providing critical support during times of
            social unrest and public uncertainty. Aleksandr has been an
            outspoken advocate for innovative security solutions that go beyond
            traditional methods, emphasizing protection, respect, and community
            empowerment.
          </p>
          <p>
            Through Iron and Oak, Aleksandr continues to redefine what it means
            to provide security services in the modern world. His commitment to
            evolving practices and maintaining the highest standards of
            professionalism ensures that Iron and Oak is more than just a
            security company—it’s a cornerstone of community safety and trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheOwner;
