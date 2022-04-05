import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <>
      <div id="site-body">
        <Nav />
        <div className="px-10 mx-auto lg:max-w-5xl md:max-w-3xl">
          {children}
        </div>
      </div>
    </>
  )
}
