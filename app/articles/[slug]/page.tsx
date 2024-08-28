import Socials from "@/components/Socials";
import Link from "next/link";
import { articleData } from "../articlesComponents/ArticleData";




// Generate static params for each article
export async function generateStaticParams() {
    return articleData.map((article) => ({
        slug: article.slug,
    }));
}
export default function Page({ params }: { params: { slug: string } }) {

    
    const { slug } = params;
    const article = articleData.find(article => article.slug === slug);


    if (!article || !article?.content) {
        return (
            <div className="p-16 ">
                <h1 className="text-4xl font-bold text-blue-600 my-12">Article Not Found</h1>
                <Link href="/articles" className='text-blue-600 w-fit transition-all duration-150 hover:underline hover:text-blue-800 hover:bg-blue-50 rounded-md px-1 -mx-1 py-3 flex sm:-mb-6 items-center border cursor-pointer '>
                    <svg className="m-1 -translate-y-[1px]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.215em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
                    Go Back to Articles
                </Link>
            </div>
        );
    }

    return (
        <main className='bg-slate-200'>
            <section className="container mx-auto px-4 h-auto w-full min-w-[350px]">
                <div className="p-4 pt-0">
                    <div aria-label='News-Text' className="pt-4 prose prose-lg">
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                    <div className="mt-8 flex sm:flex-row flex-col justify-between items-start sm:items-center sm:space-y-4 space-y-16">
                        <Link href="/articles" className='text-blue-600 transition-all duration-150 hover:underline hover:text-blue-800 hover:bg-blue-50 rounded-md px-1 -mx-1 py-3 flex sm:-mb-6 items-center border cursor-pointer'>
                            <svg className="m-1 -translate-y-[1px]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
                            Go Back to Articles
                        </Link>
                        <Socials title={article.title} slug={article.slug} />
                    </div>
                </div>
            </section>
        </main>
    );
}