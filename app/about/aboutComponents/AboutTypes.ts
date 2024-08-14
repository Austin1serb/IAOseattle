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
