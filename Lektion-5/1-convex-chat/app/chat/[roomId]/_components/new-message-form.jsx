'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api"
import { useUser } from "@clerk/nextjs"
import { useMutation } from "convex/react"
import { Send } from "lucide-react"
import { useRef, useState } from "react"

export const NewMessageForm = ({ roomId }) => {

  const { user } = useUser()
  const [newMessageText, setNewMessageText] = useState('')
  const inputRef = useRef()

  const sendMessage = useMutation(api.messages.send)

  const handleSubmit = async e => {
    e.preventDefault()
    if(newMessageText.trim() === '') return
    
    await sendMessage({
      author: user.username,
      authorId: user.id,
      roomId,
      body: newMessageText
    })
    setNewMessageText('')
    inputRef.current.focus()
  }
  return (
    <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex gap-2 left-0 py-2 container bg-background z-50">
      <Input ref={inputRef} value={newMessageText} onChange={e => setNewMessageText(e.target.value)} />
      <Button><Send /></Button>
    </form>
  )
}