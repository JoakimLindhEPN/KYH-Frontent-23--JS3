export const TodosLeft = ({ amount }) => {
  return (
    <p>{ amount } { amount === 1 ? 'todo' : 'todos' } left</p>
  )
}