const DEFAULT_BORDER_RADIUS = 0

export function getBorderRadius() {
  if (typeof document === 'undefined') {
    return DEFAULT_BORDER_RADIUS
  }

  const storedValue = localStorage.getItem('vp-tui-border-radius')
  return storedValue !== null ? Number.parseInt(storedValue, 10) : DEFAULT_BORDER_RADIUS
}

export function setBorderRadius(value) {
  if (typeof document === 'undefined') {
    return false
  }

  // Validate input
  const radiusValue = Number.parseInt(value, 10)
  if (Number.isNaN(radiusValue) || radiusValue < 0) {
    console.warn(`Invalid border radius value: ${value}. Using default.`)
    return false
  }

  // Store in localStorage
  localStorage.setItem('vp-tui-border-radius', radiusValue.toString())

  // Update CSS variables
  const htmlElement = document.documentElement
  htmlElement.style.setProperty('--vp-tui-border-radius', `${radiusValue}px`)
  htmlElement.style.setProperty('--vp-tui-inline-code-border-radius', 'var(--vp-tui-border-radius)')
  htmlElement.style.setProperty('--vp-tui-code-group-standalone-border-radius', 'var(--vp-tui-border-radius)')
  htmlElement.style.setProperty('--vp-tui-code-group-border-radius', `0 0 var(--vp-tui-border-radius) var(--vp-tui-border-radius)`)
  htmlElement.style.setProperty('--vp-tui-code-group-tabs-border-radius', `var(--vp-tui-border-radius) var(--vp-tui-border-radius) 0 0`)
  htmlElement.style.setProperty('--vp-tui-code-group-tabs-label-active-border-radius', '0')
  htmlElement.style.setProperty('--vp-tui-code-copy-border-radius', 'var(--vp-tui-border-radius)')
  htmlElement.style.setProperty('--vp-tui-hero-button-border-radius', 'var(--vp-tui-border-radius)')
  htmlElement.style.setProperty('--vp-tui-hero-feature-border-radius', 'var(--vp-tui-border-radius)')

  return true
}

export function useTuiConfig() {
  if (typeof document === 'undefined') {
    return
  }

  setBorderRadius(getBorderRadius())
}
