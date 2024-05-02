'use client'

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { UtensilsCrossed } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const MealsList = () => {

  const meals = useQuery(api.meals.getAll)

  return (
    <div className="flex flex-col gap-2">
      {meals?.map(meal => (
        <Link href={'/dashboard/'+meal._id} key={meal._id} className="h-16 flex items-center justify-between cursor-pointer group hover:bg-slate-50/10 rounded pr-4">
          <div className="h-full aspect-square overflow-auto rounded">
            {
              meal.image
              ? (
                <Image 
                  src={meal.image}
                  width={200}
                  height={200}
                  alt={meal.name}
                  className="object-cover h-full w-full"
                />
              )
              : (
                <div className="w-full h-full bg-neutral-50/10 flex items-center justify-center">
                  <UtensilsCrossed className="text-muted-foreground" />
                </div>
              )
            }
            
          </div>
          <p>{meal.name}</p>
        </Link>
      ))}
    </div>
  )
}