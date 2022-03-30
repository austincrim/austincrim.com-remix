import { type MetaFunction, Link } from 'remix'

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

export default function Index() {
  return (
    <>
      <div className="w-full h-full pt-20">
        <header className="max-w-xl px-8 py-16 mx-auto border-4 border-gray-800 rounded-sm lg:max-w-3xl bg-gray-50 shadow-theme">
          <h1 className="heading-primary">Hello World! I'm&nbsp;Austin.</h1>
          <p className="mt-6 text-3xl text-center text-gray-800">
            I create things <Link to="/projects">for</Link> and{' '}
            <Link to="/content">about</Link> the web.
          </p>
        </header>
        {/* <main className="max-w-xl p-8 mx-auto mt-20 border-2 border-gray-800 rounded-sm lg:max-w-3xl bg-gray-50">
          I'm other content!
        </main> */}
      </div>
    </>
  )
}
