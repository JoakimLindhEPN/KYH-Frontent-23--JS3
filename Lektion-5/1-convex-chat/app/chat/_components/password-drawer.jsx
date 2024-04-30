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
import { useRouter } from "next/navigation"
import { useState } from "react"

const PasswordDrawer = ({ children, room }) => {

  const [isOpen, setIsOpen] = useState(false)

  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()

    if(password.trim() === '') {
      setErrorMessage('You need to enter a password')
      return
    }

    if(password.trim() !== room.password) {
      setErrorMessage('Incorrect password')
      return
    }

    router.push(`/chat/${room._id}`)
    setPassword('')
    setIsOpen(false)
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        { children }
      </DrawerTrigger>
      <DrawerContent className="h-[410px]">
        <DrawerHeader>
          <DrawerTitle>Enter password</DrawerTitle>
        </DrawerHeader>
        
        <form onSubmit={handleSubmit} className="px-4">
          <div className="mb-4">
            <Label htmlFor="password">Password:</Label>
            <Input type="password" value={password} id="password" onChange={e => setPassword(e.target.value)} />
          </div>

          <Button className="w-full">Enter</Button>

          { errorMessage && <p className="mt-4 text-destructive text-center">{errorMessage}</p>}
        </form>

      </DrawerContent>
    </Drawer>
  )
}
export default PasswordDrawer