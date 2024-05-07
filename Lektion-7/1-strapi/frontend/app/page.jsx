import { Blocks } from "@/components/blocks"
import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { flattenObj } from "@/utils/flatten"
import qs from 'qs'

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