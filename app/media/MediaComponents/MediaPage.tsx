'use client'
import ScrollOnLoad from '@/components/utils/ScrollOnLoad';
import VideoSection from '@/components/VideoSection';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import MediaItemSkeleton from './MediaItemSkeleton';
import { newsItems } from './newsItems';
import Pagination from './Pagination';
import styles from '../MediaItem.module.css';

const MediaItem = dynamic(() => import('./MediaItem'), {
    ssr: true,
    loading: () => <MediaItemSkeleton />,
});


const ITEMS_PER_PAGE = 5; // Total items per page (5 items per row, 3 rows)

const Media: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [transitionStage, setTransitionStage] = useState<'idle' | 'out' | 'in'>('idle');
    const [pendingPage, setPendingPage] = useState(currentPage);
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

    const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);

    useEffect(() => {
        if (transitionStage === 'out') {
            const timer = setTimeout(() => {
                setTransitionStage('in');
                setCurrentPage(pendingPage);
            }, 400); // Match this with your CSS animation duration
            return () => clearTimeout(timer);
        }
    }, [transitionStage, pendingPage]);

    const handlePageChange = (page: number) => {
        if (page !== currentPage) {
            setPendingPage(page);
            setDirection(page > currentPage ? 'forward' : 'backward');
            setTransitionStage('out');
        }
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = newsItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const getClassName = (): string => {
        if (transitionStage === 'out') {
            return direction === 'forward' ? styles.pageSlideOutForward : styles.pageSlideOutBackward;
        } else if (transitionStage === 'in') {
            return direction === 'forward' ? styles.pageSlideInForward : styles.pageSlideInBackward;
        } else {
            return '';
        }
    };

    return (
        <main >
            <section
                aria-label="Media and Articles Section"
                className="container mx-auto px-4"
            >
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8 justify-center items-center ${getClassName()}`}>
                    {currentItems.map((item, index) => (
                        <article
                            key={`${item.title}-media-item-${index}`}
                            className="h-full"
                            aria-labelledby={`media-item-title-${item.title}`}
                        >
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
                        </article>
                    ))}
                </div>
            </section>

            <nav aria-label="Pagination Navigation" className="container mx-auto px-4 mt-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </nav>
        </main>
    );
};

export default Media;