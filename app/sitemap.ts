import { MetadataRoute } from "next";
import { generateStaticParams as getArticleSlugs } from "@/articles/[slug]/page";
import { generateStaticParams as getMediaSlugs } from "@/media/[slug]/page";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = process.env.NEXT_PUBLIC_URL || "https://iao-seattle.vercel.app";

	// **Static Pages (Manually Defined)**
	const staticRoutes = ["/", "/about", "/media", "/articles", "/contact", "/careers", "/careers/apply", "/careers/apply/success", "/services"].map((path) => ({
		url: `${baseUrl}${path}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: path === "/" ? 1 : 0.8,
	}));

	// **Fetch Dynamic Slugs Using `generateStaticParams`**
	const articleSlugs = await getArticleSlugs();
	const mediaSlugs = await getMediaSlugs();

	// **Convert Dynamic Slugs to Sitemap URLs**
	const dynamicRoutes = [
		...articleSlugs.map(({ slug }) => ({
			url: `${baseUrl}/articles/${slug}`,
			lastModified: new Date(),
			changeFrequency: "daily" as const,
			priority: 0.7,
		})),
		...mediaSlugs.map(({ slug }) => ({
			url: `${baseUrl}/media/${slug}`,
			lastModified: new Date(),
			changeFrequency: "weekly" as const,
			priority: 0.6,
		})),
	];

	// **Return Sitemap**
	return [...staticRoutes, ...dynamicRoutes];
}
