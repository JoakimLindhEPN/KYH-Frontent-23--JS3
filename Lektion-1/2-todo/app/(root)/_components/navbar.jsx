import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { NavLinks } from "./nav-links"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto">
      <Link href="/">MyTodos</Link>
      <NavLinks />
      <UserButton />
    </nav>
  )
}