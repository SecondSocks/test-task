'use client'

import { useThemeStore } from '@/store/theme/theme.store'
import { useEffect } from 'react'

export function useToggleTheme() {
	const theme = useThemeStore(state => state.theme)
	const toggleTheme = useThemeStore(state => state.toggleTheme)

	useEffect(() => {
		const root = document.documentElement

		theme === 'dark'
			? root.classList.add('dark')
			: root.classList.remove('dark')
	}, [theme])

	return { theme, toggleTheme }
}
