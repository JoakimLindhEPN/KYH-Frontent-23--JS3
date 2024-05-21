'use client'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { FormBuilderDialog } from './form-builder-dialog'
import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useRouter } from 'next/navigation'

export const FormBuilder = () => {

  const router = useRouter()
  const addPageForm = useMutation(api.pageForms.addPageForm)

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

const handleAddPage = async () => {
  try {
    await addPageForm({ name: formContent.slug, fields: formContent.fields })
    router.push(`/admin/pages/${formContent.slug}`)
  } catch (err) {
    console.log(err)
  }
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
            <h2 className="text-2xl font-semibold mb-4">Fields</h2>
            <div className="flex flex-col gap-4">
              { formContent.fields.map((field, index) => (
                <div key={index} className='border rounded-lg p-4 flex items-center justify-between'>
                  <p>{field.name}</p>
                  <div className='flex item-center gap-5'>
                    <p>{field.type}</p>
                    <Trash2 className='size-5 hover:text-destructive cursor-pointer' onClick={() => {
                      setFormContent(content => ({
                        ...content,
                        fields: content.fields.filter((_, i) => i !== index)
                      }))
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
      <div className="flex justify-center">
        <FormBuilderDialog setFormContent={setFormContent} />
      </div>
      <div>
        <Button onClick={handleAddPage} className="w-full" size="lg">Add Page</Button>
      </div>
    </div>
  )
}