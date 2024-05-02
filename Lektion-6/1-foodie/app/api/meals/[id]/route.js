import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {

  console.log(params)
  const meal = await fetchQuery(api.meals.getById, { mealId: params.id })

  return NextResponse.json(meal, { status: 200 })
}