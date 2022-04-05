import { marked } from 'marked'
import hl from 'highlight.js'

export async function getAllPostMetadata(): Promise<PostMetadata[]> {
  let { keys } = await DATA.list()
  let posts = keys.map((key) => ({ slug: key.name, ...key.metadata }))
  posts.sort(
    (a, b) =>
      new Date(b.dateWritten).getTime() - new Date(a.dateWritten).getTime()
  )
  return posts
}

export async function getPostBySlug(slug: string) {
  const { value, metadata } = await DATA.getWithMetadata(slug, 'json')

  if (!value || !metadata) {
    throw new Error('post not found!')
  }

  marked.setOptions({
    highlight: (code, lang) => hl.highlight(code, { language: lang }).value
  })
  let html = marked.parse(value.content)

  return {
    ...metadata,
    html,
    slug
  }
}
