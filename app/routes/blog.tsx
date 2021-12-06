import PostPreview from '../components/PostPreview'
import Layout from '../components/Layout'
import { getPosts } from '../lib/posts.server'
import { LoaderFunction, useLoaderData, json, MetaFunction, HeadersFunction } from 'remix'
import { Post } from '@prisma/client'

export let loader: LoaderFunction = async () => {
  const posts = await getPosts({ orderBy: { dateWritten: 'desc' } })

  return json(posts)
}

export let meta: MetaFunction = () => {
  return {
    title: 'Austin Crim | blogging about the web',
    'og:title': 'Austin Crim | blogging about the web',
    'og:image': 'https://austincrim.com/og/index.png',
    'twitter:card': 'summary_large_image'
  }
}

export let headers: HeadersFunction = () => {
  return {
    'cache-control': `smax-age=${60 * 30}`
  }
}

export default function Blog() {
  const posts = useLoaderData<Post[]>()
  return (
    <Layout>
      <div className="flex flex-col max-w-5xl mx-auto my-20 space-y-12 dark:text-gray-50 md:rounded-lg">
        <h3 className="text-4xl">Posts</h3>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  )
}
