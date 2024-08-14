import React, { useCallback, useState } from 'react';
import CustomTextField from './CustomTextField';
import CustomDatePicker from './CustomDatePicker';
import { ThisFormData } from '@/context/multistep-form-context';


interface ContactFormProps {
    formData: ThisFormData
    updateFormData: (data: Partial<ThisFormData>) => void;
    validateFrom: any;
    errors: { [key: string]: string };
    handleNext: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, updateFormData, errors, handleNext }) => {

    //const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    //    updateFormData({ [field]: e.target.value });
    //};

    const validateName = useCallback((value: string) => /^[A-Za-z]+$/.test(value), []);
    const validateDate = useCallback((value: string) => !isNaN(Date.parse(value)), []);

    const validateZipCode = useCallback((value: string) => /^\d{5}(-\d{4})?$/.test(value), []);
    const validateAddress = useCallback((value: string) => value.trim() !== '', []);

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({ ...formData, [field]: e.target.value });
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
                    validate={validateName}
                    errorMessage="Please enter a valid first name."
                />

                <CustomTextField
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleChange('lastName')}
                    autoComplete="family-name"
                    validate={validateName}
                    errorMessage="Please enter a valid last name."
                />


                <CustomTextField
                    label="Preferred Name"
                    value={formData.preferredName}
                    onChange={handleChange('preferredName')}
                    validate={validateName}
                    autoComplete="nickname"
                    errorMessage='Please enter a preferred name'
                />

                <CustomTextField
                    label="Preferred Pronouns"
                    value={formData.preferredPronouns}
                    onChange={handleChange('preferredPronouns')}
                    autoComplete="off"
                    validate={validateName}
                    errorMessage='Please enter preferred pronouns'
                />

                <CustomDatePicker
                    label="Date of Birth"
                    value={formData.dob}
                    onChange={handleChange('dob')}
                    autoComplete="bday"
                    errorMessage="Please enter a valid date of birth."
                    type="date"
                    validate={validateDate}
                />
            </div>

            {/* Address Information Section */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomTextField
                    label="Street Address"
                    value={formData.street}
                    onChange={handleChange('street')}
                    autoComplete="street-address"
                    validate={validateAddress}
                    errorMessage="Please enter a street address."
                />

                <CustomTextField
                    label="Street Address 2"
                    value={formData.street2}
                    onChange={handleChange('street2')}
                    autoComplete="address-line2"
                />

                <CustomTextField
                    label="City"
                    value={formData.city}
                    onChange={handleChange('city')}
                    autoComplete="address-level2"
                    validate={validateName}
                    errorMessage="Please enter a valid city name."
                />

                <CustomTextField
                    label="State"
                    value={formData.state}
                    onChange={handleChange('state')}
                    autoComplete="address-level1"
                    validate={validateName}
                    errorMessage="Please enter a valid state name."
                />

                <CustomTextField
                    label="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange('zipCode')}
                    autoComplete="postal-code"
                    validate={validateZipCode}
                    errorMessage="Please enter a valid zip code."
                />
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