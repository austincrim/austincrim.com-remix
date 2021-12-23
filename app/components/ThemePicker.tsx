// the design for this component was directly inspired by Max Bock's personal website. Check out his amazing work here: https://mxb.dev/
import ThemeSwatch from './ThemeSwatch'

const themes = [
  {
    id: 'theme-light',
    title: 'Light'
  },
  {
    id: 'theme-dark',
    title: 'Dark'
  },
  {
    id: 'theme-solar',
    title: 'Solar'
  },
  {
    id: 'theme-evergreen',
    title: 'Evergreen'
  }
]

export default function ThemePicker() {
  return (
    <div
      id="theme-container"
      className="absolute w-full overflow-hidden transition-all duration-300 shadow-sm theme-picker-container bg-off-base picker-closed"
    >
      <ul
        id="swatch-list"
        className="p-4 overflow-x-auto text-center transition-all duration-300 whitespace-nowrap picker-closed__swatches"
      >
        {themes.map((theme) => (
          <li
            className={`inline-block mx-4 ${theme.id} transition-transform hover:rotate-2`}
            key={theme.id}
          >
            <button
              aria-label={`select ${theme.title} theme`}
              aria-expanded="false"
              className="transition-transform duration-150 rounded focus:outline-none focus:ring-4 group"
              data-theme={theme.id}
            >
              <ThemeSwatch title={theme.title} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
