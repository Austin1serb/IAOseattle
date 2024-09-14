import React from 'react';
import IncidentWidget from './IncidentWidget';


// Define the interface for the "Created By" field
export interface CreatedBy {
  id: string;
  email: string;
  name: string;
}

// Define the interface for the "fields" object in each record
export interface AirtableFields {
  "Report #": string;
  "Client Assignment": string;
  "Incident Type": string;
  "Vector": string;
  "Work Email": string;
  "License Number": number;
  "Incident Date": string;
  "Next-Line Transports": string;
  "Injuries": string;
  "BWC Evidence": string;
  "Narrative": string;
  "First Name": string;
  "Last Name": string;
  "Incident Time": string;
  "Evidence Photo Link"?: string; // Optional field
  "Officer Signature"?: string;   // Optional field
  "Created By": CreatedBy;
  // Add any additional fields as needed
  "Narcan Administered?"?: string; // Include if used in your code
}

// Define the interface for each record
export interface AirtableRecord {
  id: string;
  createdTime: string;
  fields: AirtableFields;
}

// Define the type for the entire response
export type AirtableResponse = AirtableRecord[];



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