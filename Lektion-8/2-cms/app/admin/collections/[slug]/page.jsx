'use client'

import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import Link from "next/link"

function CollectionPage({ params }) {
  const posts = useQuery(api.posts.getAll)
  return (
    <div className="px-10">
      <h1 className="text-6xl font-bold text-center my-10">Posts</h1>
      <div className="flex justify-end">
        <Button asChild>
          <Link href="/admin/collections/create">
            Add Post
          </Link>
        </Button>
      </div>

      <div>
        {
          posts && posts.map(post => (
            <Link className="block p-4 hover:bg-slate-50/5" href={`/admin/collections/${params.slug}/${post._id}`} key={post._id}>
              <p>{post.title}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
export default CollectionPage