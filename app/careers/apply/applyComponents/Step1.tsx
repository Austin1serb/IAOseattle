import React, { useState } from 'react';
import { useFormContext } from '@/context/multistep-form-context';
import { useRouter } from 'next/navigation';
import ContactForm from './ContactForm';
import Snackbar from '@/components/SnackBar';

const Step1 = () => {
    const { validateStep, errors } = useFormContext();
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const router = useRouter();

    const handleNext = () => {
        if (validateStep(1)) {
            // If form is valid, proceed to the next step
            router.push('/careers/apply?step=2');
            console.log(errors)
        } else {
            // If form is invalid, show the Snackbar
            console.log(errors)
            setSnackbarOpen(true);
        }
    };


    const handleBack = () => {
        console.log('handleBack called, navigating to the previous step');
        router.back(); // Go back to the previous page or step
    };

    return (
        <div className="flex justify-around items-center bg-slate-200">
            <div className="w-3/4 p-8 min-w-[380px] my-12">
                <ContactForm handleNext={handleNext} handleBack={handleBack} />

            </div>
            <Snackbar
                message="Please correct the errors before proceeding."
                open={snackbarOpen}
                onClose={() => setSnackbarOpen(false)}

            />
        </div>
    );
};

export default Step1;