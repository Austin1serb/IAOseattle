import React from 'react';
import Link from 'next/link';
import ScrollOnLoad from '@/components/utils/ScrollOnLoad';
import VideoSection from '@/components/VideoSection';

const HowToBecomeSecurityGuard = () => {
    return (
        <main>
            <header>
                <VideoSection videoSrc={'/seattleHome.webm'} text='articles' />
                <ScrollOnLoad scrollPosition={150} />
            </header>

            <section className="bg-gray-200 py-12">
                <div className="container mx-auto px-4">
                    <div className='py-8'>
                        <div className="text-7xl font-bold text-center flex items-center justify-center w-full mb-12">
                            <span>How to Become a <span className="text-blue-500">Security Guard</span> in Washington</span>
                        </div>
                        <h1 className="text-xl text-center mb-6">
                            Discover the path to a rewarding career in security. With rising demand for qualified security personnel across Washington, now is the perfect time to start your journey. Learn the steps to becoming a licensed security guard and explore opportunities with Iron & Oak.
                        </h1>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                        <h2 className="text-4xl font-semibold mb-4 text-blue-600 text-center">Overview</h2>
                        <p className="text-lg">
                            Becoming a security guard in Washington opens up numerous career opportunities. With rising property crime rates across the state, there is a growing demand for qualified security personnel. Security guards are employed in various settings, including residential and commercial properties, and play a vital role in risk management and loss prevention.
                        </p>
                        <p className="text-lg mt-4">
                            This guide provides a comprehensive overview of the steps needed to become a licensed security guard in Washington, from meeting basic criteria to completing required training and obtaining a license.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                        <h2 className="text-3xl font-semibold mb-4"><span className='text-blue-600'>Steps</span> to Obtain a Security Guard License in Washington</h2>
                        <h3 className="text-2xl font-semibold mb-4">Basic Criteria</h3>
                        <ul className="list-disc list-inside text-lg space-y-2">
                            <li>Be at least 18 years of age.</li>
                            <li>Be a U.S. citizen or Resident Alien (Green Card Holder).</li>
                            <li>Pass a Criminal Record Check (no felony convictions in the last five years).</li>
                            <li>Be employed or have an offer of employment from a licensed private security company.</li>
                            <li>Meet training requirements.</li>
                            <li>Submit a set of fingerprints.</li>
                            <li>Pay a non-refundable fee $100 (Covered by I&O).</li>
                            <li>Submit a completed application.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold mb-4 mt-8">Training <span className='text-blue-600'>Requirements</span></h3>
                        <p className="text-lg">
                            Applicants must complete a state-approved training course, which covers essential topics such as basic principles, report writing, safety and accident prevention, emergency response, and legal powers and limitations. It is advisable to take training from accredited organizations or individuals.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                        <h2 className="text-3xl font-semibold mb-4">Application <span className='text-blue-600'>Process</span></h2>
                        <p className="text-lg">
                            After completing the required training and securing employment or an offer from a licensed security company, you can submit your application for a security guard license. This includes a completed application form and all supporting documents.
                        </p>
                        <p className="text-lg mt-4">
                            Security guard licenses in Washington must be renewed annually. The renewal process is straightforward and involves confirming that you have not committed any crimes in the past 12 months.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                        <h2 className="text-3xl font-semibold mb-4">Additional <span className='text-blue-600'>Opportunities</span></h2>
                        <p className="text-lg">
                            For those interested in becoming an armed security guard, additional training and certification are required. This involves meeting specific criteria and passing further tests to obtain an armed security guard license in Washington.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 text-center ">
                        <h2 className="text-4xl font-semibold mb-4 "><span className='text-blue-600'>Start Your Career</span> with Iron & Oak Protective Services</h2>
                        <p className="text-lg">
                            Iron & Oak Protective Services offers a supportive environment for aspiring security guards. We provide paid training to help you gain the skills needed to succeed and assist you in obtaining your guard card. Our team is dedicated to helping you start your career in private security with stability, growth, and a commitment to excellence.
                        </p>
                        <p className="text-lg mt-4">
                            Join us and be part of a company that values diversity, innovation, and a positive impact on the community. Whether you are new to the field or an experienced professional, Iron & Oak provides opportunities for advancement and development.
                        </p>
                        <div className="flex justify-center mt-6">
                            <Link href="/careers" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HowToBecomeSecurityGuard;