import { Blocks } from "@/components/blocks"
import { flattenObj } from "@/utils/flatten"
import qs from 'qs'

export async function generateMetadata() {
  const query = qs.stringify({
    fields: ['title', 'description']
  })
  const res = await fetch('http://localhost:1338/api/home-page?' + query, { cache: 'no-store' })
  const data = await res.json()

  const headerData = flattenObj(data)
  console.log(headerData)

  return {
    title: headerData.title,
    description: headerData.description
  }
}



async function LandingPage() {

  const query = qs.stringify({
    populate: {
      blocks: {
        populate: {
          backgroundImage: {
            fields: ['url']
          },
          cta: true,
          features: true
        }
      },
    },
  })

  const res = await fetch('http://localhost:1338/api/home-page?' + query, { cache: 'no-store' })
  const data = await res.json()

  const strapiData = flattenObj(data)
  // console.dir(strapiData, { depth: null })
  return (
    <div>
      
      <Blocks blocks={strapiData.blocks} />
      <div className="text-center mt-20">
        <p>{strapiData.text}</p>
      </div>
    </div>
  )
}
export default LandingPage