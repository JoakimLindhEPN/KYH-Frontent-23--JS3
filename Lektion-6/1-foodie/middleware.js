import { NextResponse } from 'next/server'
import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';



const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)'
]);

export default clerkMiddleware((auth, req) => {

  if (req.nextUrl.pathname.startsWith('/api')) {
    const allowedOrigins = ['*']
   
    const corsOptions = {
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }

    // Check the origin from the request
    const origin = req.headers.get('origin') ?? ''
    const isAllowedOrigin = allowedOrigins.includes(origin) || allowedOrigins.includes('*')
  
    // Handle preflighted requests
    const isPreflight = req.method === 'OPTIONS'
  
    if (isPreflight) {
      const preflightHeaders = {
        ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
        ...corsOptions,
      }
      return NextResponse.json({}, { headers: preflightHeaders })
    }
  
    // Handle simple requests
    const response = NextResponse.next()
  
    if (isAllowedOrigin) {
      response.headers.set('Access-Control-Allow-Origin', origin)
    }
  
    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value)
    })
  
    return response
  }

  else {
    
    if (isProtectedRoute(req)) auth().protect();
  }

});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};