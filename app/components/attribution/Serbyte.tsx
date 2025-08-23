import Link from "next/link";

export const Serbyte: React.FC = () => {
	return (
		<>
			<Link
				href="https://serbyte.net"
				target="_blank"
				className="text-slate-200 font-light text-decoration-none transition-color duration-200 text-center block text-base"
				aria-label="Visit Serbyte Development"
			>
				Serbyte Development
			</Link>
			<div className="flex flex-wrap gap-4 p-4 items-center justify-center">
				<Link
					href="https://serbyte.net/services"
					className="text-slate-200 font-light text-decoration-none transition-color duration-200"
					aria-label="View Serbyte Services"
				>
					Web Design
				</Link>
				<Link
					href="https://serbyte.net/projects"
					className="text-slate-200 font-light text-decoration-none transition-color duration-200"
					aria-label="View Serbyte Projects"
				>
					SEO
				</Link>
				<Link
					href="https://serbyte.net/insights"
					className="text-slate-200 font-light text-decoration-none transition-color duration-200"
					aria-label="Read Serbyte Blog"
				>
					Content Generation
				</Link>
				<Link
					href="https://serbyte.net/contact"
					className="text-slate-200 font-light text-decoration-none transition-color duration-200"
					aria-label="Contact Serbyte"
				>
					Contact Serbyte
				</Link>
			</div>
		</>
	);
};
