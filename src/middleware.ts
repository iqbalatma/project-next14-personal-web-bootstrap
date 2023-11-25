import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {cookies} from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const accessToken = cookies().get("access_token")?.value
    if (!accessToken) {
        return NextResponse.redirect(new URL('/auth', request.url))
    }
    if (request.nextUrl.pathname === "/auth"){
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/auth'],
}