import React from 'react'
import ScrollOnLoad from '../components/utils/ScrollOnLoad'
import VideoSection from '../components/VideoSection'
const page = () => {
    return (
        <main className='p-12'>
            <section className="container mx-auto max-w-[90%] p-12 shadow-lg bg-slate-100 mb-208">
                    <p className="mb-4 text-slate-500">Last updated: Aug 7th, 2024</p>
                    <p className="mb-4 ml-12">
                        Iron & Oak LLC (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the &quot;Site&quot;). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-4 text-primary-dark">1. Information We Collect</h2>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary ml-8">1.1 Personal Data</h3>
                    <p className="mb-4 ml-12">
                        Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary ml-8">1.2 Derivative Data</h3>
                    <p className="mb-4 ml-12">
                        Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary ml-8">1.3 Financial Data</h3>
                    <p className="mb-4 ml-12">
                        Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-4 text-primary-dark">2. Use of Your Information</h2>
                    <p className="mb-4 ml-12">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                    <ul className="list-disc list-inside mb-4 ml-16">
                        <li>Create and manage your account.</li>
                        <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                        <li>Administer promotions, surveys, and other Site features.</li>
                        <li>Improve customer service and respond to your inquiries and support needs more efficiently.</li>
                        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                        <li>Send you a newsletter and other marketing communications.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-6 mb-4 text-primary-dark">3. Disclosure of Your Information</h2>
                    <p className="mb-4 ml-12">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary ml-8">3.1 By Law or to Protect Rights</h3>
                    <p className="mb-4 ml-12">
                        If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary ml-8">3.2 Business Transfers</h3>
                    <p className="mb-4 ml-12">
                        We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    </p>

                    <h3 className="text-xl font-semibold mt-4 mb-2 text-secondary ml-8">3.3 Third-Party Service Providers</h3>
                    <p className="mb-4 ml-12">
                        We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-4 text-primary-dark">4. Security of Your Information</h2>
                    <p className="mb-4 ml-12">
                        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-4 text-primary-dark">5. Policy for Children</h2>
                    <p className="mb-4 ml-12">
                        We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible. If you become aware of any data we have collected from children under age 13, please contact us at [your-email@example.com].
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-4 text-primary-dark">6. Cookies and Tracking Technologies</h2>
                    <p className="mb-4 ml-12">
                        We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site. For more information on how we use cookies, please refer to our Cookie Policy [link to cookie policy].
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-4 text-primary-dark">7. Changes to This Privacy Policy</h2>
                    <p className="mb-4 ml-12">
                        We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. If we make material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-4 text-primary-dark">8. Contact Us</h2>
                    <p className="mb-4 ml-12">
                        If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    <p className="mb-4 ml-12">Iron & Oak LLC<br />Seattle, WA 98034<br />Email: [your-email@example.com]</p>
           
            </section>
        </main>
    )
}

export default page