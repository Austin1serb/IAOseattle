import Link from "next/link";

export const Mpire: React.FC = () => {
	return (
		<>
			<Link
				href="https://mpiregrowth.com"
				target="_blank"
				style={{ color: "#f2f2f2", fontWeight: "100", textDecoration: "none", transition: "color 0.2s", textAlign: "center", display: "block" }}
				aria-label="Visit Mpire Marketing"
			>
				Mpire Marketing
			</Link>
			<div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", padding: "0 20px" }}>
				<Link
					href="https://mpiregrowth.com/services"
					style={{ color: "#f2f2f2", fontWeight: "100", textDecoration: "none", transition: "color 0.2s" }}
					aria-label="View Mpire Services"
				>
					Web Design
				</Link>
				<Link
					href="https://mpiregrowth.com/projects"
					style={{ color: "#f2f2f2", fontWeight: "100", textDecoration: "none", transition: "color 0.2s" }}
					aria-label="View Mpire Projects"
				>
					SEO
				</Link>
				<Link
					href="https://mpiregrowth.com/contact"
					style={{ color: "#f2f2f2", fontWeight: "100", textDecoration: "none", transition: "color 0.2s" }}
					aria-label="Contact Mpire"
				>
					Contact Mpire
				</Link>
			</div>
		</>
	);
};
