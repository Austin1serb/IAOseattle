import React from 'react';
import Link from 'next/link';

const SuccessPage: React.FC = () => {
    return (
        <section className="flex justify-around items-center bg-slate-200">
            <div className="w-3/4 p-8 min-w-[380px] my-12 bg-white rounded-lg shadow-lg">
                <h1 className="text-5xl font-semibold text-blue-600 mb-4 text-center">Application Submitted!</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Thank you for applying! We’re excited to review your application and will get back to you soon. In the meantime, learn more about our company and what makes us unique.
                </p>

                <div className="flex flex-col w-fit justify-center gap-4 mb-6 ">
                    <Link href="/about" className="text-blue-600 hover:underline text-lg transition-all duration-300">
                        Learn More About Us
                    </Link>
                    <Link href="/media" className="text-blue-600 hover:underline text-lg transition-all duration-300">
                        See Us in the Media
                    </Link>
                </div>

                <p className="text-gray-600 mb-4">
                    If you have any questions, feel free to <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.
                </p>



                <div className="mt-8 text-gray-500">
                    <p>Thank you for your interest in Iron & Oak. We look forward to the possibility of working together.</p>
                    {/*<p className="mt-2">Follow us on <a href="https://www.facebook.com/YourCompany" target="_blank" className="text-blue-600 hover:underline">Facebook</a>, <a href="https://www.twitter.com/YourCompany" target="_blank" className="text-blue-600 hover:underline">Twitter</a>, and <a href="https://www.linkedin.com/company/YourCompany" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>.</p>*/}
                </div>
            </div>
        </section>
    );
};

export default SuccessPage;