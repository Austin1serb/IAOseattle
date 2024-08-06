import React from 'react';

interface TeamMember {
    id: string;
    fields: {
        'Preferred Name': string;
        'Primary Team': string;
        'Reports To': string;
        Photo: { url: string }[];
    };
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    return (
        <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg">
            <img
                src={member.fields.Photo?member.fields.Photo[0]?.url: ''}
                alt={member.fields['Preferred Name']}
                className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {member.fields['Preferred Name']}
            </h3>
            <p className="text-gray-600">Team: {member.fields['Primary Team']}</p>
            <p className="text-gray-600">Reports To: {member.fields['Reports To']}</p>
        </div>
    );
};

export default TeamMemberCard;