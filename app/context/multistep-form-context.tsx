import React, { createContext, useContext, useState, ReactNode } from 'react';

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
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const fieldNames = {
    firstName: 'First Name',
    lastName: 'Last Name',
    dob: 'Date of Birth',
    street: 'Street Address',
    city: 'City',
    state: 'State',
    zipCode: 'Zip Code',
  };


  
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
            if (!value.trim()) {
                isValid = false;
                error = `${fieldNames[field]} is required.`;
            } else if (!/^[A-Za-z]+$/.test(value)) {
                isValid = false;
                error = `${fieldNames[field]} must contain only letters.`;
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
                error = `${fieldNames[field]} is required.`;
            }
            break;
    }

    setTimeout(() => {
        setErrors((prevErrors) => {
            if (prevErrors[field] !== error) {
                return {
                    ...prevErrors,
                    [field]: error,
                };
            }
            return prevErrors;
        });
    }, 0);

    return isValid;
};
  
  

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
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

  return (
    <FormContext.Provider value={{ formData, errors, updateFormData, validateField, validateForm }}>
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