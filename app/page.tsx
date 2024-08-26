// app/page.tsx (or page.js if you're using JavaScript)

import Link from 'next/link';
import IncidentWidget from './components/IncidentWidget';
import VideoSection from './components/VideoSection';

//// Define metadata for the page
//export const metadata = {
//  title: 'Iron & Oak - Professional Security Guard Services in Seattle, WA',
//  description:
//    'Iron & Oak offers a new approach to security in Seattle, focusing on de-escalation and building bridges between the public and emergency services.',
//  keywords:
//    'Security Guard Services, De-escalation, Seattle Security Company, Iron & Oak',
//  openGraph: {
//    title: 'Iron & Oak - Professional Security Guard Services in Seattle, WA',
//    description:
//      'Iron & Oak offers a new approach to security in Seattle, focusing on de-escalation and building bridges between the public and emergency services.',
//    url: 'https://yourwebsite.com',
//    siteName: 'Iron & Oak Security',
//    images: [
//      {
//        url: '/path-to-image.jpg',
//        width: 1200,
//        height: 630,
//        alt: 'Iron & Oak Security Services in Seattle',
//      },
//    ],
//    locale: 'en_US',
//    type: 'website',
//  },
//  twitter: {
//    card: 'summary_large_image',
//    title: 'Iron & Oak - Professional Security Guard Services in Seattle, WA',
//    description:
//      'Iron & Oak offers a new approach to security in Seattle, focusing on de-escalation and building bridges between the public and emergency services.',
//    images: ['/path-to-image.jpg'],
//  },
//};

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white">
      <VideoSection
        videoSrc="/seattleVidAbout.webm"
        homePage={true}
        size="screen"
      />
      <div className="absolute bottom-4 right-4 z-10 p-8">
        <IncidentWidget />
      </div>
      <div className="absolute top-0 p-8 flex flex-col items-center justify-center h-full z-0 bg-black bg-opacity-30">
        <h1 className="text-2xl md:text-3xl text-start mb-8 max-w-2xl text-white z-10">
          A New Approach in Security
        </h1>
        <p className="text-lg md:text-2xl text-start mb-8 max-w-2xl text-slate-200 z-10">
          Focusing on{' '}
          <span className="underline text-shadow-2 text-white">
            De-escalation
          </span>{' '}
          and{' '}
          <span className="text-shadow-2 text-white">
            building bridges between the public and emergency services
        </span>
          . Our mission is to ensure safety while fostering community trust.
        </p>
        <Link
          href="/about"
          className="inline-block px-6 py-3 font-bold text-lg bg-blue-600 opacity-90 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 z-50"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}