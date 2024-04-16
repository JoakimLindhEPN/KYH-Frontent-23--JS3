"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavLink = ({ label, href }) => {
  const pathname = usePathname()

  console.log(pathname)

  const isActive = pathname === href
  return (
    <Link href={href}  className={cn("", isActive && "underline")}>{label}</Link>
  )
}