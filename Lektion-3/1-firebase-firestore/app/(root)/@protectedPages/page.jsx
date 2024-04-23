import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProductList } from "./products/_components/product-list"

const ProtectedPage = () => {
  return (
    <>
      <div className="flex items-center justify-between my-5">
        <h1 className="text-4xl font-bold">Products</h1>
        <Link href="/products/create">
          <Button>Add Product</Button>
        </Link>
      </div>

      <ProductList />
    </>
  )
}
export default ProtectedPage