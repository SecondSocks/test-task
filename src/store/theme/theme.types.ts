export type TTheme = 'dark' | 'light'

export interface IThemeStore {
	theme: TTheme
	toggleTheme: () => void
}
