import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("token");

    if (!token) {
        return NextResponse.redirect(new URL("/", request.url));
    } else {
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        "/blog",
        "/blog/:path*",
        "/departments",
        "/doctor/:path*",
        "/doctorDetails/:path*",
        "/doctorList",
    ],
};
