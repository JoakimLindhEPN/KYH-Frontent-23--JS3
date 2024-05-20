import { useTodos } from "@/providers/TodosProvider"
import { TodosLeft } from "./todos-left"

export const TodosList = ({ todos }) => {

  const { deleteTodo } = useTodos()

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <TodosLeft amount={todos.length} />
      </div>
      <div>
        { todos && todos.map(todo => (
          <p data-testid="todo-element" onClick={() => deleteTodo(todo.id)} key={todo.id} className="py-2 border-b first:border-t cursor-pointer hover:bg-slate-50/5">{ todo.title }</p>
        ))}
      </div>
    </div>
  )
}