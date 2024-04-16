
// const wait = (time) => new Promise(resolve => setTimeout(resolve, time))

async function PrivatePage() {
  // await wait(3000)
  const res = await fetch('https://js1-todo-api.vercel.app/api/todos?apikey=896c7579-f148-444d-b699-b60a639bf69c')
  const todos = await res.json()

  return (
    <div className="container mx-auto">{todos?.map(todo => (<p key={todo._id}>{todo.title}</p>))}</div>
  )
}
export default PrivatePage