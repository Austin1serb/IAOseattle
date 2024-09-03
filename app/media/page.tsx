import React, { Suspense } from 'react'
import MediaPage from './MediaComponents/MediaPage'
import { Metadata } from 'next';





export const metadata: Metadata = {
  title: 'Media - Iron & Oak',
  description: 'Explore the latest news and media coverage about Iron & Oak.',
  alternates: {
    canonical: '/media',
  },
};




const page: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MediaPage />
    </Suspense>

  )
}

export default page