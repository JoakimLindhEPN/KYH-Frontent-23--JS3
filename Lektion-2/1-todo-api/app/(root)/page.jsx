function HomePage() {
  return (
    <>
      <section className="mt-5">
        <header>
          <h2 className="text-2xl font-bold mb-2">Komma igång</h2>
        </header>
        <p className="mb-2">
        För att kunna använda dig av det här API:et så måste du registrera dig på den här sidan med din epostadress och ett lösenord. Då kommer du att få tillgång till en api nyckel som måste skickas med vid varje request. 
        </p>
        <p>
          Detta är till för att ni bara ska få tillgång till och redigera era egna poster som ni har lagt till på databasen
        </p>
      </section>
    </>
  )
}
export default HomePage