import { LinksFunction, Scripts } from 'remix'
import { Links, LiveReload, Meta, Outlet } from 'remix'

import stylesUrl from './styles/tailwind.css'

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export default function App() {
  return (
    <html lang="en" className="h-full max-w-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body className="h-full max-w-full">
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
      <body className="h-full max-w-full">
        <pre>{error.message}</pre>
      </body>
    </html>
  )
}
