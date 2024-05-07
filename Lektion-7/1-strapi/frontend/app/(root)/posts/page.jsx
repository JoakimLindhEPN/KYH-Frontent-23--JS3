import { StrapiImage } from '@/components/strapi-image'
import { flattenObj } from '@/utils/flatten'
import Link from 'next/link'
import qs from 'qs'

export async function generateMetadata() {
  const query = qs.stringify({
    fields: ['title', 'description']
  })
  const res = await fetch('http://localhost:1338/api/posts-page?' + query, { cache: 'no-store' })
  const data = await res.json()

  const headerData = flattenObj(data)

  return {
    title: headerData.title,
    description: headerData.description
  }
}

async function PostsPage() {
  const query = qs.stringify({
    populate: {
      image: {
        fields: ['url', 'alternativeText']
      }
    },
  })

  const res = await fetch('http://localhost:1338/api/posts?'+query, { cache: 'no-store' })
  const data = await res.json()
  const posts = flattenObj(data)
  // console.log(posts)
  return (
    <div className='px-10 mt-10'>
      <h1 className='text-center text-6xl mb-10 font-bold'>My Posts</h1>

      <div className='flex flex-col gap-4'>
        {
          posts && posts.map(post => (
            <Link key={post.id} href={'/posts/' + post.id} className='flex items-center justify-between hover:bg-slate-50/5 rounded pr-4'>
              <div className='h-24 aspect-video overflow-hidden rounded'>
                <StrapiImage 
                  src={post.image.url}
                  width={200}
                  height={200}
                  alt={post.image.alternativeText}
                />
              </div>
              <p className='text-2xl'>{post.heading}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
export default PostsPage








