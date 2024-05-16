'use client'
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Loader2 } from "lucide-react"

function CollectionDetailsPage({ params }) {

  const post = useQuery(api.posts.getById, { id: params.id })


  if(!post) return (
    <div className="h-full flex items-center justify-center">
      <Loader2 className="size-10 animate-spin" />
    </div>
  )
  return (
    <div>CollectionDetailsPage: {post?.title}</div>
  )
}
export default CollectionDetailsPage