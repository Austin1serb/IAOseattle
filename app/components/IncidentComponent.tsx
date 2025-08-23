import React from "react";
import IncidentWidget from "./IncidentWidget";

const IncidentComponent: React.FC = () => {
	return (
		<section className="w-full h-full flex justify-around flex-col-reverse items-center md:flex-row sm:px-4 py-20 bg-slate-800">
			<div className="w-full flex items-center justify-center">
				<div className="max-w-lg text-center md:text-left px-2">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Monthly Incident Overview</h2>
					<p className="text-lg text-slate-200 mb-6">Here&apos;s a look at the incidents our team has successfully managed this month.</p>
				</div>
			</div>
			<div className="order-first md:order-last h-full w-full">
				<IncidentWidget />
			</div>
		</section>
	);
};

export default IncidentComponent;
