import { Appearance as TAppearance } from '.prisma/client'

export default function Appearance({ appearance }: { appearance: TAppearance }) {
  return (
    <div className="relative overflow-hidden rounded">
      <a className="group" href={appearance.appearanceUrl}>
        <img
          className="w-[800px] h-auto object-cover group-hover:scale-105 duration-500 transition-transform"
          src={appearance.imgUrl}
          alt={appearance.imgAlt}
        />
        <span className="absolute bottom-0 inline-block w-full p-4 text-xl font-semibold text-white transition-colors bg-gradient-to-t from-black via-black to-transparent group-hover:text-gray-200">
          {appearance.title}
        </span>
      </a>
    </div>
  )
}
