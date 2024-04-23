import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { UserAvatar } from "./user-avatar"

const Header = () => {
  return (
    <div className="container mx-auto flex items-center justify-between h-14 border-b">
      <Link href="/">My Product CMS</Link>

      <div className="flex gap-4 items-center">
        <ModeToggle />
        <UserAvatar />
      </div>
    </div>
  )
}
export default Header