import Link from "next/link";

const Footer = () => {
	return (
		<>
			<footer className="bg-blue-800 text-gray-200 py-12">
				<div className="container mx-auto px-4 w-full">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-12">
						<div>
							<h2 className="text-white text-2xl mb-4 t">Company</h2>
							<ul className=" grid grid-cols-2 gap-y-2">
								<li>
									<Link
										href="/about"
										className="hover:underline"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="/about#team"
										className="hover:underline"
									>
										Our Team
									</Link>
								</li>
								<li>
									<Link
										href="/careers"
										className="hover:underline"
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="hover:underline"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-white text-2xl mb-4">Resources</h2>
							<ul className="space-y-2">
								<li>
									<Link
										href="/contact#faq"
										className="hover:underline"
									>
										FAQ
									</Link>
								</li>
								<li>
									<Link
										href="/media"
										className="hover:underline"
									>
										Media & Articles
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h2 className="text-white text-2xl mb-4">Legal</h2>
							<ul className="space-y-2">
								<li>
									<Link
										href="/terms"
										className="hover:underline"
									>
										Terms of Service
									</Link>
								</li>
								<li>
									<Link
										href="/privacy"
										className="hover:underline"
									>
										Privacy Policy
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="text-center mt-8 border-t border-gray-700 pt-6">
						<p>&copy; {new Date().getFullYear()} Iron & Oak LLC. All rights reserved.</p>
					</div>
				</div>
			</footer>
			<div
				className="bg-blue-800"
				style={{ width: "100%", padding: "10px", color: "#f2f2f2", fontWeight: "100", fontSize: "14px" }}
			>
				<Link
					href="https://serbyte.net"
					target="_blank"
					rel="noopener"
					style={{ color: "#f2f2f2", fontWeight: "100", textDecoration: "none", transition: "color 0.2s", textAlign: "center", display: "block" }}
					aria-label="Visit Serbyte Development"
				>
					Serbyte Development
				</Link>
				<div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", padding: "0 20px" }}>
					<Link
						href="https://serbyte.net/services"
						style={{ color: "#f2f2f2", fontWeight: "100", textDecoration: "none", transition: "color 0.2s" }}
						aria-label="View Serbyte Services"
					>
						Web Design
					</Link>
					<Link
						href="https://serbyte.net/projects"
						style={{ color: "#f2f2f2", fontWeight: "100", textDecoration: "none", transition: "color 0.2s" }}
						aria-label="View Serbyte Projects"
					>
						SEO
					</Link>
					<Link
						href="https://serbyte.net/insights"
						style={{ color: "#f2f2f2", fontWeight: "100", textDecoration: "none", transition: "color 0.2s" }}
						aria-label="Read Serbyte Blog"
					>
						Content Generation
					</Link>
					<Link
						href="https://serbyte.net/contact"
						style={{ color: "#f2f2f2", fontWeight: "100", textDecoration: "none", transition: "color 0.2s" }}
						aria-label="Contact Serbyte"
					>
						Contact Serbyte
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
