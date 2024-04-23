'use client'
import { useAuth } from "@/components/auth-provider"

function RootLayout({ protectedPages, publicPages }) {

  const { user, authReady } = useAuth()


  if(!authReady) return null

  if(!user) {
    return <>{publicPages}</>
  }
  return <>{protectedPages}</>
}
export default RootLayout
