import { setTheme } from './themes.js'

export default function useTUI({ theme } = {}) {
  setTheme(theme || 'default')
}
