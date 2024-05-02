import { MealsList } from "./_components/meals-list"

function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold my-6">All meals</h1>
      <MealsList />
    </div>
  )
}
export default DashboardPage