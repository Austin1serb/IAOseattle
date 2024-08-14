// components/Step2.tsx

import { useFormContext } from '@/context/multistep-form-context';
import { useRouter } from 'next/navigation';

const Step2 = () => {
    const { formData, updateFormData } = useFormContext();
    const router = useRouter();

    const handleNext = () => {
        // Perform any validation if needed
        router.push('/careers/apply?step=3');
    };

    const handlePrev = () => {
        router.push('/careers/apply?step=1');
    };

    return (
        <div>
            <h2>Step 2</h2>
            <input
                type="text"
                value={formData.firstName} // Example, adjust for actual data
                onChange={(e) => updateFormData({ firstName: e.target.value })}
                placeholder="Additional Info"
            />
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Step2;