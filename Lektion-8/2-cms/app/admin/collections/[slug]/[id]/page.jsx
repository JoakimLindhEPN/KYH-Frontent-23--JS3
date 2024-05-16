'use client'
import { api } from "@/convex/_generated/api"
import { useMutation, useQuery } from "convex/react"
import { Loader2 } from "lucide-react"
import { EditPostForm } from "./_components/edit-post-form"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

function CollectionDetailsPage({ params }) {

  const router = useRouter()

  const post = useQuery(api.posts.getById, { id: params.id })
  const removePost = useMutation(api.posts.removePost)

  const handleRemovePost = async () => {
    await removePost({ id: post._id })
    router.replace('/admin/collections/posts')
  }

  if(!post) return (
    <div className="h-full flex items-center justify-center">
      <Loader2 className="size-10 animate-spin" />
    </div>
  )
  return (
    <div className="px-10">
      <h1 className="text-6xl font-bold text-center my-10">Edit post</h1>
      <div className="flex justify-end">
        <Button variant="destructive" onClick={handleRemovePost}>Delete</Button>
      </div>
      <EditPostForm post={post} />
    </div>
  )
}
export default CollectionDetailsPage