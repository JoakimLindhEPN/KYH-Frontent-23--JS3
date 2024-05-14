'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addPage } from "../addPageActions"
import { useFormState } from 'react-dom'
import usePageData from "@/lib/usePageData"

export const AddPageForm = ({ name }) => {

  const page = usePageData(name)
  const addPageActionWithName = addPage.bind(null, name )
  const [state, formAction] = useFormState(addPageActionWithName, null)

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
      {/* <input type="hidden" name="name" value={name} /> */}
      <div className="space-y-4">
        <div>
          <Label className="capitalize" htmlFor="heading">heading</Label>
        <Input defaultValue={page?.heading || ''} id="heading" name="heading" />
        </div>
        <div>
          <Label className="capitalize" htmlFor="sub_heading">sub heading</Label>
          <Input defaultValue={page?.sub_heading || ''} id="sub_heading" name="sub_heading" />
        </div>

        <Button className="w-full">Save</Button>
      </div>
    </form>
  )
}