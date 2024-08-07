import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Extract the token from cookies
    const token = request.cookies.get('auth_token');

    // Define the paths that need authentication
    const protectedPaths = ['/board/:path*'];

    // Check if the request URL matches any protected paths
    const isProtectedPath = protectedPaths.some(path => 
        request.nextUrl.pathname.startsWith(path.replace(':path*', ''))
    );

    // If the path is protected and no token is present, redirect to login
    if (isProtectedPath && !token) {
        return NextResponse.redirect(new URL('/auth/sign-in', request.url));
    }

    // Allow the request to proceed if token is present or the path is not protected
    return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
    matcher: ['/board/:path*'], // List the paths to apply the middleware
};
