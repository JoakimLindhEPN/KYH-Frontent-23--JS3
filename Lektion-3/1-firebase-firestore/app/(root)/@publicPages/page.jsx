import { GoogleButton } from "@/components/google-button"

const PublicPage = () => {
  return (
    <div>
      <div className="text-center mt-32 mb-20">
        <h1 className="text-4xl font-bold">Products CMS</h1>
        <p className="text-muted-foreground">Please login to continue</p>
      </div>
      <div className="flex justify-center">
        <GoogleButton />
      </div>
    </div>
  )
}
export default PublicPage