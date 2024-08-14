import React from 'react';

// Skeleton Component
const TeamMemberCardSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg animate-pulse">
            <div className="w-40 h-40 mb-4 rounded-full bg-gray-300 border-8 border-blue-300 shadow-2xl"></div>
            <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
            <div className="h-4 bg-blue-200 rounded w-28"></div>
        </div>
    );
};

export default TeamMemberCardSkeleton;