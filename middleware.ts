import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const url = req.nextUrl;
	const res = NextResponse.next();

	const referer = (req.headers.get("referer") ?? "").toLowerCase();
	const src = (url.searchParams.get("src") ?? "").toLowerCase();
	const fromParam = src === "mpire" || src === "serbyte" || src === "embed";

	if (referer.includes("mpiregrowth.com") || referer.includes("serbyte.net") || fromParam) {
		res.cookies.set({
			name: "from_mpire", // partner-flag cookie
			value: "1",
			path: "/",
			sameSite: "lax", // reliable for top-level nav
			secure: true,
			maxAge: 60 * 60 * 24 * 70, // 70 days
			httpOnly: false, // must be readable pre-paint
		});
	}
	return res;
}

// Exclude static assets/images
export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|assets/|images/|api/health).*)"],
};
