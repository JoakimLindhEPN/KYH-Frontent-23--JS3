import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

const Header = () => {
  return (
    <div className="container flex items-center justify-between py-4 border-b">
      <Link href="/chat">Convex Chat</Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
export default Header