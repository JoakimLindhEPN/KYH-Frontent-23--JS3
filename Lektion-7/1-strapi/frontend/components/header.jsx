import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export const Header = () => {
  return (
    <nav className="px-10 flex items-center justify-between h-14 border-b bg-background shadow-lg">
      <Link href="/">CMS</Link>
      <div className="flex items-center gap-4">
        <Link href="/posts">Posts</Link>
        <ModeToggle />
      </div>
    </nav>
  )
}