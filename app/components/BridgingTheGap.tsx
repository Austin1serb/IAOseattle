import React from 'react';

const BridgingTheGap: React.FC = () => {
    return (
        <div className="relative h-[30vh] flex flex-col items-center justify-center">
            <div className="absolute -top-4 left-[25%] transform -translate-y-1/2 bg-secondary-dark text-white lg:w-1/4 p-4 lg:p-6 lg:px-40 items-center justify-center flex rounded z-10">
                <h2 className="text-xl text-center md:text-3xl lg:text-5xl font-bold uppercase">Bridging the Gap</h2>
            </div>
            <div className="absolute lg:top-28 md:top-12 left-[5%] transform -translate-y-1/2 bg-secondary text-white w-full p-4 flex rounded">
                <div className="text-center">
                    <h2 className="text-xl text-center md:text-3xl lg:text-4xl font-bold uppercase py-2 hidden lg:block">Between</h2>
                    <p className="text-md lg:text-lg"> our client <span className='text-primary-light uppercase font-semibold'>communities</span> and publicly funded <span className='text-primary-light uppercase font-semibold'>emergency/law enforcement services</span>. Our services focus on clients who facilitate engagement in the communities we serve and provide a positive social impact.</p>
                </div>
            </div>
        </div>
    );
};

export default BridgingTheGap;