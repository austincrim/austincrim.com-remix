import { RightArrow } from './Icons'

export default function Hero() {
  return (
    <div className="flex flex-col justify-between my-20 hero space-y-14 sm:items-end sm:flex-row">
      <div className="flex flex-col sm:w-2/3">
        <h1 className="text-5xl">
          <span>Hi, I'm&nbsp;</span>
          <span className="block tracking-wide text-transparent sm:inline theme-gradient bg-clip-text whitespace-nowrap">
            Austin Crim
          </span>
        </h1>
        <h2 className="max-w-lg mt-4 text-3xl font-light">
          I build things for the web.
        </h2>
      </div>
      <div className="flex flex-col items-start justify-center space-y-4 sm:items-end">
        <a
          className="text-lg font-semibold transition-colors text-primary hover:text-secondary group"
          href="mailto:aust.crim@gmail.com"
        >
          <span className="mr-1">Say Hi</span>
          <span className="inline-block align-middle transition-transform transform group-hover:translate-x-1">
            <RightArrow />
          </span>
        </a>
      </div>
    </div>
  )
}
