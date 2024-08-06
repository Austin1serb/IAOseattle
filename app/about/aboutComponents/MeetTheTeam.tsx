'use client'
import React, { useEffect, useState } from 'react';
import TeamMemberCard from './TeamMemberCard'; // Import the TeamMemberCard component

interface TeamMember {
  id: string;
  fields: {
    'Preferred Name': string;
    'Primary Team': string;
    'Reports To': string;
    Photo: { url: string }[];
  };
}

const MeetTheTeam: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('/api/org');
        if (!response.ok) {
          throw new Error('Failed to fetch team members');
        }
        const data = await response.json();
        setTeamMembers(data);
        console.log(teamMembers)
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;