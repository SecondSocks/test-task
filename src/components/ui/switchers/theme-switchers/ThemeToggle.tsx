'use client'

import { ThemeToggleView } from './ThemeToggleView'
import { useToggleTheme } from './useToggleTheme'

export function ThemeSwitcher() {
	const { theme, toggleTheme } = useToggleTheme()

	return <ThemeToggleView theme={theme} toggleTheme={toggleTheme} />
}
