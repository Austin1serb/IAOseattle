'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ApplicationPreview from './ApplicationPreview';
import { FormProvider } from '@/context/multistep-form-context';
import VideoSection from '@/components/VideoSection';
import ScrollOnLoad from '@/components/utils/ScrollOnLoad';
import Stepper from './Stepper';
import ApplicationIntroduction from '../../careersComponents/ApplicationIntroduction';

const ApplicationPage = () => {
    const searchParams = useSearchParams();
    const stepParam = searchParams.get('step');
    const step = stepParam ? parseInt(stepParam, 10) : 0; // Default to step 0 for introduction
    const totalSteps = 4; // Update total steps to include the preview
    const stepNames = ['Contact Info', 'Address', 'Upload Resume', 'Preview & Submit'];

    // State to hold the resume file
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    // Logic to determine which component to render based on the step
    const renderStep = () => {
        switch (step) {
            case 0:
                return <ApplicationIntroduction />;
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 setResumeFile={setResumeFile} resumeFile={resumeFile} />;
            case 4:
                return <ApplicationPreview resumeFile={resumeFile} />; // Pass the resume file to the preview step
            default:
                return <ApplicationIntroduction />;
        }
    };

    return (
        <FormProvider>
            <section >
                {step > 0 && (
                    <Stepper currentStep={step} totalSteps={totalSteps} stepNames={stepNames} />
                )}
                {renderStep()}
            </section>
        </FormProvider>
    );
};

export default ApplicationPage;