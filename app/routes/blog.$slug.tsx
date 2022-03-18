// import {
//   json,
//   LoaderFunction,
//   useLoaderData,
//   LinksFunction,
//   MetaFunction,
//   HeadersFunction
// } from 'remix'
// import Layout from '../components/Layout'
// import { getPostBySlug } from '../lib/posts.server'

// import stylesUrl from '../styles/post.css'

// export let links: LinksFunction = () => {
//   return [{ rel: 'stylesheet', href: stylesUrl }]
// }

// export let loader: LoaderFunction = async ({ params }) => {
//   let post = await getPostBySlug(params.slug!)
//   return json(post, {
//     headers: {
//       'Cache-Control': 'max-age=0, s-maxage=300, stale-while-revalidate=300'
//     }
//   })
// }

// export let headers: HeadersFunction = () => {
//   return {
//     'Cache-Control': 'max-age=0, s-maxage=300, stale-while-revalidate=300'
//   }
// }

// export let meta: MetaFunction = ({ data }: { data: Post }) => {
//   return {
//     title: `Austin Crim | ${data.title}`,
//     'og:title': `Austin Crim | ${data.title}`,
//     'og:image': `https://austincrim.com/og/${data.slug}.png`,
//     'twitter:card': 'summary_large_image',
//     description: `${data.title} | ${data.lede}`
//   }
// }

// export default function Post() {
//   let post = useLoaderData<Post & { mdxBundle: { code: string } }>()
//   let Component = getMDXComponent(post.mdxBundle.code)

//   return (
//     <Layout>
//       <article
//         className={`flex flex-col justify-around max-w-4xl pb-16 mx-auto space-y-10 text-base`}
//       >
//         <div className="flex flex-col space-y-4">
//           <h1 className="inline pt-10 text-4xl text-primary heading">
//             {post.title}
//           </h1>
//           <span className="text-lg">{post.lede}</span>
//           <span className="text-muted">
//             {new Date(post.dateWritten).toLocaleDateString()}
//           </span>
//         </div>
//         <div className="max-w-4xl">
//           <div className="mt-8 prose prose-theme max-w-none article">
//             <Component />
//           </div>
//         </div>
//       </article>
//     </Layout>
//   )
// }
