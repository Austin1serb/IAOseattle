import CustomLink from "@/components/CustomLink";
import React from "react";

const JoinTheTeamCTA: React.FC = () => {
	return (
		<section className="bg-blue-600 py-16">
			<div className="max-w-5xl mx-auto px-8 text-center h-full">
				<h2 className="text-4xl font-semibold text-white mb-4">Join Our Team</h2>
				<p className="text-xl text-slate-100 mb-8">
					At Iron and Oak, we’re always looking for passionate, dedicated professionals who want to make a difference. If you’re ready to be part of a team that values respect, community, and
					innovation, we’d love to hear from you.
				</p>
				<CustomLink
					href="/careers"
					className="inline-block bg-white text-blue-600 py-3 px-8 rounded-md font-semibold  animate-shine transition-all duration-300 overflow-hidden"
				>
					Explore Careers
				</CustomLink>
			</div>
		</section>
	);
};

export default JoinTheTeamCTA;
