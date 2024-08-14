import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your form data
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
};

// Define the context properties
interface FormContextProps {
  formData: ThisFormData;
  errors: { [key: string]: string };
  updateFormData: (data: Partial<ThisFormData>) => void;
  validateField: (field: keyof ThisFormData, value: string) => boolean;
  validateForm: () => boolean;
}

// Create the context with default values
const FormContext = createContext<FormContextProps | undefined>(undefined);

// Create a context provider component
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
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (field: keyof ThisFormData, value: string): boolean => {
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
        if (!/^[A-Za-z]+$/.test(value)) {
          isValid = false;
          error = `${field} is required.`;
        }
        break;
      case 'dob':
        if (isNaN(birthDate.getTime()) || age < 18 || (age === 18 && monthDifference < 0)) {
          isValid = false;
          error = 'You must be at least 18 years old.';
        }
        break;
      case 'zipCode':
        if (!/^\d{5}(-\d{4})?$/.test(value)) {
          isValid = false;
          error = 'A valid Zip Code is required.';
        }
        break;
      case 'street':
        if (!value.trim()) {
          isValid = false;
          error = 'Street Address is required.';
        }
        break;
  
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: isValid ? '' : error,
    }));

    return isValid;
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    for (const field in formData) {
      const fieldKey = field as keyof ThisFormData;
      if (!validateField(fieldKey, formData[fieldKey])) {
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const updateFormData = (data: Partial<ThisFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    // Validate the updated field
    Object.entries(data).forEach(([key, value]) => validateField(key as keyof ThisFormData, value as string));
  };

  return (
    <FormContext.Provider value={{ formData, errors, updateFormData, validateField, validateForm }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the form context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};