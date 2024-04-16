import { Button } from "@/components/ui/button"
import Link from "next/link"

function NotFound() {
  return (
    <div className="text-center mt-40">
      <h1 className="font-bold text-5xl">404 - Page Not Found</h1>
      <p className="text-muted-foreground my-10 text-xl">Could not find the requested resource</p>

      <Button asChild>
        <Link href="/private" >
          Go Home
        </Link>
      </Button>
    </div>
  )
}
export default NotFound