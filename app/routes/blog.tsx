// import Head from 'next/head'
import PostPreview from '../components/PostPreview'
import Layout from '../components/Layout'
import { getPosts } from '../lib/posts.server'
import { LoaderFunction, useLoaderData, json } from 'remix'
import { Post } from '@prisma/client'

export let loader: LoaderFunction = async () => {
  const posts = await getPosts({ orderBy: { dateWritten: 'desc' } })

  return json(posts)
}

export default function Blog() {
  const posts = useLoaderData<Post[]>()
  return (
    <>
      {/* <Head>
        <meta
          key="description"
          name="description"
          content="The blog of Austin Crim, a fullstack web developer"
        />
        <meta key="og:title" name="og:title" content="Austin Crim's blog about web development etc."></meta>
        <meta key="og:image" name="og:image" content="https://austincrim.com/og/index.png"></meta>
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        ></meta>
      </Head> */}
      <Layout>
        <div className="flex flex-col max-w-5xl mx-auto my-20 space-y-12 dark:text-gray-50 md:rounded-lg">
          <h3 className="text-4xl">Posts</h3>
          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </Layout>
    </>
  )
}
