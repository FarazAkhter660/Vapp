import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const getInitialTheme = (): 'light' | 'dark' => {
    // Check localStorage first
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
    // Fall back to system preference
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme)

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Listen to system preference changes only if no manual preference is set
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const listener = () => {
      // Only update if user hasn't manually set a preference
      const stored = localStorage.getItem('theme')
      if (!stored) {
        setTheme(media.matches ? 'dark' : 'light')
      }
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
  }
}

export default useDarkMode
