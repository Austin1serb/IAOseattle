import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { UnderConstructionOverlay } from "./components/UnderConstructionOverlay";
import Script from "next/script";

//import { Analytics } from '@vercel/analytics/react';
//import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://www.iaoseattle.com"),
	title: "Iron & Oak | Redefining Private Security in Seattle",
	description:
		"Iron & Oak provides innovative, community-focused security solutions in the greater Seattle area. Bridging the gap between public services and local residents, we emphasize respect, trust, and non-aggressive practices to create safer communities.",
	icons: {
		icon: [
			{ url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/images/favicon.ico", sizes: "any", type: "image/x-icon" },
		],
		apple: "/apple-touch-icon.png",
		other: [
			{
				rel: "icon",
				url: "/images/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				rel: "icon",
				url: "/images/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	},
};

// Load Montserrat font
const montserrat = Lexend_Deca({
	subsets: ["latin"],
	variable: "--font-montserrat",
	weight: ["200", "300", "400", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={montserrat.variable}
		>
			<body className="relative">
				<Script
					id="mpire-flag"
					strategy="beforeInteractive"
				>
					{`
      try {
        if (document.cookie.indexOf("from_mpire=1") !== -1) {
          document.documentElement.setAttribute("data-from-mpire","1");
          if (document.body) document.body.setAttribute("data-from-mpire","1");
        }
      } catch(_) {
				console.error("Error setting mpire flag", _);
			 }
    `}
				</Script>
				{/* under construction overlay */}
				<UnderConstructionOverlay />
				<nav className="sticky top-0 z-50 w-full h-[100dvh]">
					<Navbar />
				</nav>
				{children}
				{/*<Analytics/>
        <SpeedInsights/>*/}
				<Footer />
			</body>
		</html>
	);
}
