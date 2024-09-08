import React from 'react';
import IncidentWidget from './IncidentWidget';

const IncidentComponent: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16 bg-slate-800">
      <div className="order-last md:order-first flex items-center justify-center">
        <div className="max-w-sm text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Monthly Incident Overview
          </h2>
          <p className="text-lg text-slate-200 mb-6">
            Here’s a look at the incidents our team has successfully managed this month.
          </p>
        </div>
      </div>
      <div className="order-first md:order-last max-h-96 p-8">
        <IncidentWidget />
      </div>
    </section>
  );
};

export default IncidentComponent;