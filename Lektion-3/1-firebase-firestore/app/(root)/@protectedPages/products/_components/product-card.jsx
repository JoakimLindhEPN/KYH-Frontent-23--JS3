import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ id, name, price, imageURL }) => {
  return (
    <Link href={`/products/${id}`} className="overflow-hidden h-14 border rounded flex items-center justify-between hover:bg-slate-50/5 transition-colors">
      <div className="h-full aspect-video">
        <Image 
          src={imageURL || "/product-placeholder.webp"}
          alt={name}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex pr-10 gap-10">
        <p className="text-xl font-semibold">{name}</p>
        <p>{price}:-</p>
      </div>
    </Link>
  )
}
export default ProductCard