'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QuillEditor } from "@/components/quill-editor"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"

export const EditPostForm = ({ post }) => {

  const router = useRouter()

  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)

  const editPost = useMutation(api.posts.update)
  const handleSubmit = async e => {
    e.preventDefault()
    if(title == '' || body == '') return

    await editPost({ id: post._id, title, body })
    router.back()
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label>Title</Label>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <QuillEditor value={body} onChange={setBody} />
      </div>
      <Button>Save</Button>

    </form>
  )
}