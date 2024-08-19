'use client';
import React, { useState } from 'react';
import CustomTextField from './CustomTextField';
import CustomDatePicker from './CustomDatePicker';
import { ThisFormData, useFormContext } from '@/context/multistep-form-context';
import { useRouter } from 'next/navigation';
import Snackbar from '@/components/SnackBar';

const Step2: React.FC = () => {
    const { formData, errors, updateFormData, validateField, validateForm } = useFormContext();
    const router = useRouter();
    const [snackbarOpen, setSnackbarOpen] = useState(false);


    const handleNext = () => {
        console.log('handleNext called');
        if (validateForm()) {
            console.log('Form is valid, navigating to next step');
            router.push('/careers/apply?step=3');
        } else {
            setSnackbarOpen(true);
            console.log('Form is invalid, staying on the current step');
        }
    };

    const handleBack = () => {
        console.log('handleBack called, navigating to the previous step');
        router.back(); // Go back to the previous page or step
    };

    const handleChange = (field: keyof ThisFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        updateFormData({ [field]: value });
        validateField(field, value); // Validate field on change
    };

    return (
        <div className="flex justify-around items-center bg-slate-200">
            <div className="w-3/4 p-8 min-w-[380px] mt-12">
                <form className="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-24">
                    <h2 className="text-5xl font-semibold mb-8 text-center text-blue-600">
                        Job Application - Step 2
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Fields marked with <span className="text-error">*</span> are required
                    </p>
                    <Snackbar
                        message="Please correct the errors before proceeding."
                        open={snackbarOpen}
                        onClose={() => setSnackbarOpen(false)}

                    />
                    {/* How did you hear about this position? */}
                    <div className="mb-8">
                        <CustomTextField
                            label="How did you hear about this position?"
                            value={formData.heardAboutPosition}
                            onChange={handleChange('heardAboutPosition')}
                            autoComplete="off"
                            validate={() => validateField('heardAboutPosition', formData.heardAboutPosition)}
                            errorMessage={errors.heardAboutPosition}
                            required={true}
                            type="text"
                            helperText="e.g., Job board, Referral, Website, etc."
                        />
                    </div>

                    {/* Referral Name */}
                    <div className="mb-8">
                        <CustomTextField
                            label="If you were referred by an I&O employee, please put their name here."
                            value={formData.referralName}
                            onChange={handleChange('referralName')}
                            autoComplete="off"
                            validate={() => true} // Optional, no validation needed
                            errorMessage={errors.referralName}
                            required={false}
                            type="text"
                            helperText="Leave blank if not referred by an employee."
                        />
                    </div>

                    {/* Start Date */}
                    <div className="mb-8">
                        <CustomDatePicker
                            label="What date can you start work?"
                            value={formData.startDate}
                            onChange={handleChange('startDate')}
                            autoComplete="off"
                            errorMessage={errors.startDate}
                            validate={() => validateField('startDate', formData.startDate)}
                            required={true}

                        />
                    </div>

                    {/* Navigation Buttons */}
                    <nav className="flex justify-between mt-8">
                        <button
                            type="button"
                            onClick={handleBack}
                            className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={handleNext}
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300"
                        >
                            Next
                        </button>
                    </nav>
                </form>
            </div>
        </div>
    );
};

export default Step2;