// AboutTypes.ts



export interface TeamMember {
    id: string;
    fields: {
        'Preferred Name': string;
        'Primary Team': string;
        'Reports To': string;
        'Certified Trainer Endorsement': string;
        Photo?: { url: string }[];
    };
}


// Define the interface for the "Created By" field
interface CreatedBy {
    id: string;
    email: string;
    name: string;
  }
  
  // Define the interface for the "fields" object in each record
  interface AirtableFields {
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
  interface AirtableRecord {
    id: string;
    createdTime: string;
    fields: AirtableFields;
  }
  
  // Define the type for the entire response
  type AirtableResponse = AirtableRecord[];
  