'use client'

import { useState } from "react"
import { ImagePicker } from "@/components/image-picker"
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"

export const CreateMealForm = () => {

  const router = useRouter()

  const generateUploadUrl = useMutation(api.images.generateUploadUrl)
  const createMeal = useMutation(api.meals.createMeal)

  const [selectedImage, setSelectedImage] = useState(null)
  const [mealName, setMealName] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    if(mealName.trim() == '') return
    let imageId;

    if(selectedImage) {
      const postUrl = await generateUploadUrl()
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": selectedImage.type },
        body: selectedImage,
      });

      const { storageId } = await result.json();
      imageId = storageId
    }
    await createMeal({ imageId, name: mealName})
    setMealName('')
    router.push('/dashboard')
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