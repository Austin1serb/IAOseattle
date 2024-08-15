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

    return (
        <div className="flex justify-around items-center bg-slate-200">
            <div className="w-3/4 p-8 min-w-[380px]">
                <h2 className="text-2xl font-semibold mb-4">Step 1: Contact Information</h2>
                <ContactForm handleNext={handleNext} />
            </div>
        </div>
    );
};

export default Step1;