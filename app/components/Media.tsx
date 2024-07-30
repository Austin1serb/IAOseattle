import Image from 'next/image';
import React from 'react';

interface NewsItem {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    date: string;
}

const newsItems: NewsItem[] = [
    {
        title: 'Company Featured on Local News',
        description: 'Our company was featured on the local news for our community engagement initiatives.',
        url: 'https://example.com/news-1',
        imageUrl: '/images/news-1.jpg',
        date: 'July 28, 2024',
    },
    {
        title: 'Interview with CEO',
        description: 'An in-depth interview with our CEO about the future of the company.',
        url: 'https://example.com/news-2',
        imageUrl: '/images/news-2.jpg',
        date: 'July 15, 2024',
    },
    {
        title: 'Community Impact',
        description: 'Highlighting the positive impact our company has had on the local community.',
        url: 'https://example.com/news-3',
        imageUrl: '/images/news-3.jpg',
        date: 'July 10, 2024',
    },
];

const Media: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Media</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className='className="w-full h-48 object-cover"'>
                        <Image src={item.imageUrl} alt={item.title} fill  />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <a href={item.url} target="_blank" className="text-blue-500 hover:underline">
                                Read more
                            </a>
                        </div>
                        <div className="p-4 bg-gray-100 text-gray-600 text-sm">
                            {item.date}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Media;