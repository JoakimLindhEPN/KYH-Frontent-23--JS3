import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';
import { preloadQuery, preloadedQueryResult } from 'convex/nextjs';
import { NextResponse } from 'next/server';
import { api } from './convex/_generated/api';

const isProtectedRoute = createRouteMatcher([
  '/posts',
])

const isAdminRoute = createRouteMatcher([
  '/admin(.*)',
]);


export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req) || isAdminRoute(req)) auth().protect();

  if (isAdminRoute(req)) {
    const { userId } = auth()
    const preloaded = await preloadQuery(api.admins.checkAdmin, { userId })
    const isAdmin = preloadedQueryResult(preloaded)

    if(!isAdmin)
      return NextResponse.redirect(new URL('/', req.url))
  }

});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};