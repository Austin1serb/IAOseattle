// components/Step3.tsx

'use client';

import { useFormContext } from '@/context/multistep-form-context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Step3 = () => {
    const { formData, updateFormData } = useFormContext();
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const handleFinish = () => {
        // Simple validation example
        if (!formData.firstName) {
            setError('Email is required');
            return;
        }

        // Clear error and submit the form
        setError(null);
        // Here, you would typically handle form submission, such as making an API call
        console.log('Form submitted:', formData);
        alert('Application submitted!');

        // Navigate to a confirmation page or reset the form
        router.push('/careers/confirmation');
    };

    const handlePrev = () => {
        router.push('/careers/apply?step=2');
    };

    return (
        <div>
            <h2>Step 3</h2>
            <input
                type="email"
                value={formData.firstName || ''}
                onChange={(e) => updateFormData({ firstName: e.target.value })}
                placeholder="Email"
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleFinish}>Finish</button>
        </div>
    );
};

export default Step3;