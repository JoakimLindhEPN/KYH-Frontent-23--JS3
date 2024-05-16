import { CreatePostForm } from "./_components/create-post-form"

function CreatePage() {
  return (
    <div className="px-10">
      <h1 className="text-6xl font-bold text-center my-10">Create a new post</h1>
      <CreatePostForm />
    </div>
  )
}
export default CreatePage