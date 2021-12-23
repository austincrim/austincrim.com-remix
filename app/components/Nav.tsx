import { Link } from 'remix'
import { GitHubLogo, TwitterLogo, ColorSwatch } from './Icons'

const Nav = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link className="transition-colors hover:text-muted-hover" to="/">
          Home
        </Link>
        <Link className="transition-colors hover:text-muted-hover" to="/blog">
          Blog
        </Link>
      </div>
      <div className="nav-right">
        <button aria-label="toggle theme picker" className="nav-icon">
          <ColorSwatch />
        </button>
        <a
          aria-label="austin crim's github profile"
          href="https://github.com/austincrim"
          className="nav-icon"
        >
          <GitHubLogo />
        </a>
        <a
          aria-label="austin crim's twitter profile"
          href="https://twitter.com/crim_codes"
          className="nav-icon"
        >
          <TwitterLogo />
        </a>
      </div>
    </nav>
  )
}

export default Nav
