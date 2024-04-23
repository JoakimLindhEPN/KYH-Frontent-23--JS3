import Header from "./_components/header"

function ProtectedLayout({ children }) {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        { children }
      </main>
    </>
  )
}
export default ProtectedLayout