'use client'

import { auth } from "@/firebase.config";
import { useAuth } from "@clerk/nextjs"
import { signInWithCustomToken } from "firebase/auth";
import { useEffect } from "react";

function DashboardLayout({ children }) {
  const { userId, isLoaded, getToken } = useAuth()
  
  // if (!userId) {
  //   return null
  // }
  useEffect(() => {
    if (!isLoaded) return

    const signInWithClerk = async () => {
      const token = await getToken({ template: "integration_firebase" });
      const userCredentials = await signInWithCustomToken(auth, token || "");
      console.log("User:", userCredentials.user);
    };
    signInWithClerk()
  }, [isLoaded])

  if (!isLoaded) {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      { children }
    </div>
  )
}
export default DashboardLayout