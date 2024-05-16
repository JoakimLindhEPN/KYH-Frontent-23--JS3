import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import { Trash2 } from "lucide-react"

export const AdminListItem = ({ imageUrl, email, onClick }) => {

  

  return (
    <div className="flex items-center justify-between p-2 hover:bg-slate-50/5">
      <div className="flex items-center gap-4">
        <Avatar className="size-8">
          <AvatarImage src={ imageUrl } />
          <AvatarFallback>XX</AvatarFallback>
        </Avatar>
        <p>{ email }</p>
      </div>
    
      <Trash2 className="cursor-pointer" onClick={onClick} />
    </div>
  )
}