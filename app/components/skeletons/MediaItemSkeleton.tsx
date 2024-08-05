import React from 'react';

const MediaItemSkeleton: React.FC = () => {
    return (
        <div
            className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col justify-between items-center w-full h-[525px] max-w-[425px] min-w-350px animate-pulse"
        >
            <div className="relative w-full pb-[56.25%] bg-gray-800" />
            <div className="p-4 w-full flex-1">
                <div className="h-6 bg-gray-300 rounded mb-2 w-3/4" />
                <div className="h-6 bg-gray-300 rounded mb-4 w-3/4" />
                <div className="h-4 bg-gray-300 rounded w-full mb-4" />
                <div className="h-4 bg-gray-300 rounded w-full mb-4" />
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-4" />
            </div>
            <div className="flex w-full flex-col justify-between">
                <div className="mb-4 h-4 bg-blue-200 rounded w-1/3 ml-4" />
                <div className="p-4 bg-gray-300 text-sm w-full text-center">
                    <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default MediaItemSkeleton;