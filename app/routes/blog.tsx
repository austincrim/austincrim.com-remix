import PostPreview from '../components/PostPreview'
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/cloudflare'
import { getAllPostProperties } from '~/lib/notion'

export let loader = async () => {
  let posts = await getAllPostProperties()

  return json(posts)
}

export let meta = () => {
  return {
    title: 'Austin Crim | blogging about the web',
    'og:title': 'Austin Crim | blogging about the web',
    'og:image': 'https://austincrim.com/og/index.png',
    'twitter:card': 'summary_large_image'
  }
}

export let headers = () => {
  return {
    'cache-control': `max-age=600, s-maxage=900, stale-while-revalidate=900`
  }
}

export default function Blog() {
  const posts = useLoaderData()
  return (
    <div className="flex flex-col max-w-5xl mx-auto my-20 space-y-12 dark:text-gray-50 md:rounded-lg">
      <h3 className="text-4xl">Posts</h3>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  )
}
