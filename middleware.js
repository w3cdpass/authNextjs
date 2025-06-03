import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = 'your-hardcoded-secret'; // Replace with env in prod

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Allow access to signin routes
  if (pathname.startsWith('/signin') || pathname.startsWith('/api/users/signin')) {
    return NextResponse.next();
  }

  // Redirect if no token
  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  try {
    // Decode using jose (works in Edge runtime)
    const secret = new TextEncoder().encode(JWT_SECRET);
    await jwtVerify(token, secret); // throws if invalid
    return NextResponse.next(); // valid token
  } catch (err) {
    console.error('JWT verification failed:', err.message);
    return NextResponse.redirect(new URL('/signin', request.url));
  }
}

export const config = {
  matcher: ['/user/:userid/dashboard/:path*'], // protect all /dashboard routes
};
