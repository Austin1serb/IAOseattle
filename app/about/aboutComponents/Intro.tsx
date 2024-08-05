import IaoIcon from '@/app/components/IaoIcon';
import Image from 'next/image';
import React from 'react';

const Intro: React.FC = () => {
    
    return (
        <section className="bg-gray-200 text-center py-24 px-4 md:px-8 rounded-lg">
            <div className="max-w-4xl mx-auto">
                <div className='flex items-center  translate-x-8 pb-8'>
                    <div className=' -translate-x-8 h-24'>
                        <IaoIcon />
                    </div>
                    <h2 className="text-5xl mb- text-start z-10 relative">We Are<strong className='text-shadow-white'> Redefining</strong> Private Security
                    <div className='w-[98%] bg-black min-h-[4px] mt-1 ml-1 z-10 absolute'></div>
                    </h2>
                </div>
                <div className='flex items-center justify-between '>

                    <p className='text-lg text-gray-700'>With a  focus on community stewardship and non-aggressive solutions. Our team of highly trained professionals works tirelessly to create safe and vibrant environments throughout the greater Seattle area
                    </p>
                </div>
                <p className="text-lg text-gray-700">
                    We believe in building strong relationships with the communities we serve, bridging the gap between public services and local residents through innovative security practices that prioritize respect and inclusion.
                </p>
            </div>
        </section>
    );
};

export default Intro;