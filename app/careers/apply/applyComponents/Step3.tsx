import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
interface Step3Props {
    resumeFile: File | null;
    setResumeFile: React.Dispatch<React.SetStateAction<File | null>>;
}
const Step3: React.FC<Step3Props> = ({ resumeFile, setResumeFile }) => {
    const [uploadError, setUploadError] = useState<string | null>(null);
    const router = useRouter();
    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes

    const allowedFileTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/rtf',
        'text/plain'
    ];

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (!allowedFileTypes.includes(file.type)) {
                setUploadError('Invalid file type. Please upload a PDF, DOC, DOCX, RTF, or TXT file.');
                setResumeFile(null);
                return;
            }

            if (file.size > MAX_FILE_SIZE) {
                setUploadError('File size exceeds 2MB. Please upload a smaller file.');
                setResumeFile(null);
                return;
            }

            setResumeFile(file);
            setUploadError(null);
        }
    };

    return (
        <div className="flex justify-around items-center bg-slate-200">
            <div className="w-3/4 p-8 min-w-[380px] mt-12">
                <form className="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-24">
                    <h2 className="text-5xl font-semibold mb-8 text-center text-blue-600">
                        Upload Your Resume
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        Please upload your resume to finish your application.
                    </p>

                    <div className="mb-4  w-full flex items-center justify-center">
                        <div>
                            <input
                                type="file"
                                id="resume-upload"
                                accept=".pdf,.doc,.docx,.rtf,.txt"
                                onChange={handleFileUpload}
                                className="hidden"
                            />

                            <label
                                htmlFor="resume-upload"
                                className="border-blue-600 border-2 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-200 transition-colors duration-300 cursor-pointer"
                            >
                                Choose File
                            </label>
                        </div>
                    </div>

                    {resumeFile && (
                        <p className="text-center text-sm text-gray-600 mt-2">
                            Selected file: <span className="font-medium text-blue-600">{resumeFile.name}</span>
                        </p>
                    )}

                    {uploadError && (
                        <p className="text-center text-sm text-red-600 mt-2">
                            {uploadError}
                        </p>
                    )}

                    <nav className="flex justify-between mt-8">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={() => router.push('/careers/apply?step=4')}
                            className={`py-3 px-6 rounded-lg transition-colors duration-300 ${resumeFile ? 'bg-blue-600 text-white hover:bg-blue-800' : 'bg-blue-300 text-white cursor-not-allowed'}`}
                            disabled={!resumeFile}
                        >
                            Next
                        </button>
                    </nav>
                </form>
            </div>
        </div>
    );
};

export default Step3;