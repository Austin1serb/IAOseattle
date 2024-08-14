import React from 'react';

interface StepperProps {
    currentStep: number;
    totalSteps: number;
    stepNames?: string[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps, stepNames }) => {
    return (
        <div className="flex justify-between items-center mb-6 w-full mx-auto px-12">
            {Array.from({ length: totalSteps }).map((_, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;

                return (
                    <div key={index} className="flex flex-col items-center flex-1">
                        <div className="flex items-center w-full">
                            {/* Line before circle */}
                            {index > 0 && (
                                <div
                                    className={`h-0.5 flex-grow transition-colors duration-300 ${isCompleted ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                ></div>
                            )}
                            <div className={`w-24 rounded-full border-t-2 border-x-2  ${isCompleted ? 'border-blue-600' : 'border-gray-300'} flex-col flex items-center justify-center pt-6`}>
                                {/* Step circle or check icon */}
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mx-auto transition-colors duration-300 
                                    ${isCompleted ? 'bg-blue-600 text-white' : isActive ? 'bg-transparent text-blue-600' : 'bg-transparent text-gray-500'} 
                                    ${isActive || isCompleted ? 'border-blue-600' : 'border-gray-300'}`}
                                >
                                    {isCompleted ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                {/* Step name */}
                                {stepNames && stepNames[index] && (
                                    <div className={`mt-2 w-full text-nowrap bg-white px-1 text-sm text-center ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                                        {stepNames[index]}
                                    </div>
                                )}
                            </div>
                            {/* Line after circle */}
                            {index < totalSteps - 1 && (
                                <div
                                    className={`h-0.5 flex-grow transition-colors duration-300 ${isCompleted ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                ></div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Stepper;