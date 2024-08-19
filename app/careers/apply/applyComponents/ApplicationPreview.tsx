import React from 'react';
import { ThisFormData, useFormContext } from '@/context/multistep-form-context';
import { useRouter } from 'next/navigation';

interface ApplicationPreviewProps {
    resumeFile: File | null;
}

const ApplicationPreview: React.FC<ApplicationPreviewProps> = ({ resumeFile }) => {
    const { formData } = useFormContext();
    const router = useRouter();


    const handleSubmit = async () => {
        const formDataToSend = new FormData();

        // Use Object.entries to iterate over [key, value] pairs and ensure type safety
        Object.entries(formData).forEach(([key, value]) => {
            if (key !== 'resumeFile' && value) {
                formDataToSend.append(key as keyof ThisFormData, value);
            }
        });

        if (resumeFile) {
            formDataToSend.append('resume', resumeFile);
        }

        // Log the formData being sent
        console.log('Form Data:', Object.fromEntries(formDataToSend.entries()));

        await fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            body: formDataToSend,
        });

        router.push('/careers/apply/success');

    };

    return (
        <div className="flex justify-around items-center bg-slate-200">
            <div className="w-3/4 p-8 min-w-[380px] mt-12">
                <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-24">
                    <h2 className="text-5xl font-semibold my-12 text-center text-blue-600">Preview Your Application</h2>

                    {/* Personal Information Section */}
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold text-gray-700 mb-4 border-b-4 w-full pl-2 border-blue-500">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                            <p>First Name: <span className="text-blue-600">{formData.firstName}</span></p>
                            <p>Last Name: <span className="text-blue-600">{formData.lastName}</span></p>
                            <p>Preferred Name: <span className="text-blue-600">{formData.preferredName}</span></p>
                            <p>Preferred Pronouns: <span className="text-blue-600">{formData.preferredPronouns}</span></p>
                            <p>Date of Birth: <span className="text-blue-600">{formData.dob}</span></p>
                        </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold text-gray-700 mb-4 border-b-4 w-full pl-2 border-blue-500">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                            <p>Email: <span className="text-blue-600">{formData.email}</span></p>
                            <p>Phone: <span className="text-blue-600">{formData.phone}</span></p>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold text-gray-700 mb-4 border-b-4 w-full pl-2 border-blue-500">Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                            <p>Street Address: <span className="text-blue-600">{formData.street}</span></p>
                            <p>Street Address 2: <span className="text-blue-600">{formData.street2 || 'N/A'}</span></p>
                            <p>City: <span className="text-blue-600">{formData.city}</span></p>
                            <p>State: <span className="text-blue-600">{formData.state}</span></p>
                            <p>Zip Code: <span className="text-blue-600">{formData.zipCode}</span></p>
                        </div>
                    </div>

                    {/* Job Information Section */}
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold text-gray-700 mb-4 border-b-4 w-full pl-2 border-blue-500">Job Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                            <p>How did you hear about this position? <span className="text-blue-600">{formData.heardAboutPosition}</span></p>
                            <p>Referral Name: <span className="text-blue-600">{formData.referralName || 'N/A'}</span></p>
                            <p>Start Date: <span className="text-blue-600">{formData.startDate}</span></p>
                        </div>
                    </div>

                    {/* Resume Section */}
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold text-gray-700 mb-4 border-b-4 w-full pl-2 border-blue-500">Resume</h3>
                        <p className="text-gray-600">
                            Resume File: <span className="text-blue-600">{resumeFile?.name || 'No file uploaded'}</span>
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <nav className="flex justify-between mt-8">
                        <button
                            type="button"
                            className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                            onClick={() => window.history.back()}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ApplicationPreview;