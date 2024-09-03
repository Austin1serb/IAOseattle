import Link from 'next/link';
import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section className="bg-slate-100 py-16">
      <div className="max-w-5xl mx-auto px-8">
        <p className="text-xl text-slate-700 leading-relaxed mb-6">
          At Iron & Oak, our journey began with a simple yet profound vision: to transform the security industry by prioritizing community engagement and non-aggressive practices. Founded in 2019, we recognized a need for a new approach—one that emphasizes collaboration, empathy, and respect.
        </p>
        <p className="text-xl text-slate-700 leading-relaxed mb-6">
          From our humble beginnings in Seattle, we have grown into a trusted partner for businesses and communities across the greater Seattle Area. Our innovative methods, grounded in building trust and fostering relationships, have set us apart in the industry. By focusing on protection, not policing, we aim to create safe, vibrant environments where everyone can thrive.
        </p>
        <p className="text-xl text-slate-700 leading-relaxed mb-6">
          Our team is composed of highly trained professionals who are passionate about making a positive impact. We believe that security should empower communities, and we are committed to evolving our practices to meet the ever-changing needs of our clients and society.
        </p>
        <p className="text-xl text-slate-700 leading-relaxed">
          Join us as we continue to innovate and redefine what it means to provide security services. <strong className="text-2xl font-bold text-shadow-white">Together, we can build a future</strong> where communities feel safe, respected, and valued.
        </p>
        <div className="flex justify-center mt-8">
          <Link href="/careers" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-300">
            Explore Careers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;