'use server'

import { auth } from "@clerk/nextjs"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function createTodo(formData) {
  const { userId } = auth()
  console.log({formData, userId})

  if(!formData.title) {
    return {
      error: 'title is required'
    }
  }


  const res = await fetch('https://js1-todo-api.vercel.app/api/todos?apikey=896c7579-f148-444d-b699-b60a639bf69c', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: formData.title
    })
  })

  if(!res.ok) {
    return {
      error: 'failed to create todo'
    }
  }

  revalidatePath('/private')
  redirect('/private')
}