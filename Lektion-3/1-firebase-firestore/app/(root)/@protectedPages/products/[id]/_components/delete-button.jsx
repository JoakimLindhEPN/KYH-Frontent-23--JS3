'use client'

import { Button } from "@/components/ui/button"
import { db } from "@/firebase/config"
import { deleteDoc, doc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { getStorage, ref, deleteObject } from "firebase/storage";


const DeleteButton = ({ productId }) => {

  const router = useRouter()

  const handleClick = async () => {
    await deleteDoc(doc(db, 'products', productId))


    router.replace('/')
  }

  return (
    <Button variant="destructive" onClick={handleClick}>Delete</Button>
  )
}
export default DeleteButton