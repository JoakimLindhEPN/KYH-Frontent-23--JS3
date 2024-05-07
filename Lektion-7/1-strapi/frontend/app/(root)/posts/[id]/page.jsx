import { StrapiImage } from '@/components/strapi-image'
import { flattenObj } from '@/utils/flatten'
import { MDXRemote } from 'next-mdx-remote/rsc'
import qs from 'qs'

export async function generateMetadata({ params }) {
  const query = qs.stringify({
    fields: ['heading']
  })
  const res = await fetch(`http://localhost:1338/api/posts/${params.id}?${query}`, { cache: 'no-store' })
  const data = await res.json()

  const headerData = flattenObj(data)

  return {
    title: headerData.heading
  }
}

async function DetailsPage({ params }) {

  const { id } = params
  const query = qs.stringify({
    populate: {
      image: {
        fields: ['url', 'alternativeText']
      }
    },
  })

  const res = await fetch(`http://localhost:1338/api/posts/${id}?${query}`, { cache: 'no-store' })
  const data = await res.json()
  const post = flattenObj(data)
  // console.log(post)
  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-10'>{post.heading}</h1>
      <div className='h-[50svh] w-full'>
        <StrapiImage 
          src={post.image.url}
          alt={post.image.alternativeText}
          width={1920}
          height={1080}
        />
      </div>
      <div className='px-10 mt-5 markdown'>
        <MDXRemote source={post.content} />
      </div>
    </div>
  )
}
export default DetailsPage