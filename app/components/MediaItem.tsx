import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MediaItemProps {
    title: string;
    slug: string;
    description: string;
    url: string;
    imageUrl: string;
    videoUrl?: string;
    videoEmbed?: string;
    date: string;
}

const MediaItem: React.FC<MediaItemProps> = ({ title, slug, description, url, imageUrl, date, videoUrl, videoEmbed }) => {
    const defaultImageUrl = '/images/noImage.png';
    // Extract the src attribute from the videoEmbed string safely
    let videoEmbedSrc = '';
    if (videoEmbed) {
        const srcMatch = videoEmbed.match(/src="([^"]+)"/);
        if (srcMatch && srcMatch[1]) {
            videoEmbedSrc = srcMatch[1];
        }
    }

    return (
        <Link aria-label={`Link to article ${title}`} href={`/articles/${slug}`} className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col justify-between items-center w-full group hover:scale-[98%]">
            <div>
                <div className="relative w-full pb-[56.25%]">
                    {videoUrl || videoEmbed ? (
                        videoEmbed ? (
                            <div className="absolute top-0 left-0 w-full h-full">
                                <iframe
                                    title='Media player'
                                    src={videoEmbedSrc}
                                    width="100%"
                                    height="100%"
                                    
                                    className='border-none overflow-hidden'
                                />
                            </div>
                        ) : (
                            <video controls className="absolute top-0 left-0 w-full h-full object-cover">
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )
                    ) : (
                        <Image src={imageUrl || defaultImageUrl} alt={title} fill
                            sizes='25vw'
                            className="object-cover group-hover:grayscale-[50%]" />
                    )}
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                </div>
            </div>
            <div className='flex w-full flex-col justify-between'>
                <div className='mb-4'>
                    <span aria-label={`Read more about ${title}`} className="text-blue-500 transition-all duration-300 hover:underline hover:text-blue-800 hover:bg-blue-50 rounded-md px-1 m-3 py-3">
                        Read more
                    </span>
                </div>
                <div className="p-4 bg-gray-100 text-gray-600 text-sm w-full text-center">
                    {date}
                </div>
            </div>
        </Link>
    );
};

export default MediaItem;