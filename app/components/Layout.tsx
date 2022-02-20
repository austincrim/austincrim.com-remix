import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <>
      <div id="site-body">
        {/* <Nav /> */}
        {children}
      </div>
    </>
  )
}
