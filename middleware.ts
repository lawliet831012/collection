// /middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  // requestHeaders.set('x-url', request.nextUrl.pathname);

  return NextResponse.next({
    headers: requestHeaders,
  });
}
