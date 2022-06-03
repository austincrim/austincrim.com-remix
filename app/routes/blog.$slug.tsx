import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/cloudflare'
import { getPostProperties } from '~/lib/notion'

import stylesUrl from '../styles/post.css'

export let links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export let loader = async ({ params }) => {
  let post = await getPostProperties(params.slug!)
  return json(post)
}

export let headers = () => {
  return {
    'Cache-Control': 'max-age=300, s-maxage=900, stale-while-revalidate=900'
  }
}

export let meta = ({ data }: { data }) => {
  return {
    title: `Austin Crim | ${data.title}`,
    'og:title': `Austin Crim | ${data.title}`,
    'og:image': `https://austincrim.com/og/${data.slug}.png`,
    'twitter:card': 'summary_large_image',
    description: `${data.title} | ${data.lede}`
  }
}

export default function Post() {
  let post = useLoaderData()

  return (
    <article
      className={`flex flex-col justify-around pb-16 space-y-10 text-base`}
    >
      <div className="flex flex-col space-y-4">
        <h1 className="inline pt-10 text-4xl text-primary heading">
          {post.title}
        </h1>
        <span className="text-lg">{post.lede}</span>
        <span className="text-muted">
          {new Date(post.datePublished).toLocaleDateString('en-US')}
        </span>
      </div>
      <div className="max-w-4xl">
        <div
          className="mt-8 leading-loose prose prose-theme max-w-none article"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
    </article>
  )
}
