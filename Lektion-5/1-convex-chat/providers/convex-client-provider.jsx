'use client'

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { dark } from '@clerk/themes'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

function ConvexClientProvider({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        { children }
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
export default ConvexClientProvider