import Link from 'next/link';
import React from 'react';

interface SectionCardProps {
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    icon?: React.ReactNode;
    features?: string[]; // Added for features list
}

const SectionCard: React.FC<SectionCardProps> = ({ title, description, linkText, linkHref, icon, features }) => {
    return (
        <div className="bg-white group hover:bg-slate-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col justify-between w-96">
            <div>
                {/* Heading Section */}
                <div className="flex items-center mb-4">
                    <div className="text-blue-500 h-10 w-10 mr-4 flex-shrink-0">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-[#213343] group-hover:text-black flex items-center">
                        {title}
                        <span className="ml-1 text-xs text-gray-500 font-normal">®</span>
                    </h3>
                </div>
                {/* Description */}
                <p className="text-[#213343] mb-6 group-hover:text-black">
                    {description}
                </p>
                {/* Features List */}
                {features && (
                    <div className="mb-4">
                        <h4 className="text-lg font-medium text-[#2e475d] mb-2 group-hover:text-black">Popular Features</h4>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li key={'feature'+index} className="flex items-center font-light text-slate-600">
                                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {/* CTA Button */}
            <div className="mt-4">
                <Link
                    href={linkHref}
                    className="inline-block w-full text-center py-3 px-6 font-bold text-white bg-blue-600 rounded-md transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default SectionCard;