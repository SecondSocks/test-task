'use client'

import { useThemeStore } from '@/store/theme/theme.store'
import { useEffect } from 'react'

export function ThemeSync() {
	const theme = useThemeStore(state => state.theme)

	useEffect(() => {
		const root = document.documentElement

		if (theme === 'dark') {
			root.classList.add('dark')
		} else {
			root.classList.remove('dark')
		}
	}, [theme])

	return null
}
