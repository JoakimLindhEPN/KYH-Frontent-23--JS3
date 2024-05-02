'use client'

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

function DashboardLayout({ children }) {

  const { isLoading } = useConvexAuth();

  if(isLoading) return (
    <div className="h-screen flex items-center justify-center">
      <Loader2 className="size-10 animate-spin" />
    </div>
  )

  return (
    <div>
      <div className=" container mx-auto flex items-center justify-between py-4">
        <Link className="text-2xl font-bold" href="/dashboard">FOODIE</Link>

        <div className="flex items-center gap-4">
          <Button asChild size="sm">
            <Link href="/dashboard/create">Add meal</Link>
          </Button>
          <UserButton />
        </div>
      </div>
      <main className="container mx-auto">
        { children }
      </main>
    </div>
  )
}
export default DashboardLayout