'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export const FormBuilderDialog = ({ setFormContent }) => {

  const [type, setType] = useState(null)
  const [fieldName, setFieldName] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleAddField = (e) => {
    e.preventDefault()
    if(fieldName.trim() === '' || type === null) return
    setFormContent(content => ({
      ...content,
      fields: [...content.fields, {
        type,
        name: fieldName.trim().toLowerCase().replace(/\s+/g, '_')
      }]
    }))

    setType(null)
    setFieldName('')
    setIsOpen(false)

  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle />
          <p>Add field</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What type of field do you want to add?</DialogTitle>
        </DialogHeader>

        {
          type === null && (
            <div className="grid grid-cols-2 gap-4">
              <div onClick={() => setType('text')} className="border rounded-lg h-20 flex items-center justify-center cursor-pointer hover:bg-slate-50/5">text</div>
              <div onClick={() => setType('textarea')} className="border rounded-lg h-20 flex items-center justify-center cursor-pointer hover:bg-slate-50/5">textarea</div>
              <div onClick={() => setType('number')} className="border rounded-lg h-20 flex items-center justify-center cursor-pointer hover:bg-slate-50/5">number</div>
            </div>
          )
        }
        {
          type !== null && (
            <form className="space-y-4" onSubmit={handleAddField}>
              <div className="space-y-3">
                <Label>Field Name</Label>
                <Input value={fieldName} onChange={e => setFieldName(e.target.value)} id="field-name" />
              </div>
              <div className="space-y-3">
                <Label>Field Slug</Label>
                <Input disabled value={fieldName.trim().toLowerCase().replace(/\s+/g, '_')} />
              </div>
              <div className="flex justify-between">
                <Button type="button" variant="destructive" onClick={() => {
                  setType(null)
                  setFieldName('')
                }}>Back</Button>
                <Button disabled={fieldName.trim() === ''} type="submit">Add field</Button>
              </div>
            </form>
          )
        }
        

      </DialogContent>
    </Dialog>
  )
}