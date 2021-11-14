import { Post } from '@prisma/client'
import { json, LoaderFunction, useLoaderData, LinksFunction } from 'remix'
import { getMDXComponent } from 'mdx-bundler/client'
import Layout from '../components/Layout'
import { getPostBySlug } from '../lib/posts.server'
import stylesUrl from '../styles/post.css'

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export let loader: LoaderFunction = async ({ params }) => {
  let post = await getPostBySlug(params.slug!)
  return json(post, { headers: { 'Cache-Control': 's-maxage: 300' } })
}

export function headers({ loaderHeaders }) {
  return {
    'Cache-Control': loaderHeaders.get('Cache-Control')
  }
}

export default function Post() {
  let post = useLoaderData<Post & { mdxBundle: { code: string } }>()
  let Component = getMDXComponent(post.mdxBundle.code)

  return (
    <>
      {/* <Head>
        <meta key="og:title" name="og:title" content={post.title}></meta>
        <meta
          key="og:image"
          name="og:image"
          content={`https://austincrim.com/og/${post.slug}.png`}
        ></meta>
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        ></meta>
        <meta key="description" name="description" content={post.title}></meta>
      </Head> */}
      <Layout>
        <article
          className={`flex flex-col justify-around max-w-4xl pb-16 mx-auto space-y-10 text-base`}
        >
          <div className="flex flex-col space-y-4">
            <h1 className="inline pt-10 text-4xl text-primary heading">{post.title}</h1>
            <span className="text-muted">
              {new Date(post.dateWritten).toLocaleDateString()}
            </span>
          </div>
          <div className="max-w-4xl">
            <div className="mt-8 prose prose-theme max-w-none article">
              <Component />
            </div>
          </div>
        </article>
      </Layout>
    </>
  )
}
