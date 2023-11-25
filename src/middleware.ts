import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {cookies} from "next/headers";

export function middleware(request: NextRequest) {
    const accessToken: string | undefined = cookies().get("access_token")?.value;

    if (accessToken && request.nextUrl.pathname === "/auth") {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    if (!accessToken && request.nextUrl.pathname !== "/auth") {
        return NextResponse.redirect(new URL('/auth', request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/auth', '/management/:path*'],
}