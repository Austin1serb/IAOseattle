import React from 'react';
import Link from 'next/link';

interface ArticleItemProps {
    title: string;
    slug: string;
    description: string;
    date: string;
    content: string;
    id: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({
    title,
    slug,
    description,
    date,
    content,
    id,
}) => {
    return (
        <div className="bg-slate-100 rounded-lg shadow-xl overflow-hidden flex flex-col justify-between items-center w-full h-[325px] max-w-[425px] group hover:scale-[98%] transition-all duration-300 group">
            <header aria-label='article-card-header'>
                <div className="p-4 h-full" aria-label='article-card-body-text '>
                    <Link className='h-full   hover:text-blue-600 transition duration-300 ' aria-label={`Link to article ${title}`} href={`/articles/${slug}`}>
                        <div className="overflow-hidden relative">
                            <div className="line-clamp-combined line-clamp-6 h-40 ">
                                <h2 className="text-xl font-bold mb-2  group-hover:animate-shine">{title}</h2>
                                <p className="text-gray-600">
                                    {description}
                                </p>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-l from-slate-100"></div>
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

export default ArticleItem;