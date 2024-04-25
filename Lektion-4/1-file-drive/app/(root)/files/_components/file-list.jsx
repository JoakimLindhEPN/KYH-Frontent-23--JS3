'use client'

import { useAuth } from "@/components/auth-provider"
import { db } from "@/firebase.config"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import FileTable from "./file-table"
import { Table, TableCaption } from "@/components/ui/table"

const FileList = () => {

  const { user } = useAuth()
  const [files, setFiles] = useState(null)

  // const normalizedFiles = files?.map()


  useEffect(() => {
    const q = query(
      collection(db, 'users', user.uid, 'files'),
      orderBy('createdAt', 'desc')
    )

    const unsub = onSnapshot(q, snapshot => {
      const files = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      setFiles(files)
    })

    return () => unsub()
  }, [])


  if(files === null) return (
    <Table>
      <TableCaption>Loading files...</TableCaption>
    </Table>
  )

  return (
    <div>
      
      <FileTable files={files} />
    </div>
  )
}
export default FileList