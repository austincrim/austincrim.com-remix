import { type MetaFunction, type HeadersFunction, Link } from 'remix'

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

export let headers: HeadersFunction = () => {
  return {
    'cache-control': `s-maxage=${60 * 60 * 3}`
  }
}

export default function Index() {
  return (
    <>
      <div className="grid w-full h-full place-content-center">
        <header className="px-8 py-16 mx-8 text-center border-4 border-gray-800 rounded-sm bg-gray-50 shadow-theme lg:text-left">
          <h1 className="text-5xl font-bold text-indigo-800 lg:text-6xl font-theme">
            Hello World! I'm&nbsp;Austin.
          </h1>
          <p className="mt-4 text-3xl text-gray-800">
            I create things&nbsp;
            <Link
              className="text-indigo-900 underline hover:text-indigo-700"
              to="/projects"
            >
              for
            </Link>
            &nbsp;and&nbsp;
            <Link
              className="text-indigo-900 underline hover:text-indigo-700"
              to="/content"
            >
              about
            </Link>
            &nbsp;the web.
          </p>
        </header>
        <main></main>
      </div>
    </>
  )
}
