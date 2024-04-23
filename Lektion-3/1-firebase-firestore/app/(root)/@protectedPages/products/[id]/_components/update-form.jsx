'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db, storage } from "@/firebase/config"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { useRef } from "react"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
 
const formSchema = z.object({
  name: z.string().min(2).max(50),
  price: z.coerce.number().min(1),
  description: z.string().min(1)
})



export const UpdateForm = ({ product }) => {

  const router = useRouter()
  const fileInputRef = useRef()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product.name,
      price: product.price,
      description: product.description
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values) {
    const file = fileInputRef.current.files[0]
    let imageURL
    if(file) {
      const imageRef = ref(storage, `products/${product.id}/${file.name}`)

      await uploadBytes(imageRef, file).then(async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef)
        console.log(downloadURL)
        imageURL = downloadURL
      })
    }
    // const docRef = await addDoc(collection(db, "products"), values)
    const docRef = doc(db, 'products', product.id)
    const updateData = {...values}
    if(imageURL) {
      updateData.imageURL = imageURL
    }
    console.log(updateData)
    await updateDoc(docRef, updateData)

    router.push('/')
  }

  return (
    <>
    <div className="mb-8">
      <Label>Upload Image</Label>
      <Input type="file" ref={fileInputRef} accept="image/" />
    </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  The name of the product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product price</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  The price of the product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  The description of the product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  )
}