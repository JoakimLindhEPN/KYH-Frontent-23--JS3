import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { NextResponse } from "next/server";

export async function GET(req) {

  const posts = await fetchQuery(api.posts.getAll)
  return NextResponse.json(posts, { status: 200 })
}