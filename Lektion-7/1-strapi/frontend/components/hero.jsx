import Image from "next/image"
import { Button } from '@/components/ui/button'
import Link from "next/link"
import { StrapiImage } from "./strapi-image"

export const Hero = ({ data }) => {
  return (
    <div className="relative h-[900px] flex items-center justify-center flex-col gap-4">
      <StrapiImage 
        src={data.backgroundImage.url}
        width={1920}
        height={1080}
        alt="background"
        className="absolute top-0 left-0 -z-20"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 -z-10" />
      <h1 className="text-6xl font-bold">{ data.heading }</h1>
      <p>{ data.subHeading }</p>
      <Button asChild>
        <Link href={data.cta.url}>{data.cta.text}</Link>
      </Button>
    </div>
  )
}