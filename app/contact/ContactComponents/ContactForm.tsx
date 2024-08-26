'use client'
import React, { useState } from 'react';
import CustomTextField from '@/components/CustomTextField';
import CustomTextArea from '@/components/CustomTextArea';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateField = (field: string, value: string): boolean => {
        let error = '';
        if (!value) {
            error = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
            return false;
        }
        setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isNameValid = validateField('name', name);
        const isEmailValid = validateField('email', email);
        const isSubjectValid = validateField('subject', subject);
        const isMessageValid = validateField('message', message);

        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Handle form submission logic
        }
    };

    return (
        <section className="py-16">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-center">Contact Form</h2>
                <form className="space-y-6 " onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CustomTextField
                            label="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                            required
                            validate={() => validateField('name', name)}
                            errorMessage={errors.name}
                        />
                        <CustomTextField
                            label="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                            validate={() => validateField('email', email)}
                            errorMessage={errors.email}
                            type="email"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CustomTextField
                            label="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            autoComplete="tel"
                            validate={() => true} // No validation for phone number
                            errorMessage={errors.phone}
                            type="tel"
                        />

                    </div>
                    <CustomTextField
                        label="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        autoComplete="off"
                        required
                        validate={() => validateField('subject', subject)}
                        errorMessage={errors.subject}
                    />
                    <div className='pb-12'>
                        <CustomTextArea
                            label="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            autoComplete="off"
                            required
                            validate={() => validateField('message', message)}
                            errorMessage={errors.message}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-md hover:bg-blue-800 transition-colors duration-300 ">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;