import React from 'react';
import { TeamMember } from './AboutTypes';
import Image from 'next/image';



const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    //use effect to console log member 
    React.useEffect(() => {
        console.log(member);
    }, []);


    const photoUrl = member.fields.Photo?.[0]?.url || 'https://i.imgur.com/AWrV4Ct.png';

    return (
        <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg ">
            <Image
                width={512} height={512}
                quality={100}
                src={photoUrl}
                alt={member.fields['Preferred Name']}
                className="w-40 h-40 rounded-full object-cover mb-4 border-8 border-blue-500 shadow-2xl"
                loading='lazy'
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {member.fields['Preferred Name']}
            </h3>
            <p className="text-black">{member.fields['Primary Team']}</p>
        </div>
    );
};

export default TeamMemberCard;