'use client'
import { Button } from "@/components/ui/button"
import { pageData } from "@/lib/getPageData"
import usePageData from "@/lib/usePageData"
import Link from "next/link"

function LandingPage() {

  // const data = await pageData('home')
  const data = usePageData('home')

  return (
    <div>
      <h1 className="mt-48 text-center text-6xl font-bold">{ data?.heading }</h1>
      <p className="text-center mt-10 text-muted-foreground">{ data?.sub_heading }</p>
      <div className="flex justify-center items-center mt-10 gap-4">
        <Button asChild>
          <Link href="/posts">Go check out the posts</Link>
        </Button>
        <Button asChild>
          <Link href="/admin/dashboard">Enter as admin</Link>
        </Button>
      </div>
    </div>
  )
}
export default LandingPage