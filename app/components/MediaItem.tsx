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
    return (
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="relative w-full h-48 object-cover">
                {videoUrl || videoEmbed ? (
                    videoEmbed ?
                        (<div className="w-full h-full overflow-auto">
                            <div className="aspect-w-16 aspect-h-9">
                                <div className='overflow-hidden' dangerouslySetInnerHTML={{ __html: videoEmbed }} />
                            </div>
                        </div>)
                        :
                        (<video controls className="w-full h-full object-cover">
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>)
                ) : (
                    <Image src={imageUrl || defaultImageUrl} alt={title} fill className="object-cover" />
                )}
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <Link href={`/articles/${slug}`} target="_blank" className="text-blue-500 transition-all duration-300 hover:underline hover:text-blue-800">
                    Read more
                </Link>
            </div>
            <div className="p-4 bg-gray-100 text-gray-600 text-sm">
                {date}
            </div>
        </div>
    );
};

export default MediaItem;