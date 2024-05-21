'use client'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { FormBuilderDialog } from './form-builder-dialog'
import { useState } from 'react'

export const FormBuilder = () => {

  const [formContent, setFormContent] = useState({
    name: '',
    slug: '',
    fields: []
  })

const onChange = (e) => {
  setFormContent(content => ({
    ...content,
    [e.target.id]: e.target.value,
    slug: e.target.value.trim().toLowerCase().replace(/\s+/g, '_')
  }))
}

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>Page Name</Label>
        <Input value={formContent.name} onChange={onChange} id="name" />
      </div>
      <div className="space-y-3">
        <Label>Slug</Label>
        <Input value={formContent.slug} onChange={onChange} id="slug" disabled />
      </div>

      {
        formContent.fields.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold">Fields</h2>
            <div className="flex flex-col">
              { formContent.fields.map(field => (
                <div>{ field.name } {field.type}</div>
              ))}
            </div>
          </div>
        )
      }
      <div className="flex justify-center">
        <FormBuilderDialog setFormContent={setFormContent} />
      </div>
    </div>
  )
}