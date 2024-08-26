import React from 'react';
import Link from 'next/link';

const SocialMediaLinks = () => {
    return (
        <section className="py-8 md:py-0 bg-white text-center">
            <h2 className="text-3xl font-semibold mb-6 text-blue-600">Connect with Us</h2>
            <div className="flex justify-center items-center space-x-6 ">
                <Link href="https://facebook.com" className='hover:text-blue-600 transition-colors duration-300 cursor-pointer'>
                    <svg className="w-12 h-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.522-4.477-10-10-10s-10 4.478-10 10c0 4.992 3.656 9.128 8.438 9.876v-6.993h-2.54v-2.883h2.54v-2.182c0-2.509 1.492-3.889 3.771-3.889 1.094 0 2.239.195 2.239.195v2.46h-1.26c-1.242 0-1.628.771-1.628 1.562v1.854h2.773l-.443 2.883h-2.33v6.993c4.782-.748 8.438-4.884 8.438-9.876z" />
                    </svg>
                </Link>
                <Link href="https://twitter.com" className='hover:text-blue-400 transition-colors duration-300 cursor-pointer'>
                    <svg className="w-10 h-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.61 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.923 0 .386.043.762.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.425.727-.666 1.571-.666 2.475 0 1.708.869 3.215 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.386 1.698 4.377 3.95 4.829-.413.112-.849.172-1.296.172-.317 0-.626-.031-.928-.088.627 1.956 2.444 3.379 4.599 3.418-1.684 1.32-3.808 2.107-6.115 2.107-.397 0-.787-.023-1.175-.069 2.179 1.398 4.768 2.214 7.548 2.214 9.055 0 14-7.505 14-14v-.638c.959-.692 1.792-1.558 2.452-2.544z" />
                    </svg>
                </Link>
                <Link href="https://linkedin.com" className='hover:text-blue-800 transition-colors duration-300 cursor-pointer'>
                    <svg className="w-10 h-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M22.23 0h-20.46c-.97 0-1.77.8-1.77 1.77v20.46c0 .97.8 1.77 1.77 1.77h20.46c.97 0 1.77-.8 1.77-1.77v-20.46c0-.97-.8-1.77-1.77-1.77zm-15.08 20.45h-3.55v-11.5h3.55v11.5zm-1.77-13.11c-1.14 0-2.06-.93-2.06-2.06s.93-2.06 2.06-2.06 2.06.93 2.06 2.06-.93 2.06-2.06 2.06zm15.08 13.11h-3.55v-5.612c0-1.34-.027-3.066-1.869-3.066-1.872 0-2.16 1.462-2.16 2.968v5.71h-3.55v-11.5h3.41v1.571h.049c.475-.899 1.637-1.847 3.37-1.847 3.601 0 4.265 2.369 4.265 5.448v6.328z" />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default SocialMediaLinks;