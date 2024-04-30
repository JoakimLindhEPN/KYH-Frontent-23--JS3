'use client'

import { useConvexAuth } from "convex/react";




import Header from "./_components/header"
import { Loader2 } from "lucide-react";

function ChatLayout({ children }) {

  const { isLoading } = useConvexAuth();

  if(isLoading) return (
    <div className="h-screen flex items-center justify-center">
      <Loader2 className="size-10 animate-spin" />
    </div>
  )

  return (
    <div>
      <Header />
      <main className="h-screen pt-14">
        { children }
      </main>
    </div>
  )
}
export default ChatLayout