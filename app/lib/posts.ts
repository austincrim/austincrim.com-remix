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
  // const highlight = await import('rehype-highlight')

  const { value, metadata } = await DATA.getWithMetadata(slug, 'json')

  if (!value || !metadata) {
    throw new Error('post not found!')
  }

  let res = await fetch('https://api.github.com/markdown', {
    body: JSON.stringify({ text: value.content }),
    method: 'POST',
    headers: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'austincrim.com'
    }
  })
  let html = await res.text()

  return {
    ...metadata,
    html,
    slug
  }
}
