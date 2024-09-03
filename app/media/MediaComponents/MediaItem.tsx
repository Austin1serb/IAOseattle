import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import MediaContent from './MediaContent';

interface MediaItemProps {
    title: string;
    slug: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    videoEmbed?: string;
    date: string;
    id: string;
}

const MediaItem: React.FC<MediaItemProps> = ({
    title,
    slug,
    description,
    imageUrl,
    date,
    videoUrl,
    videoEmbed,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-dark overflow-hidden flex flex-col justify-between items-center w-full h-[525px] max-w-[425px] group hover:scale-[98%] transition-all duration-300">
            <header aria-label='media-card-header'>
                <div aria-label='media-card-image/video' className="relative w-full pb-[56.25%]">
                    <MediaContent
                        videoEmbed={videoEmbed}
                        videoUrl={videoUrl}
                        imageUrl={imageUrl}
                        title={title}
                    />
                </div>
                <div className="p-4" aria-label='media-card-body-text'>
                    <Link aria-label={`Link to article ${title}`} href={`/media/${slug}`}>
                        <div className="overflow-hidden relative">
                            <div className="line-clamp-combined line-clamp-6 h-40">
                                <h2 className="text-xl font-bold mb-2">{title}</h2>
                                <p className="text-gray-600">
                                    {description}
                                </p>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-l from-white"></div>
                        </div>
                    </Link>
                </div>
            </header>
            <Link
                aria-label={`Link to article ${title}`}
                href={`/articles/${slug}`}
                className="flex w-full flex-col justify-between"
            >
                <div className="mb-4">
                    <span
                        aria-label={`Read more about ${title}`}
                        className="text-blue-600 transition-all duration-300 hover:underline hover:text-blue-800 hover:bg-blue-50 rounded-md px-1 m-3 py-3"
                    >
                        Read more
                    </span>
                </div>
                <div className="p-4 bg-gray-100 text-gray-600 text-sm w-full text-center">
                    {date}
                </div>
            </Link>
        </div>
    );
};

export default MediaItem;