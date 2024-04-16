import { NavLink } from "./nav-link"

const NAV_LINKS = [
  { label: 'Todos', href: '/private' },
  { label: 'Create', href: '/create' },
]

export const NavLinks = () => {
  return (
    <div className="flex gap-4 items-center">{NAV_LINKS.map((link, i) => (
      <NavLink key={i} href={link.href} label={link.label} />
    ))}</div>
  )
}