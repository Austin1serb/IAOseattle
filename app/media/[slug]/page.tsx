// app/media/[slug]/page.tsx

import Socials from "@/components/Socials";
import { mediaArticles } from "@/media/MediaComponents/MediaData";
import Image from "next/image";
import Link from "next/link";

// Generate static params for each article
export async function generateStaticParams() {
	return mediaArticles.map((article) => ({
		slug: article.slug,
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const article = mediaArticles.find((article) => article.slug === slug);
	const url = new URL(`/media/${slug}`, process.env.NEXT_PUBLIC_URL || "https://www.iaoseattle.com");

	return {
		title: article?.title || "Article Not Found",
		description: article?.description || "Read more articles on our site.",
		openGraph: {
			title: article?.title,
			description: article?.description,
			url: url.href,
			images: [
				{
					url: article?.imageUrl || "/images/noImage.png",
					width: 800,
					height: 600,
					alt: article?.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: article?.title,
			description: article?.description,
			images: [article?.imageUrl || "/images/noImage.png"],
		},
	};
}

export default function Page({ params }: { params: { slug: string } }) {
	const { slug } = params;

	const article = mediaArticles.find((article) => article.slug === slug);

	if (!article) {
		return (
			<div className="p-16">
				<h1 className="text-4xl font-bold text-blue-600">Article Not Found</h1>
				<Link
					href="/media"
					className="text-blue-600 w-fit transition-all duration-150 hover:underline hover:text-blue-800 hover:bg-blue-50 rounded-md px-1 -mx-1 py-3 flex sm:-mb-6 items-center border cursor-pointer"
				>
					<svg
						className="m-1 -translate-y-[1px]"
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 448 512"
						height="1.5em"
						width="1.5em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
					</svg>
					Go Back to Media Page
				</Link>
			</div>
		);
	}

	const defaultImageUrl = "/images/noImage.png";
	let videoEmbedSrc = "";
	if (article.videoEmbed) {
		const srcMatch = article.videoEmbed.match(/src="([^"]+)"/);
		if (srcMatch && srcMatch[1]) {
			videoEmbedSrc = srcMatch[1];
		}
	}

	return (
		<main className="p-16">
			<section className="container mx-auto px-4 h-auto w-full min-w-[350px]">
				<div className="p-4 pt-0">
					<header>
						<h1 className="text-4xl font-bold text-blue-600">{article.title}</h1>
						<p className="text-slate-600 mb-4">{article.date}</p>
					</header>
					{videoEmbedSrc ? (
						<div
							className="relative w-full md:w-3/5 border-l-4 border-blue-500 pl-4"
							aria-label="video container"
						>
							<div
								className="relative w-full"
								style={{ paddingTop: "56.25%" }}
							>
								{" "}
								{/* 16:9 Aspect Ratio */}
								<iframe
									title="Media player"
									src={videoEmbedSrc}
									className="absolute top-0 left-0 w-full h-full border-none overflow-hidden"
									frameBorder="0"
									scrolling="no"
									loading="lazy"
								/>
							</div>
						</div>
					) : (
						<div
							className="relative w-1/2 h-[43vh] object-cover border-l-4 border-blue-500 pl-4"
							aria-label="image container"
						>
							<Image
								src={article.imageUrl || defaultImageUrl}
								alt={article.title}
								fill
								sizes="50vw"
								className="object-cover"
								loading="lazy"
							/>
						</div>
					)}
					<div
						aria-label="News-Text"
						className="pt-4 prose prose-lg"
					>
						<div dangerouslySetInnerHTML={{ __html: article.content }} />
					</div>
					<Link
						href={article.url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 underline hover:text-blue-800 transition duration-300 inline-block cursor-pointer"
						aria-label="link-to-news-outlet"
					>
						Read the full article on the news outlet
					</Link>
					<div className="mt-8 flex sm:flex-row flex-col justify-between items-start sm:items-center sm:space-y-4 space-y-16 ">
						<Link
							href="/media"
							className="text-blue-600 transition-all duration-150 hover:underline hover:text-blue-800 hover:bg-blue-50 rounded-md px-1 -mx-1 py-3 flex sm:-mb-6 items-center border cursor-pointer"
						>
							<svg
								className="m-1 -translate-y-[1px]"
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 448 512"
								height="1.5em"
								width="1.5em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
							</svg>
							Go Back to Media Page
						</Link>
						<Socials
							title={article.title}
							slug={article.slug}
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
