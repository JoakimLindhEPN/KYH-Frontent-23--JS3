'use client'
import { useAuth } from "@/components/auth-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { auth } from "@/firebase/config"
import { signOut } from "firebase/auth"


export const UserAvatar = () => {

  const { user } = useAuth()
  const initials = user?.displayName.split(' ').map(name => name[0]).join('')

  const handleSignOut = async () => {
    await signOut(auth)
  }

  if(!user) return null
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
      <Avatar>
        <AvatarImage src={user?.photoURL} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleSignOut}>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}





