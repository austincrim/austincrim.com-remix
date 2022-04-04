export async function getPosts(): Promise<Post[]> {
  let { keys } = await DATA.list()
  let postValues = await Promise.allSettled(
    keys.map((slug) => DATA.get(slug.name, 'json'))
  )

  let posts = postValues.map((p, i) => ({ ...p.value, slug: keys[i].name }))

  posts.sort(
    (a, b) =>
      new Date(b.dateWritten).getTime() - new Date(a.dateWritten).getTime()
  )

  return posts
}

export async function getPostBySlug(slug: string) {
  // const highlight = await import('rehype-highlight')

  const post = await DATA.get<Post>(slug, 'json')

  if (!post) {
    throw new Error('post not found!')
  }

  let res = await fetch('https://api.github.com/markdown', {
    body: JSON.stringify({ text: post.content }),
    method: 'POST',
    headers: {
      accept: 'application/vnd.github.v3+json',
      'user-agent': 'austincrim.com'
    }
  })
  let html = await res.text()

  return {
    ...post,
    html,
    slug
  }
}
