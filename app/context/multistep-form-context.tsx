import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

export type ThisFormData = {
  firstName: string;
  lastName: string;
  preferredName: string;
  preferredPronouns: string;
  dob: string;
  street: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  heardAboutPosition: string;  // New field
  referralName: string;        // New field
  startDate: string;           // New field
};

interface FormContextProps {
  formData: ThisFormData;
  errors: { [key: string]: string };
  updateFormData: (data: Partial<ThisFormData>) => void;
  validateField: (field: keyof ThisFormData, value: string) => boolean;
  validateForm: () => boolean;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<ThisFormData>({
    firstName: '',
    lastName: '',
    preferredName: '',
    preferredPronouns: '',
    dob: '',
    street: '',
    street2: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    phone: '',
    heardAboutPosition: '',  // Initialize new fields
    referralName: '',
    startDate: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const fieldNames = {
    firstName: 'First Name',
    lastName: 'Last Name',
    preferredName: 'Preferred Name',
    preferredPronouns: 'Preferred Pronouns',
    dob: 'Date of Birth',
    street: 'Street Address',
    city: 'City',
    state: 'State',
    zipCode: 'Zip Code',
    email: 'Email',
    phone: 'Phone Number',
    heardAboutPosition: 'How did you hear about this position?',
    referralName: 'Referral Name',
    startDate: 'Start Date',
  };

  const validateField = (field: keyof ThisFormData, value: string): boolean => {
    value = value.trim(); // Trim leading and trailing spaces before validation

    let isValid = true;
    let error = '';
    let today = new Date();
    let birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    switch (field) {
      case 'firstName':
      case 'lastName':
      case 'city':
      case 'state':
      case 'preferredName':
        if (!value) {
          isValid = false;
          error = `${fieldNames[field]} is required`;
        } else if (!/^[A-Za-z]+$/.test(value)) {
          isValid = false;
          error = `${fieldNames[field]} must contain only letters`;
        }
        break;
      case 'preferredPronouns':
        if (!value) {
          isValid = false;
          error = `${fieldNames[field]} is required`;
        } else if (!/^[A-Za-z\s/]+$/.test(value)) {  // Allow letters, spaces, and forward slash
          isValid = false;
          error = `${fieldNames[field]} can only contain letters, spaces, and the '/' character`;
        }
        break;
      case 'dob':
        if (isNaN(birthDate.getTime())) {
          isValid = false;
          error = 'Please select Date of Birth';
        }
        else if (isNaN(birthDate.getTime()) || age < 18 || (age === 18 && monthDifference < 0)) {
          isValid = false;
          error = 'You must be at least 18 years old';
        }
        break;
      case 'zipCode':
        if (!/^\d{5}(-\d{4})?$/.test(value)) {
          isValid = false;
          error = 'A valid Zip Code is required';
        }
        break;
      case 'street':
        if (!value) {
          isValid = false;
          error = `${fieldNames[field]} is required`;
        }
        break;
      case 'email':
        if (!value) {
          isValid = false;
          error = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          isValid = false;
          error = 'Invalid email address';
        }
        break;
      case 'phone':
        if (!value) {
          isValid = false;
          error = 'Phone number is required';
        } else if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) { // Check for correct format
          isValid = false;
          error = 'Invalid phone number format';
        }
        break;
      case 'heardAboutPosition':
        if (!value) {
          isValid = false;
          error = `${fieldNames[field]} is required`;
        }
        break;
      case 'startDate':
        if (!value) {
          isValid = false;
          error = 'Start date is required';
        }
        break;
      // No validation needed for referralName as it's optional
    }

    if (errors[field] !== error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: error,
      }));
    }

    return isValid;
  };

  const validateForm = (): boolean => {
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      const fieldKey = field as keyof ThisFormData;
      if (!validateField(fieldKey, formData[fieldKey])) {
        isValid = false;
      }
    });

    return isValid;
  };

  const updateFormData = (data: Partial<ThisFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));

    Object.entries(data).forEach(([key, value]) => {
      validateField(key as keyof ThisFormData, value as string);
    });
  };

  const contextValue = useMemo(
    () => ({
      formData,
      errors,
      updateFormData,
      validateField,
      validateForm,
    }),
    [formData, errors]
  );

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};