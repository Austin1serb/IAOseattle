import React, { useState } from 'react';
import { useFormContext } from '@/context/multistep-form-context';
import { useRouter } from 'next/navigation';
import ContactForm from './ContactForm';

const Step1 = () => {
    const { formData, updateFormData } = useFormContext();
    const router = useRouter();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});



    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        // Validate First Name
        if (!formData.firstName || !/^[A-Za-z]+$/.test(formData.firstName)) {
            newErrors.firstName = 'First Name is required.';
        }

        // Validate Last Name
        if (!formData.lastName || !/^[A-Za-z]+$/.test(formData.lastName)) {
            newErrors.lastName = 'Last Name is required.';
        }

        // Validate Date of Birth and check if the applicant is at least 18 years old
        const today = new Date();
        const birthDate = new Date(formData.dob);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (!formData.dob || isNaN(birthDate.getTime())) {
            newErrors.dob = 'A valid Date of Birth is required.';
        } else if (age < 18 || (age === 18 && monthDifference < 0)) {
            newErrors.dob = 'You must be at least 18 years old.';
        }

        // Validate Street Address
        if (!formData.street || !formData.street.trim()) {
            newErrors.street = 'Street Address is required.';
        }

        // Validate City
        if (!formData.city || !formData.city.trim()) {
            newErrors.city = 'City is required.';
        }

        // Validate State
        if (!formData.state || !formData.state.trim()) {
            newErrors.state = 'State is required.';
        }

        // Validate Zip Code
        if (!formData.zipCode || !/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
            newErrors.zipCode = 'A valid Zip Code is required.';
        }

        setErrors(newErrors);
        return newErrors;
    }

    const handleNext = () => {
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            router.push('/careers/apply?step=2');
        } else {
            console.log(validationErrors); // You can see the errors in the console here
        }
    };
    return (
        <div className="flex justify-around items-center bg-slate-200">
            <div className="w-3/4 p-8 min-w-[380px]">
                <h2 className="text-2xl font-semibold mb-4">Step 1: Contact Information</h2>
                <ContactForm
                    formData={formData}
                    updateFormData={updateFormData}
                    errors={errors}
                    handleNext={handleNext}
                    validateFrom={validateForm}
                />
            </div>
        </div>
    );
};

export default Step1;