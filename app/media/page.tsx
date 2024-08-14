'use client'
import React, { useEffect, useState } from 'react';
import VideoSection from '../components/VideoSection';
import Pagination from './MediaComponents/Pagination';
import styles from './MediaItem.module.css';
import dynamic from 'next/dynamic';
import MediaItemSkeleton from './MediaComponents/MediaItemSkeleton';
import ScrollOnLoad from '../components/utils/ScrollOnLoad';

const MediaItem = dynamic(() => import('./MediaComponents/MediaItem'), {
    ssr: true,
    loading: () => <MediaItemSkeleton />,
});

const newsItems = [
    {
        title: 'Private Downtown Seattle Security Stopgap',
        slug: 'private-downtown-seattle-security-stopgap',
        description: 'Iron and Oak security is providing interim security services in downtown Seattle amidst police staffing shortages.',
        url: 'https://i.imgur.com/2Q2eaGq.jpeg',
        imageUrl: 'https://mynorthwest.com/wp-content/uploads/2022/02/private-security-rantz-900-900x506.jpg',
        date: 'February 10, 2022',
    },
    {
        title: 'Downtown Seattle Association Hires Private Security Guards Amid Police Staffing Issues',
        slug: 'downtown-seattle-association-hires-private-security-guards-amid-police-staffing-issues',
        description: 'The Downtown Seattle Association has hired private security guards to address safety concerns due to staffing shortages in the Seattle Police Department.',
        url: 'https://komonews.com/news/local/downtown-seattle-association-hires-private-security-guards-amid-police-staffing-issues',
        imageUrl: 'https://komonews.com/resources/media/eb09d7de-4c5b-4f2d-9b1d-4f12db7a7798-large16x9_Security.jpg',
        date: 'July 28, 2023',
        videoEmbed: '<iframe src="https://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/b206af068557454bb976a818278226d1.m3u8&autostart=true"  frameborder="0" scrolling="auto" loading="lazy"></iframe>'
    },
    {
        title: "Private Security & SPD Patrols",
        slug: "private-security-spd-patrols",
        url: "https://downtownseattle.org/programs-services/metropolitan-improvement-district/downtown-ambassadors/private-security-spd-patrols/",
        imageUrl: "https://downtownseattle.org/app/uploads/2022/06/programs-services-mid-renewal-202206-services-iron-oak-4x3-v1.jpg",
        date: "July 30, 2024",
        description: "Iron & Oak provides over 800 hours of private security weekly and supports SPD patrols in Downtown Seattle. This partnership enhances safety for residents, workers, and visitors, with Iron & Oak officers working alongside MID ambassadors and supporting community events."
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
        title: 'Person sought in connection to shooting that killed 2, injured 1 in Capitol Hill',
        slug: 'person-sought-in-connection-to-shooting-that-killed-2-injured-1-in-capitol-hill',
        url: 'https://komonews.com/news/local/seattle-gun-violence-fatal-shooting-capitol-hill-seattle-police-department-adrian-diaz-king-county-iron-oak-security-guards#',
        videoEmbed: '<iframe src="https://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/a669121946f448a5b4a3e9fd07487482.m3u8&autostart=true" frameborder="0" scrolling="auto" loading="lazy"></iframe>',
        imageUrl: '',
        date: 'May 1, 2023',
        description: 'Seattle police are searching for a suspect connected to a shooting in Capitol Hill that resulted in two fatalities and one critical injury. The incident occurred at Cal Anderson Park, marking the second deadly shooting in the area this month.'
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
        title: "A Call for Security: Safety Concerns Around Downtown Seattle",
        slug: "a-call-for-security-downtown-seattle",
        url: 'https://www.bizjournals.com/seattle/news/2024/03/11/seattle-businesses-spend-millions-private-security.html',
        imageUrl: "https://media.bizj.us/view/img/12703991/aleksandr-butowicz-iron-oak-06*900x506x4200-2368-0-416.jpg",
        date: "March 11, 2024",
        description: "Private security costs in downtown Seattle have surged by up to 400%, prompting concerns from building owners. Aleksandr Butowicz, founder of Iron & Oak Protective Services, discusses the impact of rising security expenses in the area.",
    },

    {
        title: 'Backs Against the Wall: Ballard Business Owners Throw Town Hall to Combat Crime',
        slug: 'backs-against-wall-ballard-business-owners-throw-town-hall-combat-crime',
        description: 'Business owners in Ballard are organizing a town hall meeting to address rising crime rates and discuss potential solutions.',
        url: 'https://mynorthwest.com/3785043/backs-against-wall-ballard-business-owners-throw-town-hall-combat-crime/',
        imageUrl: 'https://mynorthwest.com/wp-content/uploads/2021/11/damageballard-900x506-1-900x506.jpg',
        date: 'July 28, 2023',
        videoUrl: ''
    },
    {
        title: 'Private Security Companies See Massive Demand for Service, Struggle to Hire More Officers',
        slug: 'private-security-companies-see-massive-demand-for-service-struggle-to-hire-more-officers',
        description: 'Amid rising crime rates, private security companies are experiencing a surge in demand for their services but are facing challenges in hiring additional officers.',
        url: 'https://komonews.com/news/local/private-security-companies-see-massive-demand-for-service-struggle-to-hire-more-officers',
        imageUrl: '',
        date: 'April 14, 2023',
        videoEmbed: '<iframe src="https://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/464b0c8253b0492d83e19c90f9be5e2a.m3u8&autostart=true" frameborder="0" scrolling="auto" loading="lazy"></iframe>'
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
        slug: 'from-odd-fellows-to-cal-anderson-park-the-rise-of-private-security-on-capitol-hill',
        title: 'From Odd Fellows to Cal Anderson Park, the Rise of Private Security on Capitol Hill',
        url: 'https://www.capitolhillseattle.com/2020/09/from-odd-fellows-to-cal-anderson-park-the-rise-of-private-security-on-capitol-hill/',
        description: "The rise of private security on Capitol Hill as city parks hire patrols and clashes occur between private guards and protesters.",
        imageUrl: 'https://i0.wp.com/www.capitolhillseattle.com/wp-content/uploads/2020/06/CHSBLMJune72020-27.jpg?w=1168&ssl=1',
        date: 'September 4, 2020',
        videoEmbed: '', // No video embed provided
    },
    {
        title: '‘My heart really broke’: Security guard describes moments after Belltown shooting',
        slug: 'my-heart-really-broke-security-guard-describes-moments-helping-eina-kwon-after-belltown-shooting',
        description: 'Security guard Randy Norberg describes his harrowing experience helping Eina Kwon after a tragic shooting in Belltown. Norberg, a supervisor with <strong>Iron and Oak</strong>, was the first to respond and provided critical aid before police arrived.',
        url: 'https://www.king5.com/article/news/local/seattle/security-guard-belltown-shooting-victim-eina-kwon/281-dc81a3cc-d791-44cc-9591-3ed5eff6d9e6',
        imageUrl: '',
        date: 'June 21, 2023',
        videoEmbed: '<iframe style="border:1px solid #e6e6e6" src="https://www.king5.com/embeds/video/responsive/281-997fdec1-6ee7-4349-81e0-a11d7f0bfa52/iframe" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>',
    },
    {
        title: 'Downtown Seattle Association hires private security guards amid police staffing issues',
        slug: 'downtown-seattle-association-hires-private-security-guards-amid-police-staffing-issues',
        description: 'In response to rising crime and police staffing issues, the Downtown Seattle Association has hired private security guards to patrol Third Avenue. The move comes amid concerns about safety and a dwindling police presence in the area.',
        url: 'https://komonews.com/news/local/downtown-seattle-association-hires-private-security-guards-amid-police-staffing-issues',
        imageUrl: '',
        date: 'February 1, 2022',
        videoEmbed: '<iframe src="https://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/b206af068557454bb976a818278226d1.m3u8&autostart=true" frameborder="0" scrolling="auto" loading="lazy"></iframe>'
    },

    {
        title: 'What Downtown Seattle Says about Downtown Seattle',
        slug: 'what-downtown-seattle-says-about-the-state-of-downtown-seattle',
        url: 'https://www.seattlemet.com/news-and-city-life/2022/03/what-downtown-seattle-says-about-the-state-of-downtown-seattle',
        imageUrl: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2333,w_3500,x_0,y_0/c_limit,dpr_2,f_auto,fl_lossy,q_80,w_1479/emoji-seattle-01_yac8ly.png',
        date: 'March 30, 2022',
        description: `Amidst concerns about crime, addiction, and homelessness, residents and workers offer their insights, revealing a mix of optimism and skepticism about the city's response to these issues.
        `
    },
    {
        title: "Efforts to clean up crime in Downtown Seattle continue; business owners still see threats",
        slug: "efforts-to-clean-up-crime-in-downtown-seattle-continue-business-owners-still-see-threats",
        url: "https://komonews.com/news/local/efforts-to-clean-up-crime-in-downtown-seattle-continue-business-owners-still-see-threats#",
        videoEmbed: "<iframe src=\"https://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/77dcc4c03d4a4543bdc798d44eef6057.m3u8&autostart=true\" width=\"640\" height=\"360\" frameborder=\"0\" scrolling=\"auto\" loading=\"lazy\"></iframe>",
        imageUrl: "https://komonews.com/resources/media2/c77dcc4c03d4a4543bdc798d44eef6057.jpg",
        date: "April 23, 2022",
        description: " Iron and Oak Protective Services is actively involved in patrolling and improving conditions, but challenges remain in ensuring long-term safety."
    },
    {
        title: 'SPD officer injured, two arrested as police step into clash between private security & protesters',
        slug: 'spd-says-officer-injured-two-arrested-as-police-step-into-clash-between-private-security-team-and-capitol-hill-protesters-update',
        url: 'https://www.capitolhillseattle.com/2020/08/spd-says-officer-injured-two-arrested-as-police-step-into-clash-between-private-security-team-and-capitol-hill-protesters/',
        imageUrl: 'https://i0.wp.com/www.capitolhillseattle.com/wp-content/uploads/2020/08/Mitgang_200812_0132-scaled.jpg?w=1168&ssl=1',
        date: 'August 13, 2020',
        description: 'An officer was injured and two people arrested in a clash between protesters and private security on Capitol Hill. Tensions rose after a security vehicle nearly hit demonstrators, leading to police intervention.'
    },

    {
        title: 'I wish I could’ve saved her: Security officer recalls fatal shooting of pregnant woman',
        slug: 'i-wish-i-couldve-saved-her-security-officer-recalls-fatal-shooting-of-pregnant-woman-in-seattle-randy-norberg-eina-kwon-suspect-cordell-goosby-shots-fired-gunshot-wounds',
        description: 'Security officer Randy Norberg recounts his harrowing experience helping Eina Kwon after she was shot while pregnant. The tragic incident has left a lasting impact on Norberg and highlights ongoing concerns about safety in Seattle.',
        url: 'https://cbsaustin.com/news/nation-world/i-wish-i-couldve-saved-her-security-officer-recalls-fatal-shooting-of-pregnant-woman-in-seattle-randy-norberg-eina-kwon-suspect-cordell-goosby-shots-fired-gunshot-wounds',
        imageUrl: '',
        date: 'June 21, 2023',
        videoEmbed: '<iframe src="https://sinclairstoryline.com/resources/embeds/jw8-embed.html?client=googima&file=https://content.uplynk.com/88f699c6d79c41e4af3e6cdf186b3709.m3u8&autostart=true"  frameborder="0" scrolling="auto" loading="lazy"></iframe>'
    },

    {
        title: "Union Security Officers Rally for Respect",
        slug: "union-security-officers-rally-for-respect",
        imageUrl: "https://southseattleemerald.com/wp-content/uploads/2022/03/SecuritySign_WestlakePark_SecurityOfficerRally_312022_AlexGarland-1024x683.jpg",
        url: 'https://southseattleemerald.com/2022/03/21/union-security-officers-rally-for-respect/',
        date: "March 21, 2022",
        description: "Security officers rally at Westlake Park to demand better union contracts addressing safety, training, and workplace conditions. The event highlights the challenges faced by security personnel and their calls for respect and fair treatment."
    }


];

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
        <main className="w-screen min-w-[350px]">
            <ScrollOnLoad scrollPosition={150} />
            <header aria-label="Media and Articles Header">
                <VideoSection
                    videoSrc={'/seattleVidMedia.webm'}
                    size="1/3"
                    text="Media & Articles"
                    homePage={false}
                />
            </header>

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