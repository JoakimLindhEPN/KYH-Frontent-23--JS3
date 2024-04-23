import Link from "next/link"
import { usePathname } from "next/navigation"

export const SidebarLink = ({ icon: Icon, href, label, small }) => {
  const pathname = usePathname()
  return (
    <Link href={href} className={`${pathname === href ? 'bg-slate-300': 'bg-slate-200'} flex items-center overflow-hidden gap-3 p-3 border-b border-slate-300 transition-colors relative hover:bg-slate-100`}>
      {pathname === href && <div className="absolute right-0 inset-y-0 w-2 bg-slate-800"/>}
      <Icon />
      {!small && label}
    </Link>
  )
}