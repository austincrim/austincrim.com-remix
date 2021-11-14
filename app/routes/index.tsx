import { useLoaderData, json } from 'remix'
import { Link } from 'react-router-dom'
import type { MetaFunction, LoaderFunction } from 'remix'
import type { Post, Project } from '@prisma/client'

import Layout from '~/components/Layout'
import Hero from '~/components/Hero'
import Section from '~/components/Section'
import ProjectCard from '~/components/ProjectCard'
import PostPreview from '~/components/PostPreview'
import { RightArrow } from '~/components/Icons'
import Footer from '~/components/Footer'
import { getPosts } from '~/lib/posts.server'
import { getProjects } from '~/lib/projects'

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

export let loader: LoaderFunction = async () => {
  const [posts, projects] = await Promise.all([
    getPosts({ take: 3, orderBy: { hits: 'desc' } }),
    getProjects()
  ])

  return json({ posts, projects })
}

export default function Index() {
  let { posts, projects } = useLoaderData<{ posts: Post[]; projects: Project[] }>()

  return (
    <>
      <Layout>
        <main>
          <Hero />
          <Section title="Things I Have Built" id="portfolio">
            <ul className="flex flex-col gap-10">
              {projects.map((project) => (
                <li key={project.title}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </Section>
          <Section title="Things I Have Written" id="blog">
            <div className="flex flex-col gap-10">
              <ul className="flex flex-col mt-20 space-y-20">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <PostPreview post={post} />
                  </li>
                ))}
              </ul>
              <Link to="/blog">
                <a className="self-end text-lg font-semibold transition-colors text-primary hover:text-secondary group">
                  <span className="mr-1">Read more</span>
                  <span className="inline-block align-middle transition-transform transform group-hover:translate-x-1">
                    <RightArrow />
                  </span>
                </a>
              </Link>
            </div>
          </Section>
        </main>

        <Footer>
          <div className="flex flex-col items-center gap-4">
            <a className="font-medium underline" href="mailto:aust.crim@gmail.com">
              Say Hi
            </a>
            <span>Designed and developed by Austin Crim</span>
          </div>
        </Footer>
      </Layout>
    </>
  )
}
