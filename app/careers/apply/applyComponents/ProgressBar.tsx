'use client';

import React from 'react';

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
    stepNames?: string[]; // Optional: Names of the steps
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, stepNames }) => {
    const progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <div className="w-full mb-6">
            <div className="flex justify-between items-center mb-2">
                {stepNames && stepNames.length === totalSteps ? (
                    stepNames.map((name, index) => (
                        <div
                            key={index}
                            className={`text-sm font-semibold ${index + 1 <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}
                        >
                            {name}
                        </div>
                    ))
                ) : (
                    Array.from({ length: totalSteps }).map((_, index) => (
                        <div
                            key={index}
                            className={`text-sm font-semibold ${index + 1 <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}
                        >
                            Step {index + 1}
                        </div>
                    ))
                )}
            </div>
            <div className="w-full bg-gray-300 h-4 rounded-lg relative">
                <div
                    className="bg-blue-500 h-4 rounded-lg transition-all duration-500 ease-in-out"
                    style={{ width: `${progressPercentage}%` }}
                >
                    <span className="absolute right-0 top-0 mt-1 mr-2 text-xs text-white">
                        {progressPercentage.toFixed(0)}%
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;