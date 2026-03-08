import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IThemeStore } from './theme.types'

export const useThemeStore = create<IThemeStore>()(
	persist(
		set => ({
			theme: 'light',
			toggleTheme: () =>
				set(state => ({
					theme: state.theme === 'light' ? 'dark' : 'light',
				})),
		}),
		{ name: 'theme-storage' },
	),
)
