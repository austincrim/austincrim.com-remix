import { Link } from '@remix-run/react'
import { RightArrow } from './Icons'

export default function PostPreview({ post }) {
  return (
    <Link prefetch="intent" className="group" to={`/blog/${post.slug}`}>
      <article className="relative flex items-center transition-transform sm:group-hover:-translate-x-2">
        <div className="flex flex-col flex-grow py-8 space-y-1 text-base rounded sm:px-8 sm:shadow-md sm:bg-off-base">
          <div className="flex flex-col justify-between space-y-2 md:space-y-0 md:space-x-2 md:flex-row md:items-baseline">
            <h3 className="text-xl font-bold tracking-wider underline sm:no-underline">
              {post.title}
            </h3>
            <div className="flex flex-col md:items-end md:pl-2">
              <span className="text-muted">
                {new Date(post.datePublished).toLocaleDateString()}
              </span>
            </div>
          </div>
          <p className="max-w-3xl leading-8">{post.lede}</p>
        </div>
        <span className="absolute transition opacity-0 sm:group-hover:opacity-100 -right-8">
          <RightArrow height={32} width={32} />
        </span>
      </article>
    </Link>
  )
}
