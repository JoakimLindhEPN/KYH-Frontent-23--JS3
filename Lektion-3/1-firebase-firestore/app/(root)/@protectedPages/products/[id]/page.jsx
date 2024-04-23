import { Button } from "@/components/ui/button"
import getDocument from "@/lib/getDocument"
import { UpdateForm } from "./_components/update-form"
import DeleteButton from "./_components/delete-button"

async function DetailsPage({ params }) {

  const product = await getDocument('products', params.id)

  return (
    <div>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-4xl font-bold">Product Details</h1>
        <DeleteButton productId={params.id} />
      </div>
      <UpdateForm product={product} />
    </div>
  )
}
export default DetailsPage