'use client'

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { useParams } from "next/navigation"
import { EditMealForm } from "./_components/edit-meal-form"

function DetailsPage() {

  const { id } = useParams()

  const meal = useQuery(api.meals.getById, { mealId: id })

  if(!meal) return (
    <div>
      <p>Meal not found</p>
    </div>
  )

  return (
    <div>
      
      <EditMealForm meal={meal} />
    </div>
  )
}
export default DetailsPage