export const Header = ({ title }) => {
  return (
    <div className="text-center mt-4 border-b pb-2">
      <h1 className="text-4xl font-bold">{ title }</h1>
      <h2 className="text-muted-foreground">Keep track of and plan your day</h2>
    </div>
  )
}