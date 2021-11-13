import { Link } from 'remix'
import { GitHubLogo, TwitterLogo, ColorSwatch } from './Icons'

const Nav = () => {
  return (
    <nav className="p-10 text-muted lg:max-w-5xl md:mx-auto md:max-w-3xl">
      <div className="flex items-center justify-between">
        <div className="space-x-6 md:space-x-14">
          <Link className="transition-colors hover:text-muted-hover" to="/">
            Home
          </Link>
          <Link className="transition-colors hover:text-muted-hover" to="/blog">
            Blog
          </Link>
        </div>
        <div className="space-x-6">
          <button
            aria-label="toggle theme picker"
            className="w-8 h-8 transition-colors hover:text-muted-hover"
          >
            <ColorSwatch />
          </button>
          <a
            aria-label="austin crim's github profile"
            href="https://github.com/austincrim"
            className="inline-block w-8 h-8 transition-colors hover:text-muted-hover"
          >
            <GitHubLogo />
          </a>
          <a
            aria-label="austin crim's twitter profile"
            href="https://twitter.com/crim_codes"
            className="inline-block w-8 h-8 transition-colors hover:text-muted-hover"
          >
            <TwitterLogo />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
