'use client'

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import AddRoomDrawer from "./_components/add-room-drawer"
import RoomListItem from "./_components/room-list-item"

function ChatPage() {
  const rooms = useQuery(api.rooms.getAll)
  return (
    <div className="">
      <div className="container h-full overflow-auto">
        <h1 className="text-4xl font-bold my-4">Your Rooms</h1>
        <div className="flex flex-col gap-2">
          {
            rooms?.map(room => (
              <RoomListItem  key={room._id} room={room} />
            ))
          }
        </div>
      </div>
      <AddRoomDrawer />
    </div>
  )
}
export default ChatPage