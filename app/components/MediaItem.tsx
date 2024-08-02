import React from 'react';
import Link from 'next/link';
import MediaContent from './MediaContent';

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

const MediaItem: React.FC<MediaItemProps> = ({ title, slug, description, imageUrl, date, videoUrl, videoEmbed }) => {
    return (
        <div

            className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col justify-between items-center w-full h-full group hover:scale-[98%]"
        >
            <div>
                <div className="relative w-full pb-[56.25%] ">
                    <MediaContent
                        videoEmbed={videoEmbed}
                        videoUrl={videoUrl}
                        imageUrl={imageUrl}
                        title={title}
                    />
                </div>
                <div className="p-4">
                <Link
                    aria-label={`Link to article ${title}`}
                    href={`/articles/${slug}`}
                    >

                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                </Link>
                </div>
            </div>
            <Link
                aria-label={`Link to article ${title}`}
                href={`/articles/${slug}`}
                className="flex w-full flex-col justify-between">
                <div className="mb-4">
                    <span
                        aria-label={`Read more about ${title}`}
                        className="text-blue-500 transition-all duration-300 hover:underline hover:text-blue-800 hover:bg-blue-50 rounded-md px-1 m-3 py-3"
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