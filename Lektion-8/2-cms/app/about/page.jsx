'use client'

import usePageData from "@/lib/usePageData"

function AboutPage() {
  const data = usePageData('about')

  if(!data) return null
  return (
    <div>
      <h1>About</h1>
      <p>{data.name}</p>
      <p>{data.heading}</p>
      <p>{data.sub_heading}</p>
      <p>{data.bio}</p>
      <p>{data.age}</p>
    </div>
  )
}
export default AboutPage