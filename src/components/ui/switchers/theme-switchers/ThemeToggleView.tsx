import { TTheme } from '@/store/theme/theme.types'
import { cn } from '@/utils/cn'

interface Props {
	theme: TTheme
	toggleTheme: () => void
}

export function ThemeToggleView({ theme, toggleTheme }: Props) {
	return (
		<button
			onClick={toggleTheme}
			className={cn(
				'relative inline-flex h-6 w-11 items-center rounded-full transition',
				theme === 'dark' ? 'bg-primary' : 'bg-surface-alt',
			)}
		>
			<span
				className={cn(
					'inline-block h-4 w-4 transform rounded-full bg-white transition',
					theme === 'dark' ? 'translate-x-6' : 'translate-x-1',
				)}
			/>
		</button>
	)
}
