import { cn } from "@/lib/utils"
import Image from "next/image"

export const StrapiImage = ({ src, alt, width, height, className }) => {
  return (
    <Image 
      src={'http://localhost:1338' + src}
      alt={alt}
      width={width}
      height={height}
      className={cn('object-cover h-full w-full', className)}
    />
  )
}