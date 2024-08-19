'use client';
import React from 'react';
import CustomTextField from './CustomTextField';
import CustomDatePicker from './CustomDatePicker';
import { ThisFormData, useFormContext } from '@/context/multistep-form-context';

interface ContactFormProps {
    handleNext: () => void;
    handleBack: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ handleNext, handleBack }) => {
    const { formData, errors, updateFormData, validateField } = useFormContext();

    const handleChange = (field: keyof ThisFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        if (field === 'phone') {
            // Remove all non-numeric characters
            value = value.replace(/\D/g, '');

            // Format the phone number as 333-333-3333
            if (value.length > 0) {
                value = value.substring(0, 3) + (value.length > 3 ? '-' : '') +
                    value.substring(3, 6) + (value.length > 6 ? '-' : '') +
                    value.substring(6, 10);
            }
        }

        updateFormData({ [field]: value });
        validateField(field, value); // Validate field on change
    };

    return (
        <form className="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-24">
            <h2 className="text-5xl font-semibold mb-8 text-center text-blue-600">
                Personal Details

            </h2>
            <p className="text-gray-600 text-center mb-6">
                Fields marked with <span className="text-error">*</span> are required
            </p>

            {/* Personal Information Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CustomTextField
                        label="First Name"
                        value={formData.firstName}
                        onChange={handleChange('firstName')}
                        autoComplete="given-name"
                        validate={() => validateField('firstName', formData.firstName)}
                        errorMessage={errors.firstName}
                        required={true}
                        type="text"
                        className='capitalize'
                    />
                    <CustomTextField
                        label="Last Name"
                        value={formData.lastName}
                        onChange={handleChange('lastName')}
                        autoComplete="family-name"
                        validate={() => validateField('lastName', formData.lastName)}
                        errorMessage={errors.lastName}
                        required={true}
                        type="text"
                        className='capitalize'
                    />
                    <CustomTextField
                        label="Preferred Name"
                        value={formData.preferredName}
                        onChange={handleChange('preferredName')}
                        autoComplete="nickname"
                        validate={() => validateField('preferredName', formData.preferredName)}
                        errorMessage={errors.preferredName}
                        required={true}
                        type="text"
                        className='capitalize'
                    />
                    <CustomTextField
                        label="Preferred Pronouns"
                        value={formData.preferredPronouns}
                        onChange={handleChange('preferredPronouns')}
                        autoComplete="off"
                        validate={() => validateField('preferredPronouns', formData.preferredPronouns)}
                        errorMessage={errors.preferredPronouns}
                        required={true}
                        type="text"
                    />
                    <CustomDatePicker
                        label="Date of Birth"
                        value={formData.dob}
                        onChange={handleChange('dob')}
                        autoComplete="bday"
                        errorMessage={errors.dob}
                        validate={() => validateField('dob', formData.dob)}

                    />
                </div>
            </div>

            {/* Contact Information Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CustomTextField
                        label="Email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        autoComplete="email"
                        validate={() => validateField('email', formData.email)}
                        errorMessage={errors.email}
                        required={true}
                        type="email"
                    />
                    <CustomTextField
                        label="Phone"
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        autoComplete="tel"
                        validate={() => validateField('phone', formData.phone)}
                        errorMessage={errors.phone}
                        required={true}
                        type="phone"
                    />
                </div>
            </div>

            {/* Address Details Section */}
            <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Address Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CustomTextField
                        label="Street Address"
                        value={formData.street}
                        onChange={handleChange('street')}
                        autoComplete="address-line1"
                        validate={() => validateField('street', formData.street)}
                        errorMessage={errors.street}
                        required={true}
                        type="text"
                    />
                    <CustomTextField
                        label="Street Address 2"
                        value={formData.street2}
                        onChange={handleChange('street2')}
                        autoComplete="address-line2"
                        errorMessage={errors.street2}
                        type="text"
                    />
                    <CustomTextField
                        label="City"
                        value={formData.city}
                        onChange={handleChange('city')}
                        autoComplete="address-level2"
                        validate={() => validateField('city', formData.city)}
                        errorMessage={errors.city}
                        required={true}
                        type="text"
                        className='capitalize'
                    />
                    <CustomTextField
                        label="State"
                        value={formData.state}
                        onChange={handleChange('state')}
                        autoComplete="address-level1"
                        validate={() => validateField('state', formData.state)}
                        errorMessage={errors.state}
                        required={true}
                        type="text"
                        className='uppercase'
                    />
                    <CustomTextField
                        label="Zip Code"
                        value={formData.zipCode}
                        onChange={handleChange('zipCode')}
                        autoComplete="postal-code"
                        validate={() => validateField('zipCode', formData.zipCode)}
                        errorMessage={errors.zipCode}
                        required={true}
                        type="text"
                    />
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
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
            </div>
        </form>
    );
};

export default ContactForm;