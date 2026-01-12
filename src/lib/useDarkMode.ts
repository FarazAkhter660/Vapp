import { useThemeStore } from '../stores/theme'

const useDarkMode = () => {
  const theme = useThemeStore((state) => state.theme)
  const isDark = useThemeStore((state) => state.isDark)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return {
    theme,
    isDark,
    toggleTheme,
  }
}

export default useDarkMode
