import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

const Header = () => {
  return (
    <div className="container flex items-center justify-between h-14 bg-background border-b fixed z-50">
      <Link href="/chat">Convex Chat</Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
export default Header