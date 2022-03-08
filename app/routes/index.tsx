import type { Appearance as TAppearance, Post, Project } from '@prisma/client'
import type {
  LoaderFunction,
  MetaFunction,
  HeadersFunction,
  LinksFunction
} from 'remix'
import { json, useLoaderData, Link } from 'remix'
import Hero from '~/components/Hero'
import Layout from '~/components/Layout'
import { getAppearances } from '~/lib/appearances'
import { getPosts } from '~/lib/posts.server'
import { getProjects } from '~/lib/projects'

import stylesUrl from '../styles/index.css'

export let meta: MetaFunction = () => {
  return {
    title: 'Austin Crim | building for the web',
    description: 'The personal website of Austin Crim, a builder for the web',
    'og:title': 'The personal website of Austin Crim, a builder for the web',
    'og:image': 'https://austincrim.com/og/index.png',
    'twitter:card': 'summary_large_image',
    'og:url': 'https://austincrim.com'
  }
}

export let links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: 'stylesheet' }]
}

export let headers: HeadersFunction = () => {
  return {
    'cache-control': `s-maxage=${60 * 60 * 3}`
  }
}

// export let loader: LoaderFunction = async () => {
//   const [posts, projects, appearances] = await Promise.all([
//     getPosts({ take: 3, orderBy: { hits: 'desc' } }),
//     getProjects(),
//     getAppearances()
//   ])

//   return json({ posts, projects, appearances })
// }

export default function Index() {
  // let { posts, projects, appearances } = useLoaderData<{
  //   posts: Post[]
  //   projects: Project[]
  //   appearances: TAppearance[]
  // }>()

  return (
    <>
      <div id="site-body">
        <main>
          <Hero />
        </main>
      </div>
    </>
  )
}
