import Image from "next/image";
import Link from "next/link";

export const UnderConstructionOverlay: React.FC = () => {
	return (
		<div className="fixed inset-0 bg-gradient-to-br from-slate-600/75 via-slate-800/75 to-slate-900/50 backdrop-blur-3xl z-[9999999] flex flex-col items-center justify-center text-white">
			<div className="max-w-2xl mx-auto px-8 text-center sm:space-y-8">
				{/* Construction Icon */}
				<div className="flex justify-center mb-6">
					<div className="w-28 h-28 bg-orange-500/50 rounded-full flex items-center justify-center border-2 border-orange-500 p-5">
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth={0}
							viewBox="0 0 576 512"
							height="100%"
							width="100%"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z" />
						</svg>
					</div>
				</div>

				{/* Main Heading */}
				<div className="space-y-4">
					<h1 className="sm:text-6xl text-4xl md:text-7xl font-bold bg-gradient-to-l from-slate-500 via-40% via-slate-300 to-slate-100 bg-clip-text text-transparent">Under Construction</h1>
					<div className="w-32 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
				</div>

				{/* Message */}
				<div className="space-y-4 ">
					<p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">We&apos;re working hard to bring you something amazing.</p>
					<p className="text-lg text-slate-400">Please check back soon for updates.</p>
				</div>

				{/* Loading Animation */}
				<div className="flex justify-center space-x-2 mt-8">
					<div className="w-3 h-3 bg-slate-50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
					<div className="w-3 h-3 bg-slate-50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
					<div className="w-3 h-3 bg-slate-50 rounded-full animate-bounce"></div>
				</div>
			</div>

			{/* Company Branding */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-nowrap">
				<div className="text-center">
					<p className="text-sm text-slate-300 mb-1.5">Created by</p>
					<Link
						href="https://serbyte.net"
						target="_blank"
						title="Serbyte Development - Website Design, Development & SEO"
						className="flex items-center space-x-2"
					>
						<div className="w-8 h-8 rounded-lg flex items-center justify-center">
							<Image
								src="/serbyte-logo.png"
								alt="Serbyte Development Logo"
								width={32}
								height={32}
								className="rounded-lg"
							/>
						</div>
						<span className="text-lg bg-gradient-to-r from-slate-50 to-slate-300 bg-clip-text text-transparent">Serbyte Development</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
