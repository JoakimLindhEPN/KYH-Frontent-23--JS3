"use client"

import { validateForm } from "@/utils/validate"
import { useRouter } from "next/navigation"
import { useState } from "react"

function LoginPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [formErrors, setFormErrors] = useState(formData)
  const [formError, setFormError] = useState('')
  const onChange = e => {
    setFormData(data => ({
      ...data,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const errors = validateForm(formData)
    setFormErrors(errors)
    if(Object.keys(errors).length > 0) return

    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(res.status !== 201) throw new Error(data.message)

      localStorage.setItem("api-key", data.apiKey)
      router.refresh()
      router.push('/docs/api')
    } catch (err) {
      setFormError(err.message)
    }
  }

  return (
    <div className="flex items-center justify-center h-full max-w-96 mx-auto">
      <form onSubmit={onSubmit} className="shadow-md bg-white rounded-md">
        <header className="text-center border-b p-4">
          <h2 className="text-2xl font-bold">Logga in</h2>
          <p className="text-sm">När du har loggat in så kommer du få tillgång till din unika api-nyckel</p>
        </header>
        <div className="p-4">
          <div className="mb-3">
            <label htmlFor="email">E-postadress</label>
            <input type="email" id="email" className="w-full border p-1 rounded" value={formData.email} onChange={onChange} />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">Lösenord</label>
            <input type="password" id="password" className="w-full border p-1 rounded" value={formData.password} onChange={onChange}/>
            {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
          </div>
          <div className="flex mt-6">
            <button className="bg-slate-800 text-white px-5 py-2 rounded ml-auto">Logga in</button>
          </div>
          {formErrors && <p className="text-red-500 text-sm mt-2">{formError}</p>}
        </div>
      </form>
    </div>
  )
}
export default LoginPage