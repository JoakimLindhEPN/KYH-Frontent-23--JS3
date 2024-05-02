'use client'

import { useState } from "react"
import { ImagePicker } from "./image-picker"
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const CreateMealForm = () => {

  const [selectedImage, setSelectedImage] = useState(null)
  const [mealName, setMealName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div>
      <ImagePicker setSelectedImage={setSelectedImage} />

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <Label htmlFor="mealName">Name:</Label>
          <Input className="rounded" id="mealName" value={mealName} onChange={e => setMealName(e.target.value)} />
        </div>
        <Button className="w-full">Add meal</Button>
      </form>
    </div>
  )
}