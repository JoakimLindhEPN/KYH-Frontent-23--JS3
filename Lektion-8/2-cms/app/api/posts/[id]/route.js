import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {

  const post = await fetchQuery(api.posts.getById, { id: params.id })
  return NextResponse.json(post, { status: 200 })
}