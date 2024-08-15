'use client';
import React from 'react';
import CustomTextField from './CustomTextField';
import CustomDatePicker from './CustomDatePicker';
import { ThisFormData, useFormContext } from '@/context/multistep-form-context';

interface ContactFormProps {
    handleNext: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ handleNext }) => {
    const { formData, errors, updateFormData, validateField, validateForm } = useFormContext();

    const handleChange = (field: keyof ThisFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        updateFormData({ [field]: value });
        validateField(field, value); // Validate field on change
        
    };

    return (
        <form className="w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Contact Information</h2>
            <p className="text-gray-500">
                Fields Marked with <span className="text-error">*</span> are required
            </p>
            {/* Personal Information Section */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomTextField
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleChange('firstName')}
                    autoComplete="given-name"
                    validate={() => validateField('firstName', formData.firstName)}
                    errorMessage={errors.firstName}
                    required={true}
                />
                {/* Repeat the similar pattern for other fields */}
            </div>
            <button
                type="button"
                onClick={handleNext}
                className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
            >
                Next
            </button>
        </form>
    );
};

export default ContactForm;