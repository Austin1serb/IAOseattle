import Link from 'next/link';
import React from 'react';

const ApplicationIntroduction = () => {
    return (
        <section className="bg-slate-200 py-24">
            <div className="container mx-auto p-8">
                <div className="bg-white py-12 rounded-lg shadow-lg mb-8">
                    <h2 className="text-5xl font-semibold mb-8 text-center py-12"><span className='text-blue-600'>Welcome</span> to the Iron & Oak Application Process</h2>
                    <p className="text-lg mb-4 text-center">
                        Thank you for your interest in joining Iron & Oak Protective Services. We are excited to offer you a rewarding career in private security where you can make a real difference in the community. Our team values diversity, innovation, and excellence, and we look forward to having you on board.
                    </p>
                    <div className='bg-slate-300 w-full p-12'>
                        <h3 className="text-3xl font-semibold mb-4 text-center py-12"><span className='text-blue-600'>Scheduling</span> Opportunities</h3>
                        <p className="mb-8 text-center">
                            We have a variety of schedules available. Our Downtown Seattle Association contract is currently a priority, and hiring will be geared toward this role. We are hiring for the following shifts:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h4 className="text-2xl font-semibold mb-2 text-blue-600">Downtown</h4>
                                <ul className="list-disc list-inside text-lg space-y-2">
                                    <li>Site Security, Multiple Clients</li>
                                    <li>Daily: 6am-9pm</li>
                                    <li>Nightly: Currently unavailable</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h4 className="text-2xl font-semibold mb-2 text-blue-600">Pioneer Square</h4>
                                <ul className="list-disc list-inside text-lg space-y-2">
                                    <li>Site Security, Multiple Clients</li>
                                    <li>Daily: 6am-9pm</li>
                                    <li>Nightly: Currently unavailable</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h4 className="text-2xl font-semibold mb-2 text-blue-600">Capitol Hill</h4>
                                <ul className="list-disc list-inside text-lg space-y-2">
                                    <li>Site Security & Venue Security, Multiple Clients</li>
                                    <li>Daily: 9am-5pm</li>
                                    <li>Nightly: 6pm-6am</li>
                                    <li>Nightly: 9pm-2am</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h4 className="text-2xl font-semibold mb-2 text-blue-600">SoDo</h4>
                                <ul className="list-disc list-inside text-lg space-y-2">
                                    <li>Venue Security</li>
                                    <li>Friday & Saturday: 8pm-4am</li>
                                    <li>Friday & Saturday: 10pm-2am</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="m-8">
                        *This is not a complete list of all opportunities. We currently have a 30-day waitlist for new clients.
                    </p>
                    <p className="text-lg m-4">
                        Iron & Oak Protective Services is committed to providing paid training and assisting you in obtaining your guard card, helping you embark on a successful career in private security. 
                    </p>
                    <div className="flex justify-center mt-8">
                        <Link href={'/careers/apply?step=1'} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 text-center">
                            Continue To Application
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationIntroduction;