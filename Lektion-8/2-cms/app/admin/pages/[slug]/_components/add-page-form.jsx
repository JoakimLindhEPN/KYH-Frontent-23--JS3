'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addPage } from "../addPageActions"
import { useFormState } from 'react-dom'
import usePageData from "@/lib/usePageData"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Textarea } from "@/components/ui/textarea"

export const AddPageForm = ({ name }) => {

  const page = usePageData(name)
  const addPageActionWithName = addPage.bind(null, name )
  const [state, formAction] = useFormState(addPageActionWithName, null)

  const formFields = useQuery(api.pageForms.getPageForm, { name })

  if(!formFields) return null

  const fields = formFields.fields
  
  return (
    <form action={formAction}>
      {
        state?.error &&
        <div className="flex justify-center">
          <p className="bg-destructive/40 px-4 py-2 rounded-xl text-destructive-foreground">{state.error}</p>
        </div>
      }
      {
        state?.message &&
        <div className="flex justify-center">
          <p className="bg-emerald-800/40 px-4 py-2 rounded-xl text-emerald-200">{state.message}</p>
        </div>
      }
      <div className="space-y-4">

      {
        fields.map((field, i) => {

          switch(field.type) {
            case 'textarea':
              return (
                <div key={i + field.name}>
                  <Label className="capitalize" htmlFor={field.name}>{ field.name.replace(/_/g, ' ')}</Label>
                  <Textarea defaultValue={page[field.name]} id={field.name} name={field.name}/>
                </div>
              )
            default:
              return (
                <div key={i + field.name}>
                  <Label className="capitalize" htmlFor={field.name}>{ field.name.replace(/_/g, ' ')}</Label>
                  <Input defaultValue={page[field.name]} id={field.name} name={field.name} type={field.type} />
                </div>
              )
          }

        })
      }

        <Button className="w-full">Save</Button>
      </div>
    </form>
  )
}