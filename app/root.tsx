import { LinksFunction, Scripts } from 'remix'
import { Links, LiveReload, Meta, Outlet } from 'remix'
import Layout from './components/Layout'

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
      <body className="text-base transition-colors duration-300 bg-base">
        <Outlet />
        <Scripts />
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
      <body className="text-base transition-colors duration-300 bg-base">
        <Layout>
          <div className="flex flex-col items-center gap-10">
            <p className="text-xl font-bold">
              Yikes! This wasn't supposed to happen 🤔.
            </p>
            <pre className="p-4 border border-black rounded">
              {error.message}
            </pre>
          </div>
        </Layout>
      </body>
    </html>
  )
}
