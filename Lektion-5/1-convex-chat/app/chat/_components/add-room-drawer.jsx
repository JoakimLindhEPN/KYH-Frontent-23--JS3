'use client'

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { api } from "@/convex/_generated/api"
import { Label } from "@radix-ui/react-label"
import { useMutation } from "convex/react"
import { PlusCircle } from "lucide-react"
import { useState } from "react"

const AddRoomDrawer = () => {

  const [isOpen, setIsOpen] = useState(false)

  const [name, setName] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const createRoom = useMutation(api.rooms.createRoom)

  const handleSubmit = async e => {
    e.preventDefault()

    if(name.trim() === '') {
      setErrorMessage('You need to enter a room name')
      return
    }
    if(!isPublic && password.trim() === '') {
      setErrorMessage('You need to enter a password if the room is private')
      return
    }

    await createRoom({ name, isPublic, password: !isPublic ? password : undefined})
    setName('')
    setPassword('')
    setIsOpen(false)
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background rounded-full hover:bg-slate-700">
          <PlusCircle className="size-10" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-[410px]">
        <DrawerHeader>
          <DrawerTitle>Add a chatroom</DrawerTitle>
        </DrawerHeader>
        
        <form onSubmit={handleSubmit} className="px-4">
          <div className="mb-4">
            <Label htmlFor="name">Room Name:</Label>
            <Input value={name} id="name" onChange={e => setName(e.target.value)} />
          </div>
          <div className="flex items-center justify-between mb-4">
            <Label>Is Public</Label>
            <Switch checked={isPublic} onCheckedChange={setIsPublic} />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password:</Label>
            <Input value={password} disabled={isPublic} id="password" onChange={e => setPassword(e.target.value)} />
          </div>

          <Button className="w-full">Add</Button>

          { errorMessage && <p className="mt-4 text-destructive text-center">{errorMessage}</p>}
        </form>

      </DrawerContent>
    </Drawer>
  )
}
export default AddRoomDrawer