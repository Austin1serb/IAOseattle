// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const url = req.nextUrl;
	const res = NextResponse.next();

	// DEBUG: prove the middleware executed
	res.headers.set("x-mw", "1");

	// middleware.ts (changes only)
	const referer = req.headers.get("referer") ?? "";
	const fromParam = ["mpire", "serbyte", "embed"].includes(url.searchParams.get("src") ?? "");

	if (referer.includes("mpiregrowth.com") || referer.includes("serbyte.net") || fromParam) {
		res.cookies.set({
			name: "from_mpire", // keep same flag, it's just "from partner"
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

// TEMP while debugging: run on everything (no matcher quirks)
export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|assets/|images/|api/health).*)"] };
