import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"

function LandingPage() {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between py-4">
        <p className="text-2xl font-bold">FOODIE</p>
        <SignedOut>
            <SignInButton mode="modal">
          <Button>
            Sign in

          </Button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard">Enter</Link>
        </SignedIn>
      </div>

      <div className="mt-36 text-center">
        <h1 className="text-6xl font-bold">En jättebra rubrik</h1>
        <p className="text-muted-foreground">en cool slogan</p>
      </div>
    </div>
  )
}
export default LandingPage