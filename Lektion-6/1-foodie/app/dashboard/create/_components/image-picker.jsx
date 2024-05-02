'use client'

import { Button } from "@/components/ui/button"
import { UtensilsCrossed } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export const ImagePicker = ({imgSrc, setSelectedImage}) => {

  const [imageSrc, setImageSrc] = useState(imgSrc)

  const setImage = (e) => {
    if(!e.target.files || !e.target.files[0]) return

    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (x) => {
      setImageSrc(x.target.result)
    }
    setSelectedImage(e.target.files[0])
  }

  return (
    <>
      {
        imageSrc ? (
          <div className="w-fit mx-auto">
          <div className="border rounded aspect-square max-w-[400px] mx-auto overflow-hidden">
            <Image
             alt="meal image"
             src={imageSrc}
             width={400}
             height={400}
             className="object-cover w-full h-full"
             />
          </div>
          <Button className="mt-4" size="sm" asChild><label htmlFor="image">Change image</label></Button>
          </div>
        )
        : (
          <>
            <label htmlFor="image" className="border-neutral-50/20 cursor-pointer border-2 border-dashed group rounded aspect-square flex flex-col items-center justify-center bg-muted hover:bg-neutral-50/20 transition-colors max-w-[400px] mx-auto">
              <UtensilsCrossed className="size-20 text-muted-foreground group-hover:text-neutral-100 transition-colors" />
              <p className="text-muted-foreground group-hover:text-neutral-100 transition-colors">Add Image</p>
            </label>
          </>
        )
      }
      <input type="file" id="image" className="hidden" onChange={setImage} />
    </>
  )
}