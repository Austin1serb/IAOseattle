// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const url = req.nextUrl;
	const res = NextResponse.next();

	// DEBUG: prove the middleware executed
	res.headers.set("x-mw", "1");

	const referer = req.headers.get("referer") ?? "";
	const fromParam = url.searchParams.get("src") === "mpire";

	if (referer.includes("mpiregrowth.com") || fromParam) {
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

// TEMP while debugging: run on everything (no matcher quirks)
export const config = { matcher: ["/:path*"] };
