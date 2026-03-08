import { cn } from '@/utils/cn'
import { IBadgeProps } from './Badge.types'

const STYLES = {
	default: 'border-surface-muted text-surface-muted',
	New: 'border-red-300 text-red-300',
	Discount: 'border-green-300 text-green-300',
} as const

export function Badge({ children, type = 'default', className }: IBadgeProps) {
	return (
		<span
			className={cn(
				'border rounded-md inline-flex items-center rounded-pill px-3 py-1 text-sm font-semibold -rotate-30',
				STYLES[type],
				className,
			)}
		>
			{children}
		</span>
	)
}
