"use client";
import React, { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { newsItems } from "./newsItems";
import Pagination from "./Pagination";
import styles from "../MediaItem.module.css";
import Link from "next/link";
import MediaItem from "./MediaItem";
import MediaItemSkeleton from "./MediaItemSkeleton";

const ITEMS_PER_PAGE = 6;

const getClassName = (stage: string, direction: string): string => {
	if (stage === "out") {
		return direction === "forward" ? styles.pageSlideOutForward : styles.pageSlideOutBackward;
	} else if (stage === "in") {
		return direction === "forward" ? styles.pageSlideInForward : styles.pageSlideInBackward;
	} else {
		return "";
	}
};

// Component that uses searchParams wrapped in Suspense
const MediaPageContent: React.FC = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const initialPage = parseInt(searchParams.get("page") || "1", 10);
	const [currentPage, setCurrentPage] = useState(initialPage);

	const [transitionState, setTransitionState] = useState({
		stage: "idle",
		pendingPage: 1,
		direction: "forward" as "forward" | "backward",
	});

	const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);

	useEffect(() => {
		if (transitionState.stage === "out") {
			const timer = setTimeout(() => {
				setTransitionState((prevState) => ({
					...prevState,
					stage: "in",
					pendingPage: prevState.pendingPage,
				}));
				setCurrentPage(transitionState.pendingPage);
			}, 400); // Ensure this matches your CSS duration
			return () => clearTimeout(timer);
		}
	}, [transitionState]);

	const handlePageChange = (page: number) => {
		if (page !== currentPage) {
			setTransitionState({
				stage: "out",
				pendingPage: page,
				direction: page > currentPage ? "forward" : "backward",
			});

			// Update the URL with the new page number, but without the shallow option
			const newSearchParams = new URLSearchParams(searchParams);
			newSearchParams.set("page", page.toString());

			router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
		}
	};

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const currentItems = newsItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

	return (
		<main className="bg-slate-200">
			<div className="text-center p-16">
				<p className="text-3xl">
					Explore the latest news and media coverage about Iron & Oak. <br />
				</p>
				<p className="mt-16 text-gray-600 font-thin">Stay updated with our industry presence and community impact through articles.</p>
				<Link
					className="text-blue-600 underline hover:text-blue-800 transition duration-300 inline-block cursor-pointer"
					href={"/articles"}
				>
					View Articles
				</Link>
			</div>
			<section
				id="media-section"
				aria-label="Media and Articles Section"
				className="container mx-auto px-4"
			>
				<div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8 place-items-center ${getClassName(transitionState.stage, transitionState.direction)}`}>
					{currentItems.map((item, index) => (
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

			<nav
				aria-label="Pagination Navigation"
				className="container mx-auto px-4 mt-4"
			>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</nav>

			<div className="text-right container mx-auto px-4 mt-4">
				<Link
					href={"/media/all"}
					className="text-blue-600 underline hover:text-blue-800 transition duration-300 cursor-pointer"
				>
					View All
				</Link>
			</div>
		</main>
	);
};

// Main MediaPage component with Suspense boundary
const MediaPage: React.FC = () => {
	return (
		<Suspense
			fallback={
				<main className="bg-slate-200">
					<div className="text-center p-16">
						<p className="text-3xl">
							Explore the latest news and media coverage about Iron & Oak. <br />
						</p>
						<p className="mt-16 text-gray-600 font-thin">Stay updated with our industry presence and community impact through articles.</p>
						<Link
							className="text-blue-600 underline hover:text-blue-800 transition duration-300 inline-block cursor-pointer"
							href={"/articles"}
						>
							View Articles
						</Link>
					</div>
					<section
						id="media-section"
						aria-label="Media and Articles Section"
						className="container mx-auto px-4"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8 place-items-center">
							{Array.from({ length: 6 }).map((_, index) => (
								<article
									key={`skeleton-${index}`}
									className="h-full"
								>
									<MediaItemSkeleton />
								</article>
							))}
						</div>
					</section>
				</main>
			}
		>
			<MediaPageContent />
		</Suspense>
	);
};

export default MediaPage;
