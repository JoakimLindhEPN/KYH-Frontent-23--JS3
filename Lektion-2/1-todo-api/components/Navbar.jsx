import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="h-14 bg-slate-400 fixed w-screen flex items-center justify-between px-6">
      <h1 className="text-3xl font-bold truncate">Todos by Joakim API Dokumetation</h1>
      <div>
        <Link className="ml-5 bg-slate-900 text-white px-5 py-2 rounded" href="/login">Logga&nbsp;in</Link>
        <Link className="ml-5 bg-slate-900 text-white px-5 py-2 rounded" href="/register">Registrera&nbsp;dig</Link>
      </div>
    </div>
  )
}