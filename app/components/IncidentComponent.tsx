import React from "react";
import IncidentWidget from "./IncidentWidget";

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
  Vector: string;
  "Work Email": string;
  "License Number": number;
  "Incident Date": string;
  "Next-Line Transports": string;
  Injuries: string;
  "BWC Evidence": string;
  Narrative: string;
  "First Name": string;
  "Last Name": string;
  "Incident Time": string;
  "Evidence Photo Link"?: string; // Optional field
  "Officer Signature"?: string; // Optional field
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
    <section className="w-full h-full flex justify-around flex-col-reverse items-center md:flex-row sm:px-4 py-20 bg-slate-800">
      <div className="w-full flex items-center justify-center">
        <div className="max-w-lg text-center md:text-left px-2">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Monthly Incident Overview
          </h2>
          <p className="text-lg text-slate-200 mb-6">
            Here’s a look at the incidents our team has successfully managed
            this month.
          </p>
        </div>
      </div>
      <div className="order-first md:order-last h-full w-full">
        <IncidentWidget />
      </div>
    </section>
  );
};

export default IncidentComponent;
