'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "@/firebase/config"

export const GoogleButton = () => {

  const handleClick = async () => {
    const userCredential = await signInWithPopup(auth, googleProvider)

    console.log(userCredential)
  }


  return (
    <Button className="flex items-center" onClick={handleClick}>
      <Image
        src="/google.webp"
        width={30}
        height={30}
        alt="google logo"
       />
      <p>GoogleButton</p></Button>
  )
}