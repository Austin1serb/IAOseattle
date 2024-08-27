import IaoIcon from '@/components/IaoIcon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Intro: React.FC = () => {
    return (
        <section className="bg-slate-200 py-12 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-center flex-col md:flex-row pb-8 px-8">
                    <div className="h-full w-full md:h-1/2 md:w-1/2 -translate-x-4 hidden md:flex">
                        <Image src="https://i.imgur.com/QhYVXy3.png" width={200} height={200} alt='IAO-icon' />
                    </div>
                    <h2 className="text-5xl font-bold lg:text-[60px] text-start sm:text-start z-10 relative md:text-nowrap mb-12 sm:mb-0">
                        <span className="text-blue-500">Redefining</span> Private Security
                    </h2>
                </div>
                <div className="flex items-start px-12">
                    <div className="flex-1 text-xl text-slate-700">
                        <span className="sm:hidden block">
                            We Are <strong className="text-shadow-white text-2xl whitespace-nowrap">Bridging The Gap</strong> between public services and local residents through innovative security practices that prioritize respect and inclusion.
                        </span>
                        <div className="relative float-right h-auto w-auto ml-4 mb-8 rounded z-10">

                            <Image
                                src="https://i.imgur.com/bEyoBtZ.jpeg"
                                alt="team-member-image"
                                className="relative z-10 h-auto w-auto"
                                height={300}
                                width={300}
                            />

                            <div className="
                            absolute top-8 sm:left-20 left-10  -z-1 w-full h-full border-[12px] border-blue-600 rounded"></div>
                        </div>
                        <p className="text-xl text-slate-700">
                            <span className="hidden sm:block">
                                We Are <strong className="text-shadow-white text-2xl whitespace-nowrap">Bridging The Gap</strong> between public services and local residents through innovative security practices that prioritize respect and inclusion.
                            </span>
                            <br /><br />
                            With a focus on community stewardship and non-aggressive solutions, our team of highly trained professionals works tirelessly to create safe and vibrant environments throughout the greater Seattle area.
                            Our belief is in building strong relationships with the communities we serve, through Protection, not Policing.
                        </p>
                    </div>
                </div>

                {/* New Social Proof Section */}
                <div className="bg-white py-8 mt-16">
                    <div className="max-w-4xl mx-auto text-center px-8">
                        <p className="text-2xl text-blue-700">
                            In the past year, we handled over <strong>10,000 incidents</strong>, with less than <strong>1%</strong> involving the use of force by our employees. <br />
                            <span className='text-base text-slate-500'>
                                We&apos;ve been recognized by major news outlets for exactly what we promote, <strong>Bridging The Gap</strong>. <br />Check out our <Link href="/media" className="text-blue-600 underline">media section</Link> to learn more.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;