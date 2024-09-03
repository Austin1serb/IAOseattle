import Link from 'next/link';
import React from 'react';

const JoinTheTeamCTA: React.FC = () => {
    return (
        <section className="bg-blue-600 py-16">
            <div className="max-w-5xl mx-auto px-8 text-center">
                <h2 className="text-4xl font-semibold text-white mb-4">Join Our Team</h2>
                <p className="text-xl text-slate-100 mb-8">
                    At Iron and Oak, we’re always looking for passionate, dedicated professionals who want to make a difference.
                    If you’re ready to be part of a team that values respect, community, and innovation, we’d love to hear from you.
                </p>
                <Link href="/careers" className="inline-block bg-white text-blue-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300">

                        Explore Careers
                 
                </Link>
            </div>
        </section>
    );
};

export default JoinTheTeamCTA;