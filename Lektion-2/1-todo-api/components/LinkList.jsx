import { SidebarLink } from "./SidebarLink"
import { FaHome, FaDatabase } from 'react-icons/fa'

export const LinkList = ({ small }) => {
  const navLinks = [
    {
      icon: FaHome,
      href: "/",
      label: "Start"
    },
    {
      icon: FaDatabase,
      href: "/docs/api",
      label: "API"
    },
  ]
  return (
    <nav className="overflow-hidden">
      {navLinks.map(link => ( <SidebarLink key={link.label} icon={link.icon} href={link.href} label={link.label} small={small} /> ))}
    </nav>
  )
}