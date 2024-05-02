import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { NextResponse } from "next/server";

export async function GET(request) {

  const { searchParams } = new URL(request.url)
  console.log(searchParams)

  const take = searchParams.get('take')

  let meals
  if(!take) {
    meals = await fetchQuery(api.meals.getAll)
  } else {
    meals = await fetchQuery(api.meals.getRandom, { take: +take })
  }


  return NextResponse.json(meals, { status: 200 })
}