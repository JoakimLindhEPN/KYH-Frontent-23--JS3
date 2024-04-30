'use client'

import { Lock } from "lucide-react"
import Link from "next/link"
import PasswordDrawer from "./password-drawer"

const RoomListItem = ({ room }) => {

  return (
    <>
    {
      room.isPublic
      ? (
        <Link href={`/chat/${room._id}`} className="flex items-center justify-between p-4 bg-slate-50/5 hover:bg-slate-50/10 cursor-pointer">
          <p>{room.name}</p>
        </Link>
      )
      : (
        <PasswordDrawer room={room}>
          <div className="flex items-center justify-between p-4 bg-slate-50/5 hover:bg-slate-50/10 cursor-pointer">
            <p>{room.name}</p>
            <Lock className="size-5" />
          </div>
        </PasswordDrawer>
      )
    }
    </>
    
  )
}
export default RoomListItem