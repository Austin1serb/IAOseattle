import Link from 'next/link';
import React from 'react';
import IncidentWidget from './IncidentWidget';

interface IncidentComponentProps {
  propName?: string;
}

const IncidentComponent: React.FC<IncidentComponentProps> = ({ propName }) => {
  return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16 bg-slate-800">
          <div className="order-last md:order-first flex items-center justify-center">
            <div className="max-w-sm text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">
                Monthly Incident Overview
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Discover the incidents our team has managed this month.
              </p>
              <Link
                href="/media"
                className="inline-block px-6 py-3 font-bold text-lg bg-blue-600 opacity-90 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="order-first md:order-last max-h-40">
            <IncidentWidget />
          </div>
        </section>

  );
};

export default IncidentComponent;