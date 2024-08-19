import React from 'react';
import IconSection from './careersComponents/IconSection';
import Link from 'next/link';

const CareersPage = () => {
  return (
    <>
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className='py-8'>
            <div className="text-7xl font-bold text-center flex items-center  justify-center w-full mb-12">
              <span>Join The <span className="text-blue-500">Team</span>.</span>
            </div>
            <h1 className="text-xl text-center mb-6">
              Looking for entry-level Seattle jobs or security guard positions? At Iron & Oak, we are committed to being <span className='text-blue-500 font-bold'>community stewards who bridge the gap</span> between public safety services and the private organizations we serve. We offer a wide range of opportunities, from events and solo operations to nightlife security and asset protection. We have a place for everyone, including roles in payroll, management, and dispatch.
            </h1>
          </div>
          <IconSection />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                <span className="text-blue-500 font-bold">Why</span> Work With Us?
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  No experience necessary; we provide <span className="text-blue-500 font-bold">Full Paid Training</span> and support to help you succeed. We are hiring for positions ranging from entry-level to management in Seattle, WA.
                </li>
                <li>
                  Starting pay is <span className="text-blue-500 font-bold">$23 per hour</span>.
                </li>
                <li>
                  Our comprehensive training programs cover CPR, overdose prevention, de-escalation tactics, hand-to-hand combat, verbal communication skills, and more.
                </li>
                <li>
                  Become a community steward and make a <span className="text-blue-500 font-bold">Positive Impact</span> in Seattle.
                </li>
                <li>Opportunities to work with diverse clients and communities.</li>
                <li>
                  Supportive work environment that values <span className="text-blue-500 font-bold">Diversity and Inclusion</span>.
                </li>
                <li>
                  Great <span className="text-blue-500 font-bold">Advancement Opportunities</span>, including becoming a supervisor within six months through our paid Certified Personal Trainer program.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center">Current Opportunities:</h2>
              <p className="mb-2">We have positions available in:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Downtown Seattle</li>
                <li>Pioneer Square</li>
                <li>Capitol Hill</li>
              </ul>
              <p className="mt-4">Roles include:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Public Safety Ambassadors</li>
                <li>Event Security Specialists</li>
                <li>Nightlife Security Officers</li>
                <li>Asset Protection Agents</li>
                <li>And More</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-bold text-center mb-16">
            Our Commitment to <span className='text-blue-500 font-bold'>Diversity</span>
          </h3>
          <p className="text-lg text-center mb-6">
            Iron & Oak LLC is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We work closely with our LGBTQ+ community members and ensure all employees feel supported and valued.
          </p>
        </div>
      </section>
      <section className="bg-gray-200 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Compensation & Benefits</h3>
              <ul className="list-disc list-inside text-lg space-y-4">
                <li>
                  <span className="text-blue-500 font-bold">Competitive Wages:</span> Earn between $23-$28 per hour, based on experience and the nature of the client&apos;s environment.
                </li>
                <li>
                  <span className="text-blue-500 font-bold">License Transfer Fees:</span> We&apos;ll cover the costs to transfer your security officer&apos;s license (guard card) to Iron and Oak.
                </li>
                <li>
                  <span className="text-blue-500 font-bold">Sick & Safe Time:</span> Earn 1 hour of sick time for every 40 hours worked, up to 80 hours, under Seattle&apos;s labor laws.
                </li>
                <li>
                  <span className="text-blue-500 font-bold">Commuter Benefits:</span> Access a free ORCA card for commuting and downtown parking after 90 days of employment.
                </li>
                <li>
                  <span className="text-blue-500 font-bold">State-of-the-Art Equipment:</span> Work with the best equipment, including protective armor and body-worn cameras.
                </li>
                <li>
                  <span className="text-blue-500 font-bold">Comprehensive Training:</span> Receive 60 hours of paid training to exceed industry standards and ensure preparedness for all situations.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Requirements</h3>
              <ul className="list-disc list-inside text-lg space-y-4">
                <li>Exemplary verbal communication skills with a focus on clarity and professionalism.</li>
                <li>Able to perform a range of physical tasks, including standing for extended periods and navigating stairs.</li>
                <li>
                  Eligibility to obtain an unarmed security officer&apos;s license, or{' '}
                  <Link href="/how-to-become-security-guard" className="text-blue-500 hover:underline font-bold">
                  &quot;Guard Card&quot;
                  </Link>
                  .
                </li>
                <li>Possession of a high school diploma or GED and a minimum age of 18 years.</li>
                <li>Experience in security or a related field is preferred, but we welcome those eager to learn and grow.</li>
                <li>Willingness to work flexible schedules, including weekends and various shifts, particularly during the initial 90 days.</li>
                <li>Adaptability to work in various weather conditions, ensuring safety and performance in any environment.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-6xl font-bold text-center mb-6">Apply Now</h3>
          <p className="text-lg text-center mb-6 px-12">
            Ready to join Iron & Oak and make a difference in your community? Apply now to become part of our dynamic team and take the first step towards an exciting career in private security.
          </p>
          <div className="flex justify-center mb-8">
            <Link href="/careers/apply" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareersPage;