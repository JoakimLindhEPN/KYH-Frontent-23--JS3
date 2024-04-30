'use client'

import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"

function ChatPage() {
  const createRoom = useMutation(api.rooms.createRoom)
  
  return (
    <div>
      <button onClick={async () => {
        await createRoom({name: 'My Room', isPublic: false, password: 'BytMig123'})
      }}>test</button>
    </div>
  )
}
export default ChatPage