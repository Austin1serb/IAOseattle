import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className=" inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-100 h-4 w-4"></div>
        </div>
    );
};

export default LoadingSpinner;