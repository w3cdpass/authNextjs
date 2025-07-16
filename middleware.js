import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = 'your-hardcoded-secret'; // Use env var in production

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;

  // Redirect root to /home
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // Allow public access to signin pages
  if (
    pathname.startsWith('/signin') ||
    pathname.startsWith('/candidatesignin') ||
    pathname.startsWith('/api/users/signin') ||
    pathname.startsWith('/api/candidate/signin')
  ) {
    return NextResponse.next();
  }

  // Protect user dashboard
  if (pathname.startsWith('/user/')) {
    if (!token) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jwtVerify(token, secret);
      return NextResponse.next(); // Valid token
    } catch (err) {
      console.error('JWT verification failed for user:', err.message);
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }

  // Protect candidate dashboard
  if (pathname.startsWith('/canidate/')) {
    if (!token) {
      return NextResponse.redirect(new URL('/candidatesignin', request.url));
    }

    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jwtVerify(token, secret);
      return NextResponse.next(); // Valid token
    } catch (err) {
      console.error('JWT verification failed for candidate:', err.message);
      return NextResponse.redirect(new URL('/candidatesignin', request.url));
    }
  }

  if (pathname.startsWith('/jobs')) {
    if (!token) {
      return NextResponse.redirect(new URL('/candidatesignin', request.url))
    }
    try {
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jwtVerify(token, secret);
      return NextResponse.next(); // Valid token
    } catch (err) {
      console.error('JWT verification failed for candidate:', err.message);
      return NextResponse.redirect(new URL('/candidatesignin', request.url));
    }
  }

  // Default allow
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/user/:userid/dashboard/:path*',
    '/canidate/:userid/dashboard/:path*',
    '/jobs/:path*'
  ],
};
