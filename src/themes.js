export const themes = [
  {
    name: 'default',
    label: 'Default',
  },
  {
    name: 'monokai',
    label: 'Monokai',
  },
]
export const availableThemes = themes.map(theme => theme.name)

export function getCurrentTheme() {
  if (typeof document === 'undefined') {
    return 'default'
  }

  const htmlElement = document.documentElement

  for (const theme of themes) {
    if (htmlElement.classList.contains(theme.className)) {
      return theme.name
    }
  }

  return 'default'
}

export function setTheme(themeName) {
  if (typeof document === 'undefined') {
    return false
  }

  if (!availableThemes.includes(themeName)) {
    console.warn(`Theme "${themeName}" not found. Available themes: ${availableThemes.join(', ')}`)
  }

  const htmlElement = document.documentElement

  // Remove existing theme classes.
  htmlElement.classList.remove(
    ...Array.from(htmlElement.classList).filter(className => className.startsWith('tui-theme-')),
  )

  htmlElement.classList.add(`tui-theme-${themeName}`)

  localStorage.setItem('vp-tui-theme', themeName)

  return true
}
