import { LoaderFunction, useLoaderData } from 'remix'
import { getPostBySlug } from '~/lib/posts'

export let loader: LoaderFunction = async ({ params }) => {
  let post = await getPostBySlug(params.slug as string)

  return post.title
}

export default function Og() {
  let title = useLoaderData()
  return (
    <div className="flex flex-col items-center justify-center w-[1200px] relative mx-auto h-screen gap-24">
      <div className="absolute top-0 w-screen h-[10px] bg-gradient-to-r from-[rgb(30,64,175)] to-[rgb(96,165,250)]"></div>
      <div className="mt-10 text-6xl font-bold leading-[1.3] text-center">
        {title}
      </div>
      <div className="flex items-center gap-10">
        <img
          src="https://pbs.twimg.com/profile_images/1277774477099773954/cNUzQvNX_400x400.jpg"
          className="object-cover w-56 h-56 rounded-full"
        />
        <div className="text-5xl font-light">
          <span>Hi, I'm&nbsp;</span>
          <span className="block tracking-wide text-transparent md:inline theme-gradient bg-clip-text whitespace-nowrap">
            Austin Crim
          </span>
          <div>
            <div className="mt-2">and I wrote something for you.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
