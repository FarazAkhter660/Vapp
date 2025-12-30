import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const getTheme = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'

  const [theme, setTheme] = useState<'light' | 'dark'>(getTheme)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const listener = () => {
      setTheme(media.matches ? 'dark' : 'light')
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  return {
    theme,
    isDark: theme === 'dark',
  }
}

export default useDarkMode
