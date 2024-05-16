'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QuillEditor } from "./quill-editor"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"

export const CreatePostForm = () => {

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const createPost = useMutation(api.posts.create)

  const handleSubmit = async e => {
    e.preventDefault()
    if(title == '' || body == '') return

    await createPost({ title, body })
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