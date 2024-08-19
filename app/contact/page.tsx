import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <main className="w-full min-w-350px bg-slate-100">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white text-center py-16">
                <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
                <p className="text-lg">We'd love to hear from you! Reach out with any questions, concerns, or feedback.</p>
            </section>

            {/* Contact Form Section */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Contact Us</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" required />
                            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="tel" placeholder="Phone Number" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
                            <input type="text" placeholder="Subject" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" required />
                        </div>
                        <textarea placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" rows={5} required></textarea>
                        <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Location and Contact Details Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-600">Our Location</h2>
                    <p className="text-lg text-gray-600 mb-4">1234 Iron & Oak St, Seattle, WA 98101</p>
                    <p className="text-lg text-gray-600 mb-4">Email: contact@ironandoak.com</p>
                    <p className="text-lg text-gray-600 mb-8">Phone: (123) 456-7890</p>
                    {/* Embed Google Map */}
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed/v1/place?q=Seattle,+WA,+USA&key=YOUR_GOOGLE_MAPS_API_KEY"
                            allowFullScreen
                            title="Location Map"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Social Media Links Section */}
            <section className="py-16 bg-white text-center">
                <h2 className="text-3xl font-semibold mb-6 text-blue-600">Connect with Us</h2>
                <div className="flex justify-center space-x-6">
                    <Link  className="text-blue-600 hover:text-blue-800 transition-colors duration-300" href="https://facebook.com">
                
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10s-10 4.478-10 10c0 4.992 3.656 9.128 8.438 9.876v-6.993h-2.54v-2.883h2.54v-2.182c0-2.509 1.492-3.889 3.771-3.889 1.094 0 2.239.195 2.239.195v2.46h-1.26c-1.242 0-1.628.771-1.628 1.562v1.854h2.773l-.443 2.883h-2.33v6.993c4.782-.748 8.438-4.884 8.438-9.876z"/></svg>
                    
                    </Link>
                    <Link className="text-blue-600 hover:text-blue-800 transition-colors duration-300" href="https://twitter.com">
                  
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.61 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.923 0 .386.043.762.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.425.727-.666 1.571-.666 2.475 0 1.708.869 3.215 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.386 1.698 4.377 3.95 4.829-.413.112-.849.172-1.296.172-.317 0-.626-.031-.928-.088.627 1.956 2.444 3.379 4.599 3.418-1.684 1.32-3.808 2.107-6.115 2.107-.397 0-.787-.023-1.175-.069 2.179 1.398 4.768 2.214 7.548 2.214 9.055 0 14-7.505 14-14v-.638c.959-.692 1.792-1.558 2.452-2.544z"/></svg>
                       
                    </Link>
                    <Link  className="text-blue-600 hover:text-blue-800 transition-colors duration-300" href="https://linkedin.com">
                    
                            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.23 0h-20.46c-.97 0-1.77.8-1.77 1.77v20.46c0 .97.8 1.77 1.77 1.77h20.46c.97 0 1.77-.8 1.77-1.77v-20.46c0-.97-.8-1.77-1.77-1.77zm-15.08 20.45h-3.55v-11.5h3.55v11.5zm-1.77-13.11c-1.14 0-2.06-.93-2.06-2.06s.93-2.06 2.06-2.06 2.06.93 2.06 2.06-.93 2.06-2.06 2.06zm15.08 13.11h-3.55v-5.612c0-1.34-.027-3.066-1.869-3.066-1.872 0-2.16 1.462-2.16 2.968v5.71h-3.55v-11.5h3.41v1.571h.049c.475-.899 1.637-1.847 3.37-1.847 3.601 0 4.265 2.369 4.265 5.448v6.328z"/></svg>
                    </Link>
                </div>
            </section>

            {/* Optional: FAQ Section */}
            <section className="py-16 bg-gray-50 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-600">Frequently Asked Questions</h2>
                    <div className="space-y-6 text-left">
                        {/* FAQ Item 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">What is Iron & Oak's mission?</h3>
                            <p className="text-gray-600 mt-2">
                                Iron & Oak is dedicated to providing exceptional security services by bridging the gap between public services and the communities we serve. We focus on building trust, ensuring safety, and enhancing the vibrancy of the neighborhoods we work in.
                            </p>
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">How can I apply for a position at Iron & Oak?</h3>
                            <p className="text-gray-600 mt-2">
                                Visit our Careers page to view available positions and apply online. We are always looking for dedicated professionals to join our team.
                            </p>
                        </div>
                        {/* FAQ Item 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">What services do you offer?</h3>
                            <p className="text-gray-600 mt-2">
                                We offer a range of security services, including unarmed security, community patrols, and event security. Our team is trained in de-escalation tactics and focuses on building positive relationships within the communities we serve.
                            </p>
                        </div>
                        {/* Add more FAQ items as needed */}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-blue-600 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6">Have More Questions?</h2>
                    <p className="text-lg mb-8">If you didn't find what you were looking for in the FAQs, feel free to reach out directly.</p>
                    <Link className="bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300" href="/contact">
               
                            Contact Us
                      
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;