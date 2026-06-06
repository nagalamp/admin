
// middleware.ts

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    const { pathname } = request.nextUrl;

    const publicRoutes = ["/login"];

    const protectedRoutes = [
        "/dashboard",
        "/drivers",
        "/vehicletypes",
    ];

    const isPublicRoute = publicRoutes.some(
        (route) =>
            pathname === route ||
            pathname.startsWith(`${route}/`)
    );

    const isProtectedRoute = protectedRoutes.some(
        (route) =>
            pathname === route ||
            pathname.startsWith(`${route}/`)
    );

    // Not logged in and trying to access protected page
    if (isProtectedRoute && !token) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }

    // Already logged in and trying to access login page
    if (isPublicRoute && token) {
        return NextResponse.redirect(
            new URL("/dashboard", request.url)
        );
    }

    // Already logged in and trying to access login page
    if (isPublicRoute && token) {
        return NextResponse.redirect(
            new URL("/vehicletypes", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/login",
        "/dashboard/:path*",
        "/drivers/:path*",
    ],
};

