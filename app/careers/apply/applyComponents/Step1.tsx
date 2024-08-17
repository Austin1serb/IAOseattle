import React from 'react';
import { useFormContext } from '@/context/multistep-form-context';
import { useRouter } from 'next/navigation';
import ContactForm from './ContactForm';

const Step1 = () => {
    const { validateForm } = useFormContext();
    const router = useRouter();

    const handleNext = () => {
        console.log('handleNext called');
        if (validateForm()) {
            console.log('Form is valid, navigating to next step');
            router.push('/careers/apply?step=2');
        } else {
            console.log('Form is invalid, staying on the current step');
        }
    };

    const handleBack = () => {
        console.log('handleBack called, navigating to the previous step');
        router.back(); // Go back to the previous page or step
    };

    return (
        <div className="flex justify-around items-center bg-slate-200">
            <div className="w-3/4 p-8 min-w-[380px] mt-12">
                <ContactForm handleNext={handleNext} handleBack={handleBack} />

            </div>
        </div>
    );
};

export default Step1;