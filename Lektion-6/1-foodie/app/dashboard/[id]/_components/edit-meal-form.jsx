'use client'

import { useState } from "react"
import { ImagePicker } from "@/components/image-picker"

import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAction, useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"

export const EditMealForm = ({ meal }) => {

  if(!meal) return

  const router = useRouter()

  const generateUploadUrl = useMutation(api.images.generateUploadUrl)
  const updateMeal = useMutation(api.meals.updateMeal)
  const deleteMeal = useAction(api.meals.deleteMeal)
  const deleteImage = useMutation(api.images.deleteImage)

  const [selectedImage, setSelectedImage] = useState(null)
  const [mealName, setMealName] = useState(meal.name)

  const handleSubmit = async e => {
    e.preventDefault()
    if(mealName.trim() == '') return
    let imgData;

    if(selectedImage !== null) {

      try {
        await deleteImage({ storageId: meal.imageId })
        
      } catch (err) {
        console.log(err.message)
      }
      const postUrl = await generateUploadUrl()
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": selectedImage.type },
        body: selectedImage,
      });

      imgData = await result.json();
      
    }
    await updateMeal({ 
      id: meal._id, 
      imageId : imgData?.storageId ? imgData.storageId : meal.imageId, 
      name: mealName
    })
    setMealName('')
    router.push('/dashboard')
  }

  const handleDelete = async () => {
    await deleteMeal({ id: meal._id })
    router.replace('/dashboard')
  }

  return (
    <div>
      <ImagePicker imgSrc={meal.image} setSelectedImage={setSelectedImage} />
      <Button variant="destructive" onClick={handleDelete}>Delete</Button>
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