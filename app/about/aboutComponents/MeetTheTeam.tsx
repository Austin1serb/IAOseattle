// app/about/MeetTheTeam.tsx
import React from "react";

import { fetchAllOrgChartRecords } from "@/components/utils/fetch";
import TeamMemberCard from "./TeamMemberCard";
import Image from "next/image";
import MeetTheOwner from "./MeetTheOwner";

// Server Component
const MeetTheTeam: React.FC = async () => {
	// Check for required environment variables
	const airtableApiKey = process.env.AIRTABLE_API_KEY;
	const baseId = process.env.AIRTABLE_BASE_ID;
	const tableName = process.env.AIRTABLE_TABLE_ORG;

	let teamMembers: any[] = [];

	// Always use empty data for now to prevent build failures
	// TODO: Re-enable when Airtable API is properly configured in production
	try {
		// if (airtableApiKey && baseId && tableName) {
		// 	teamMembers = await fetchAllOrgChartRecords(airtableApiKey, baseId, tableName);
		// } else {
		// 	console.warn("Missing Airtable environment variables, using empty team data");
		// }
		console.log("Team data fetch disabled to prevent build failures");
		teamMembers = [];
	} catch (error) {
		console.warn("Failed to fetch team members, using empty data:", error);
		teamMembers = [];
	}

	// Filter out members without a preferred name and not in 'Training & Recruitment'
	const filteredMembers = teamMembers.filter(
		(member) => member.fields["Primary Team"] !== "Training & Recruitment" && member.fields["Preferred Name"] && member.fields["Preferred Name"].trim() !== ""
	);

	// Slice the filtered members to only include the first 6
	const displayedMembers = filteredMembers.slice(0, 6);

	return (
		<section
			id="team"
			className="bg-slate-200 sm:py-16"
		>
			<div className="max-w-5xl mx-auto px-8">
				<h2 className="text-5xl lg:text-7xl font-bold text-slate-800 text-center mb-8">
					Meet the <span className="text-blue-500">Team.</span>
				</h2>
				<div>
					<MeetTheOwner />
				</div>
				<div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12">
					{/*{displayedMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}*/}
				</div>
			</div>
		</section>
	);
};

export default MeetTheTeam;
