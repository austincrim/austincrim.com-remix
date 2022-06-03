import { Links, LiveReload, Meta, Outlet } from '@remix-run/react'
import { LinksFunction } from '@remix-run/react/routeModules'
import Nav from './components/Nav'

import stylesUrl from './styles/tailwind.css'

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body className="text-base bg-base">
        <Nav />
        <div className="px-10 mx-auto lg:max-w-5xl md:max-w-3xl">
          <Outlet />
        </div>
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body className="text-base bg-base">
        <Nav />
        <main className="px-10 mx-auto lg:max-w-5xl md:max-w-3xl">
          <div className="flex flex-col items-center gap-10">
            <p className="text-xl font-bold">
              Yikes! This wasn't supposed to happen 🤔.
            </p>
            <pre className="p-4 border border-black rounded">
              {error.message}
            </pre>
          </div>
        </main>
      </body>
    </html>
  )
}
