'use client'
import { api } from "@/convex/_generated/api"
import { cn } from "@/lib/utils"
import { useUser } from "@clerk/nextjs"
import { useMutation } from "convex/react"
import { HeartIcon } from "lucide-react"

const Message = ({ message }) => {

  const {user} = useUser()

  const isOwnMessage = message?.authorId === user.id

  const like = useMutation(api.likes.like)
  const handleLike = () => {
    if(message.likes.some(like => like.likerId === user.id)) return
    
    like({ 
      liker: user.username, 
      likerId: user.id,
      messageId: message._id
    })
  }
  
  return (
    <div className={`${isOwnMessage ? 'ml-auto' : ''} group relative w-fit`}>
      <p className="mb-1">{message?.author}</p>
      <div className={cn('bg-slate-50/10 p-4 rounded-xl rounded-bl-none',
        isOwnMessage && 'bg-primary rounded-bl-xl rounded-br-none')}>
        {message?.body}
      </div>
      {!isOwnMessage && 
      <button onClick={handleLike} className="flex items-center gap-2 absolute bottom-0 right-0 bg-slate-50/30 px-1 py-1 rounded translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        {!!message.likes.length && <p>{message.likes.length}</p>}
        <HeartIcon fill="#fff" className="size-3" />
      </button>
      }
      {isOwnMessage && !!message.likes.length && 
      <div className="flex items-center gap-2 absolute bottom-0 right-0 bg-slate-50/30 px-1 py-1 rounded translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        {!!message.likes.length && <p>{message.likes.length}</p>}
        <HeartIcon fill="#fff" className="size-3" />
      </div>
      }
    </div>
  )
}
export default Message