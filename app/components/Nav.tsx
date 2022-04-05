import { NavLink } from 'remix'
import { GitHubLogo, TwitterLogo, YoutubeLogo } from './Icons'

export default function Nav() {
  return (
    <nav className="p-10 text-muted lg:max-w-5xl md:mx-auto md:max-w-3xl">
      <div className="flex items-baseline justify-between">
        <div className="space-x-6 md:space-x-14">
          <NavLink className="transition-colors hover:text-muted-hover" to="/">
            Home
          </NavLink>
          <NavLink
            className="transition-colors hover:text-muted-hover"
            to="/blog"
          >
            Blog
          </NavLink>
        </div>
        <div className="flex items-baseline space-x-8">
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
            className="inline-block w-8 h-8 transition-colors text-[#1D9BF0] hover:text-[#2EACF1] "
          >
            <TwitterLogo />
          </a>
          <a
            aria-label="austin crim's youtube channel"
            href="https://youtube.com/austincrim"
            className="inline-block w-8 h-8 transition-colors text-[#dd0000] hover:text-[#cc0000]"
          >
            <YoutubeLogo />
          </a>
        </div>
      </div>
    </nav>
  )
}
