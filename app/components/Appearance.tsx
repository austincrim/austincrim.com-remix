import { Appearance as TAppearance } from '@prisma/client'

export default function Appearance({
  appearance
}: {
  appearance: TAppearance
}) {
  return (
    <div className="flex flex-col gap-4 appearance md:flex-row md:justify-between md:items-start">
      <a
        className="text-xl leading-normal transition-colors text-secondary hover:text-primary"
        href={appearance.appearanceUrl}
      >
        {appearance.title}
      </a>
      <span className="bg-off-base shadow w-[fit-content] px-4 rounded-full whitespace-nowrap">
        {appearance.origin}
      </span>
    </div>
  )
}
