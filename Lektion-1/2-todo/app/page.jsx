import { ModeToggle } from "@/components/mode-toogle"
import { Button } from "@/components/ui/button"
import { SignInButton, UserButton } from "@clerk/nextjs"

function HomePage() {
  return (
    <div className="text-center mt-40">
        <h1 className="text-6xl font-bold">MYTodos</h1>
        <p className="my-10 text-xl text-muted-foreground">login to continue</p>
        <SignInButton mode="modal" afterSignInUrl="/private" afterSignUpUrl="/private">
          <Button>Sign in</Button>
        </SignInButton>
    </div>
  )
}
export default HomePage