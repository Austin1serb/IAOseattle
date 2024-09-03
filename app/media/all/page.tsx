
import React, { Suspense } from 'react';
import Link from 'next/link';
import MediaItem from '../MediaComponents/MediaItem';
import MediaItemSkeleton from '../MediaComponents/MediaItemSkeleton';
import { newsItems } from '../MediaComponents/newsItems';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Media - Iron & Oak',
    description: 'Explore all the latest news and media coverage about Iron & Oak in one place.',
    alternates: {
        canonical: '/media',
    },
};


const AllMediaPage: React.FC = () => {
    return (
        <main className="bg-slate-200 pb-12">
            <div className="text-center p-16">
                <p className="text-3xl">
                    Explore the latest news and media coverage about Iron & Oak. <br />
                </p>
                <p className="mt-16 text-gray-600 font-thin">
                    Stay updated with our industry presence and community impact through articles.
                </p>
                <Link
                    className="text-blue-600 underline hover:text-blue-800 transition duration-300 inline-block cursor-pointer"
                    href={'/articles'}
                >
                    View Articles
                </Link>
            </div>
            <section id="media-section" aria-label="Media and Articles Section" className="container mx-auto px-4">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8 place-items-center`}>
                    {newsItems.map((item, index) => (
                        <article
                            key={`${item.title}-media-item-${index}`}
                            className="h-full"
                            aria-labelledby={`media-item-title-${item.title}`}
                        >
                            <Suspense fallback={<MediaItemSkeleton />}>
                                <MediaItem
                                    slug={item.slug}
                                    title={item.title}
                                    description={item.description}
                                    imageUrl={item.imageUrl}
                                    videoUrl={item.videoUrl}
                                    videoEmbed={item.videoEmbed}
                                    date={item.date}
                                    id={`media-item-id-${index}`}
                                />
                            </Suspense>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default AllMediaPage;