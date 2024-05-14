'use client'
import { UserButton } from "@clerk/nextjs"
import { db } from "@/firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";


function DashboardPage() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const _posts = []
      const q = query(collection(db, "posts"));
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        _posts.push({id: doc.id, ...doc.data()})
      })
      setPosts(_posts)
    }

    getPosts()
  }, [])

  console.log(posts)
  return (
    <div>
      <UserButton />
    </div>
  )
}
export default DashboardPage