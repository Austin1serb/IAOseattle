/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.jotform.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'mynorthwest.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'komonews.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'downtownseattle.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.bizj.us',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'southseattleemerald.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'v5.airtableusercontent.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig;
