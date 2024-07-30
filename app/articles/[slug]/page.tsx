// app/articles/[slug]/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const articles = [
    {
        slug: 'private-downtown-seattle-security-stopgap',
        title: 'Private Downtown Seattle Security Stopgap',
        description: 'Iron and Oak security is providing interim security services in downtown Seattle amidst police staffing shortages.',
        content: `
            BY DALTON DAY
            Former MyNorthwest Editor

            Private security is increasingly being relied upon in Seattle’s downtown area. The Downtown Business Association says that is only intended to be a stopgap measure until Seattle Mayor Bruce Harrell’s policing plan crystalizes.

            Mayor Harrell announces ‘hotspot’ patrol crime initiative

            Those patrols arrive as the Downtown Seattle Association (DSA) revealed that it has retained a private security firm to adequately provide security to the downtown area over concern that SPD is short staffed.

            “These are dollars we wish we didn’t have to spend,” DSA CEO Jon Scholes told KIRO Newsradio.

            “These are dollars we need to spend in order to attempt to preserve safety and security downtown. And we’re not the only one spending money in this regard. You know, there’s small businesses and property owners that are digging into their own pockets to hire off-duty officers if they can, because those shifts are hard to staff with a department that’s depleted. In addition to hiring private security, this is not the way we should be delivering safety and security for our city.”

            Aleksandr Butowicz, founder of the security company Iron and Oak, contracted by the DSA, tells MyNorthwest that his staff have seen a more robust SPD presence downtown in recent weeks (SPD reports 1,100 officers, with approximately 950 of them deployable, as of early February).

            “We are seeing, in the last last five days, … a tremendous increase in visible police presence. I’m seeing a turn right now that it looks like we have … more police presence,” Butowicz said Tuesday.

            “But visibly, it appears that there are more police in the hotspot areas. So that, in my opinion, will actually reduce the need for private security, because most of these concerns really are something where you could solve it directly with a law enforcement officer, if one were available.”

            Iron and Oak reports that demand for its services and staffing levels are roughly proportional to the decline in uniformed SPD officers. Iron and Oak currently has eight licensed, unarmed security staff on hand.

            “There has been more of a demand for our services for calls that I would say are traditionally SPD’s purview,” Butowicz continued. “We’ve gotten a lot of requests for us to respond to, for example, someone trespassing on a property. I’m certain, … speaking more about DSA, … we’ve never got a call like that; we never had people calling us for those services. And now, that’s actually a somewhat frequent call that we receive when people are looking for help.”

            Looking at the long term, Scholes emphasized that the DSA’s demand for private security is temporary.

            “This is a stopgap measure,” Scholes said on Seattle’s Morning News. “What we believe is really Seattle’s most important streets stretch from Seattle Center, to the county courthouse, to the Pike Place Market.”

            “[These] should be our best streets,” he added. “… It’s going to be a litmus test on our ability as a city, as a community to more effectively deal with these issues.”
        `,
        url: 'https://mynorthwest.com/3343034/private-downtown-seattle-security-stopgap/',
        imageUrl: 'https://mynorthwest.com/wp-content/uploads/2022/02/private-security-rantz-900-900x506.jpg',
        date: 'February 10, 2022',
        videoEmbed: '', // No video for this article
    },
    // Add other articles here...
];

export default function Page({ params }: { params: { slug: string } }) {
    const article = articles.find(article => article.slug === params.slug);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="relative w-full" style={{ height: '400px' }}>
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    layout="fill"
                    objectFit="contain" // Adjust this to "cover" or "contain" as needed
                />
            </div>
            <div className="p-4">
                <h1 className="text-3xl font-bold">{article.title}</h1>
                <p className="text-gray-600 mb-4">{article.date}</p>
                <p className="text-gray-800 mb-4 whitespace-pre-line">{article.content}</p>
                <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                >
                    Read the full article on the news outlet
                </Link>
            </div>
        </div>
    );
}