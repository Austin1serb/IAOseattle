// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const res = NextResponse.next();
	const referer = req.headers.get("referer") ?? "";
	const url = new URL(req.url);
	const fromParam = url.searchParams.get("src") === "mpire";

	if (referer.includes("mpiregrowth.com") || fromParam) {
		// non-HttpOnly so the client can read pre-paint
		res.cookies.set({
			name: "from_mpire",
			value: "1",
			path: "/",
			sameSite: "lax",
			secure: true,
			maxAge: 60 * 60 * 24 * 7,
			httpOnly: false,
		});
	}
	return res;
}

// IMPORTANT: exclude static assets and images (matcher runs *before* routing)
export const config = {
	matcher: [
		// run on everything *except* these:
		"/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|assets/|images/|api/health).*)",
	],
};
