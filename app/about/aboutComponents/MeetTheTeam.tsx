'use client'

import React, { useEffect, useState } from 'react';
import TeamMemberCard from './TeamMemberCard';
import { TeamMember } from './AboutTypes';

// Filter function to apply various filtering criteria
const filterTeamMembers = (members: TeamMember[]): TeamMember[] => {
  return members.filter((member) =>
    // Exclude members from "Training & Recruitment"
    member.fields['Primary Team'] !== 'Training & Recruitment' &&
    // Exclude members without a preferred name (undefined or empty)
    member.fields['Preferred Name'] && member.fields['Preferred Name'].trim() !== ''
  );
};

const MeetTheTeam: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('/api/org');
        if (!response.ok) {
          throw new Error('Failed to fetch team members');
        }
        const data: TeamMember[] = await response.json();

        // Apply filtering
        const filteredMembers = filterTeamMembers(data);
        setTeamMembers(filteredMembers);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <section className="bg-gray-300 py-16">
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