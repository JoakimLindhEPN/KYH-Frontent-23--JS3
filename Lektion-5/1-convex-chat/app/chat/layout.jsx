import Header from "./_components/header"

function ChatLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        { children }
      </main>
    </div>
  )
}
export default ChatLayout