import { Metadata } from 'next';
import { articleData } from '../articlesComponents/ArticleData';


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const article = articleData.find(article => article.slug === params.slug);

    if (!article) {
        return {
            title: 'Article Not Found - Iron & Oak Protective Services',
            description: 'The article you are looking for does not exist. Please check the URL or explore our other articles.',
            openGraph: {
                title: 'Article Not Found - Iron & Oak Protective Services',
                description: 'The article you are looking for does not exist. Please check the URL or explore our other articles.',
                url: `${process.env.NEXT_PUBLIC_URL}/articles/${params.slug}`,
                images: [
                    {
                        url: '/images/noImage.png',
                        width: 800,
                        height: 600,
                        alt: 'Article Not Found',
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Article Not Found',
                description: 'The article you are looking for does not exist.',
                images: ['/images/noImage.png'],
            },
        };
    }

    const defaultImageUrl = '/images/noImage.png';
    const imageUrl = article.imageUrl || defaultImageUrl;

    return {
        title: `${article.title} - Iron & Oak Protective Services`,
        description: article.description,
        keywords: article.metaTags?.join(', '), // Assuming metaTags is an array of keywords
        openGraph: {
            type: 'article',
            title: article.title,
            description: article.description,
            url: `${process.env.NEXT_PUBLIC_URL}/articles/${article.slug}`,
            images: [
                {
                    url: imageUrl,
                    width: 800,
                    height: 600,
                    alt: article.title,
                },
            ],
            publishedTime: new Date(article.date).toISOString(),
            tags: article.metaTags, // If you have tags, they should be passed here
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.description,
            images: [imageUrl],
        },
    };
}