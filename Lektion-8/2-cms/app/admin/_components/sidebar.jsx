import { SignOutButton } from "@clerk/nextjs"
import { SidebarRoutes } from "./sidebar-routes"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Sidebar = () => {
  return (
    <div className="flex flex-col border-r">
      <div className="flex-1">
        <SidebarRoutes />
      </div>
      <div>

        <SignOutButton className="p-4 border-t w-full flex items-center justify-between hover:bg-slate-50/10">
          <button className="">
            <p>Sign out</p>
            <LogOut className="size-5" />
          </button>
        </SignOutButton>
      </div>
    </div>
  )
}