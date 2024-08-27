'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ApplicationPreview from './ApplicationPreview';
import { useFormContext } from '@/context/multistep-form-context';
import Stepper from './Stepper';
import ApplicationIntroduction from './ApplicationIntroduction';

const ApplicationPage = () => {
    const searchParams = useSearchParams();
    const stepParam = searchParams.get('step');
    const step = stepParam ? parseInt(stepParam, 10) : 0; // Default to step 0 for introduction
    const stepNames = ['Contact Info', 'Details','Upload Resume', 'Preview & Submit'];
    const totalSteps = stepNames.length;

    const { formData } = useFormContext(); // Access formData from context
    const router = useRouter();

    // State to hold the resume file
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    // Redirect if necessary
    useEffect(() => {
        // Check if formData is present for the current step
        console.log(formData);
        if (
            (step >= 2 && !formData.firstName
                || step >= 3 && !formData.lastName
                || step >= 4 && !formData.email
                || step >= 5 && !formData.phone
                || step >= 6 && !formData.dob
                || step >= 7 && !formData.city
                || step >= 8 && !formData.state
                || step >= 9 && !formData.zipCode
                || step >= 10 && !formData.street
            )

        ) {
            router.push('/careers/apply?step=1'); // Redirect to step 1 if context is missing
        }
    }, []);

    // Handle beforeunload to warn the user about unsaved changes
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            event.returnValue = ''; // Modern browsers ignore this value, but it's required for the prompt to work.
        };
        // Add the event listener when the component mounts.
        window.addEventListener('beforeunload', handleBeforeUnload);
        // Clean up the event listener when the component unmounts.
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

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

            <section>
                {step > 0 && (
                    <Stepper currentStep={step} totalSteps={totalSteps} stepNames={stepNames} />
                )}
                {renderStep()}
            </section>

    );
};

export default ApplicationPage;