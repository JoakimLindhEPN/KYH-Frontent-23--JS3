"use client"

import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { FaCheckCircle } from "react-icons/fa"

export const Banner = () => {
  const [apiKey, setApiKey] = useState('')
  useEffect(() => {
    setApiKey(localStorage.getItem("api-key"))
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey)
    toast.success('API-nyckel kopierad till urklipp')
  }

  if(!apiKey) return null

  return (
    <div className="absolute top-0 left-0 w-full bg-emerald-700 py-2 flex items-center justify-between text-white px-10 pl-16">
      <FaCheckCircle className="text-xl hidden lg:block" />
      <div>
        <span className="truncate">Din API-nyckel: </span>
        <span onClick={handleCopy} className="hover:text-emerald-100 cursor-pointer">{ apiKey }</span>
      </div>
    </div>
  )
}