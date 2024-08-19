import React from 'react';

interface StepperProps {
    currentStep: number;
    totalSteps: number;
    stepNames?: string[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps, stepNames }) => {

    // Helper function to determine the class names based on the step's state
    const getStepClassNames = (isCompleted: boolean, isActive: boolean) => {
        if (isCompleted) {
            return 'bg-blue-600 text-white';
        } else if (isActive) {
            return 'bg-transparent text-blue-600';
        } else {
            return 'bg-transparent text-gray-500';
        }
    };

    return (
        <div className="flex h-28  bg-slate-200 justify-between items-center w-full mx-auto sm:px-12 shadow-lg z-10">
            {Array.from({ length: totalSteps }).map((_, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;
                return (
                    <div key={index + '-stepper'} className="flex flex-col items-center flex-1">
                        <div className="flex items-center w-full">
                            {/* Line before circle */}
                            {index > 0 && (
                                <div
                                    className={`h-0.5 flex-grow transition-colors duration-300 ${isCompleted ? 'bg-blue-600' : 'bg-gray-300'}`}
                                ></div>
                            )}
                            <div className={` sm:w-24 rounded-full border:none sm:border-t-2 sm:border-x-2 ${isCompleted ? 'border-blue-600' : 'border-gray-300'} flex-col flex items-center justify-center pt-6`}>
                                {/* Step circle or check icon */}
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 mx-auto transition-colors duration-300 
                                    ${getStepClassNames(isCompleted, isActive)} 
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
                                {stepNames?.[index] && (
                                    <div className={`mt-2 w-fit min-w-20 text-nowrap bg-white px-1 text-sm text-center ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                                        <span className="block sm:hidden">{stepNames[index].split(' ')[0]}</span>
                                        <span className="hidden sm:block">{stepNames[index]}</span>
                                    </div>
                                )}
                            </div>
                            {/* Line after circle */}
                            {index < totalSteps - 1 && (
                                <div
                                    className={`h-0.5 flex-grow transition-colors duration-300 ${isCompleted ? 'bg-blue-600' : 'bg-gray-300'}`}
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