import { Link } from 'remix'

export default function Content() {
  return (
    <div className="w-full h-full max-w-xl pt-20 mx-auto lg:max-w-4xl">
      <main className="relative px-8 py-16 text-center border-4 border-gray-800 rounded-sm bg-gray-50 shadow-theme">
        <h1 className="heading-primary">Stuff I'm Creating</h1>
        <p className="mt-6 text-3xl text-gray-800">
          Blogs, vlogs, screencasts, streams.
        </p>
      </main>
    </div>
  )
}
