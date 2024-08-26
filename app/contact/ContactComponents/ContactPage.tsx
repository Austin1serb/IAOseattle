import React from 'react';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import SocialMediaLinks from './SocialMediaLinks';
import FAQSection from './FAQSection';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <main className="w-full min-w-350px bg-slate-200">
            {/* Hero Section */}
            <section className=" text-center pt-16">
                <h1 className="text-7xl font-bold mb-4">Get in <span className='text-blue-600'>Touch</span></h1>
                <p className="text-lg">We&apos;d love to hear from you! Reach out with any questions, concerns, or feedback.</p>
            </section>

            {/* Contact Form */}
            <ContactForm />

            {/* Contact Details and Social Media Links */}
            <div className='flex flex-col md:flex-row justify-around items-center md:items-start bg-white py-16'>
                <ContactDetails />
                <SocialMediaLinks />
            </div>

            {/* FAQ Section */}
            <FAQSection />

            
        </main>
    );
};

export default ContactPage;