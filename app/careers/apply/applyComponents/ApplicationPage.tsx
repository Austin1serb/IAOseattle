'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { FormProvider, useFormContext } from '@/context/multistep-form-context';
import VideoSection from '@/components/VideoSection';
import ScrollOnLoad from '@/components/utils/ScrollOnLoad';
import Stepper from './Stepper';
import ApplicationIntroduction from '../../careersComponents/ApplicationIntroduction';

const ApplicationPage = () => {
    const searchParams = useSearchParams();
    const stepParam = searchParams.get('step');
    const step = stepParam ? parseInt(stepParam, 10) : 0; // Default to step 0 for introduction
    const totalSteps = 4; // Total steps, including the introduction
    const stepNames = ['Introduction', 'Contact Info', 'Address', 'Complete'];

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
                return <Step3 />;
            default:
                return <ApplicationIntroduction />;
        }
    };

    return (
        <main className="w-full">
            <FormProvider>
                <header>
                    <VideoSection videoSrc={'/seattleHome.webm'} text='Careers' />
                    <ScrollOnLoad scrollPosition={150} />
                </header>
                <Suspense fallback={<div>Loading...</div>}>
                    {step > 0 && (
                        <Stepper currentStep={step} totalSteps={totalSteps} stepNames={stepNames} />
                    )}
                    <section>{renderStep()}</section>
                </Suspense>
            </FormProvider>
        </main>
    );
};

export default ApplicationPage;