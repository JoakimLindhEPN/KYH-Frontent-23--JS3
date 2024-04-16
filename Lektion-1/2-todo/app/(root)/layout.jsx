import { Navbar } from "./_components/navbar"

function PrivateLayout({ children }) {
  return (
    <>
    <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}
export default PrivateLayout