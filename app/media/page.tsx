// /app/media/page.tsx

import React from 'react';
import MediaItem from '../components/MediaItem';
import VideoSection from '../components/VideoSection';

const newsItems = [
    {
        title: 'Private Downtown Seattle Security Stopgap',
        slug: 'private-downtown-seattle-security-stopgap',
        description: 'Iron and Oak security is providing interim security services in downtown Seattle amidst police staffing shortages.',
        url: 'https://mynorthwest.com/3343034/private-downtown-seattle-security-stopgap/',
        imageUrl: 'https://mynorthwest.com/wp-content/uploads/2022/02/private-security-rantz-900-900x506.jpg',
        date: 'February 10, 2022',
    },
    {
        title: 'Seattle Business Owners Turn to Private Security',
        slug: 'seattle-business-owners-turn-private-security',
        description: 'With rising crime and police staffing issues, businesses are increasingly relying on private security to ensure safety.',
        url: 'https://mynorthwest.com/3343034/private-downtown-seattle-security-stopgap/',
        imageUrl: '',
        date: 'June 3, 2024',
    },
    {
        title: 'Downtown Seattle Spends $564,000 on Private Security for 3rd Avenue',
        slug: 'downtown-seattle-spends-private-security-3rd-ave',
        description: 'The Downtown Seattle Association has allocated significant funds towards hiring private security, including Iron and Oak, to maintain safety along 3rd Avenue due to police staffing shortages.',
        url: 'https://mynorthwest.com/3330849/downtown-seattle-spends-private-security-3rd-ave/',
        imageUrl: 'https://mynorthwest.com/wp-content/uploads/2022/01/3rd_900-900x506.jpg',
        date: 'February 1, 2022',
    },
    {
        title: 'Downtown Bus Stop Closes Amid Seattle Police and Mayoral Crime Initiative',
        slug: 'downtown-bus-stop-closes-seattle-police-mayoral-crime-initiative',
        description: 'A major bus stop in downtown Seattle has been closed as part of a new crime initiative by the Seattle Police and the mayor\'s office, with Iron and Oak security assisting in maintaining public safety during the transition.',
        url: 'https://mynorthwest.com/3406360/downtown-bus-stop-closes-seattle-police-mayoral-crime-initiative/',
        imageUrl: 'https://mynorthwest.com/wp-content/uploads/2022/03/pike_900-900x506.jpg',
        date: 'June 3, 2024',
    },
    {
        title: 'Backs Against the Wall: Ballard Business Owners Throw Town Hall to Combat Crime',
        slug: 'backs-against-wall-ballard-business-owners-throw-town-hall-combat-crime',
        description: 'Business owners in Ballard are organizing a town hall meeting to address rising crime rates and discuss potential solutions.',
        url: 'https://mynorthwest.com/3785043/backs-against-wall-ballard-business-owners-throw-town-hall-combat-crime/',
        imageUrl: 'https://mynorthwest.com/wp-content/uploads/2021/11/damageballard-900x506-1-900x506.jpg',
        date: 'July 28, 2023'
        ,videoUrl: ''
    },
    {
        title: 'Private Security Companies See Massive Demand for Service, Struggle to Hire More Officers',
        slug: 'private-security-companies-see-massive-demand-for-service-struggle-to-hire-more-officers',
        description: 'Amid rising crime rates, private security companies are experiencing a surge in demand for their services but are facing challenges in hiring additional officers.',
        url: 'https://komonews.com/news/local/private-security-companies-see-massive-demand-for-service-struggle-to-hire-more-officers',
        imageUrl: 'https://komonews.com/resources/media/eb09d7de-4c5b-4f2d-9b1d-4f12db7a7798-large16x9_Security.jpg',
        date: 'April 14, 2023',
        videoEmbed: '<iframe src="https://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/464b0c8253b0492d83e19c90f9be5e2a.m3u8&autostart=false" width="390" height="215" frameborder="0" scrolling="auto" loading="lazy"></iframe>'
    },
    {
        title: 'Downtown Seattle Association Hires Private Security Guards Amid Police Staffing Issues',
        slug: 'downtown-seattle-association-hires-private-security-guards-amid-police-staffing-issues',
        description: 'The Downtown Seattle Association has hired private security guards to address safety concerns due to staffing shortages in the Seattle Police Department.',
        url: 'https://komonews.com/news/local/downtown-seattle-association-hires-private-security-guards-amid-police-staffing-issues',
        imageUrl: 'https://komonews.com/resources/media/eb09d7de-4c5b-4f2d-9b1d-4f12db7a7798-large16x9_Security.jpg',
        date: 'July 28, 2023',
        videoEmbed: '<iframe src="https://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/b206af068557454bb976a818278226d1.m3u8&autostart=false" width="390" height="215" frameborder="0" scrolling="auto" loading="lazy"></iframe>'
    }

];

const Media: React.FC = () => {
    return (
        <div>
            <VideoSection videoSrc={'seattleVidMedia.webm'} size={'1/3'} includeBrand={true} />
            <div className="container mx-auto p-4">
                <div className='transform md:-translate-y-40 -translate-y-20'>
                    <h1 className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-center">Media & Articles</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <MediaItem
                            key={index}
                            slug={item.slug}
                            title={item.title}
                            description={item.description}
                            url={item.url}
                            imageUrl={item.imageUrl}
                            videoUrl={item.videoUrl}
                            videoEmbed={item.videoEmbed}
                            date={item.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Media;