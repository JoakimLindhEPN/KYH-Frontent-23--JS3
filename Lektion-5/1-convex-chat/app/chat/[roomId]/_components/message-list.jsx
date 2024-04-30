'use client'
import { useQuery } from "convex/react"
import Message from "./message"
import { api } from "@/convex/_generated/api"
import { useEffect, useRef } from "react"

const MessageList = ({ roomId }) => {

  const messages = useQuery(api.messages.getByRoom, { roomId })
  const chatRef = useRef()

  useEffect(() => {
    chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" })
  }, [messages])
  
  return (
    <div ref={chatRef} className="container absolute inset-0 my-14 overflow-auto flex flex-col gap-3">
        {
          messages?.map(message => (
            <Message key={message._id} message={message} />
          ))
        }
    </div>
  )
}
export default MessageList