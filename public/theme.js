let current = localStorage.crimTheme

if (localStorage.crimTheme) {
  document.documentElement.classList.add(localStorage.crimTheme)
} else {
  document.documentElement.classList.add('theme-light')
  localStorage.setItem('crimTheme', 'theme-light')
}

window.addEventListener('DOMContentLoaded', () => {
  let openButton = document.querySelector('[aria-label="toggle theme picker"')
  let container = document.getElementById('theme-container')
  let body = document.getElementById('site-body')
  let swatches = document.getElementById('swatch-list')
  let themeButtons = document.querySelectorAll('li > button[aria-label]')

  openButton.onclick = () => {
    container.classList.toggle('picker-closed')
    container.classList.toggle('picker-open')

    body.classList.toggle('picker-closed__body')
    body.classList.toggle('picker-open__body')

    swatches.classList.toggle('picker-closed__swatches')
    swatches.classList.toggle('picker-open__swatches')
  }

  themeButtons.forEach((button) => {
    button.onclick = () => {
      pickTheme(button.attributes.getNamedItem('data-theme').value)
    }
  })
})

function pickTheme(theme) {
  if (theme === current) return
  document.documentElement.classList.add(theme)
  localStorage.setItem('crimTheme', theme)
  document.documentElement.classList.remove(current)
  current = theme
}
