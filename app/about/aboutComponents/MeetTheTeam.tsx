// app/about/MeetTheTeam.tsx
import React from 'react';
import TeamMemberCardSkeleton from './TeamMemberCardSkeleton';
import dynamic from 'next/dynamic';
import { fetchAllOrgChartRecords } from '@/components/utils/fetch';




const TeamMemberCard = dynamic(() => import('./TeamMemberCard'), {
  ssr: false,
  loading: () => <TeamMemberCardSkeleton />,
});


// Server Component
const MeetTheTeam = async () => {
  // Fetch data using the utility function
  const airtableApiKey = process.env.AIRTABLE_API_KEY!;
  const baseId = process.env.AIRTABLE_BASE_ID!;
  const tableName = process.env.AIRTABLE_TABLE_ORG!;

  const teamMembers = await fetchAllOrgChartRecords(airtableApiKey, baseId, tableName);

  // Filter out members without a preferred name and not in 'Training & Recruitment'
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.fields['Primary Team'] !== 'Training & Recruitment' &&
      member.fields['Preferred Name'] &&
      member.fields['Preferred Name'].trim() !== ''
  );

  // Slice the filtered members to only include the first 6
  const displayedMembers = filteredMembers.slice(0,6);

  return (
    <section id='team' className="bg-gray-200 py-16">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;