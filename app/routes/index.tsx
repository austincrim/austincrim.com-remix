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
      <div className="w-full h-full p-8">
        <header className="max-w-4xl px-8 py-16 mx-auto border-4 border-gray-800 rounded-sm bg-gray-50 shadow-theme">
          <h1 className="heading-primary">Hello World! I'm&nbsp;Austin.</h1>
          <p className="mt-6 text-3xl text-center text-gray-800">
            I create things <Link to="/projects">for</Link> and{' '}
            <Link to="/content">about</Link> the web.
          </p>
        </header>
        <main></main>
      </div>
    </>
  )
}
