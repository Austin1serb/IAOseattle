import Link from 'next/link';
import React from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is Iron & Oak's mission?",
            answer: "Iron & Oak is dedicated to providing exceptional security services by bridging the gap between public services and the communities we serve. We focus on building trust, ensuring safety, and enhancing the vibrancy of the neighborhoods we work in.",
            link: "/about"
        },
        {
            question: "How can I apply for a security position at Iron & Oak?",
            answer: "Visit our Careers page to view available security positions and apply online. We are always looking for dedicated security professionals to join our team.",
            link: "/careers"
        },
        {
            question: "What security services does Iron & Oak offer?",
            answer: "Iron & Oak offers a comprehensive range of security services, including unarmed security, community patrols, event security, asset protection, loss prevention, and solo operation. Our team is highly trained in de-escalation tactics and is committed to building positive relationships within the communities we serve, ensuring safety and trust at every level."
        },
        {
            question: "How does Iron & Oak ensure community safety?",
            answer: "Iron & Oak ensures community safety by providing highly trained security personnel who focus on de-escalation tactics and building positive relationships within the communities they serve. Our security solutions are tailored to meet the unique needs of each community.",
            link: "/about"
        },
        {
            question: "What makes Iron & Oak's security services different?",
            answer: "Iron & Oak's security services stand out due to our commitment to community-focused security, our use of advanced de-escalation tactics, and our ability to offer a wide range of security solutions, from event security to asset protection. We prioritize building trust and maintaining safety in every interaction."
        },
        {
            question: "Can Iron & Oak handle solo security operations?",
            answer: "Yes, Iron & Oak is fully equipped to handle solo security operations. Our trained security professionals can manage individual assignments effectively, ensuring safety and security in any situation."
        },
        {
            question: "Why is de-escalation training important in security services?",
            answer: "De-escalation training is critical in security services as it helps prevent conflicts and ensures the safety of both security personnel and the public. Iron & Oak places a strong emphasis on de-escalation techniques to maintain peace and trust within the communities we serve."
        }
    ];

    return (
        <>
            <section id='faq' className="py-16 bg-gray-50 text-center mt-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-600">Frequently Asked Questions</h2>
                    <div className="space-y-4 text-left">
                        {faqs.map((faq, index) => (
                            <div key={index} className="hover:bg-slate-100 transition-all duration-300 rounded-lg shadow-md relative mx-2">
                                <input type="checkbox" id={`faq-${index}`} className="hidden peer" />
                                <label
                                    htmlFor={`faq-${index}`}
                                    className="flex justify-between items-center cursor-pointer  p-6"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {faq.question}
                                    </h3>

                                </label>
                                <div className='absolute right-4 top-8 transition-all duration-300 peer-checked:rotate-180'>
                                    <svg className="w-6 h-6 text-blue-600 " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"></path></svg>
                                </div>
                                <div className="max-h-0 -mt-2 pb-2 overflow-hidden opacity-0 peer-checked:opacity-90 transition-all duration-500 ease-in-out peer-checked:max-h-96  px-6">
                                    <p className=" mb-2 text-gray-600  ">{faq.answer}</p>
                                    {faq.link && (
                                        <Link href={faq.link} className="text-blue-600 hover:bg-blue-50 p-2  transition-all duration-300 ">
                                            Learn more
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            {/* Call to Action */}
            <section  className="py-16 bg-slate-200 text-black text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6">Still Have Questions?</h2>
                    <p className="text-lg mb-8">If you didn&apos;t find what you were looking for in the FAQs, feel free to reach out directly.</p>
                    <Link href="/contact">
                        <span className="bg-blue-600 text-white py-4 px-8 rounded-md font-semibold hover:bg-blue-800 transition-colors duration-300">
                            Contact Us
                        </span>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default FAQSection;