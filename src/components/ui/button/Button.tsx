'use client'

import { cn } from '@/utils/cn'
import { IButtonProps } from './Button.types'

// Сгенерировано ИИ
const BASE =
	'inline-flex items-center justify-center rounded-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 '

const SIZES = {
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-base',
	lg: 'px-5 py-3 text-lg',
} as const

const VARIANTS = {
	primary:
		'bg-primary text-white hover:bg-primary shadow-sm hover:brightness-80 transition duration-300',
	secondary:
		'bg-surface text-text border border-neutral-200 hover:brightness-95 transition duration-300',
	ghost: 'bg-transparent text-text hover:bg-surface',
} as const

export function Button({
	variant = 'primary',
	size = 'md',
	className,
	children,
	...rest
}: IButtonProps) {
	return (
		<button
			className={cn(BASE, SIZES[size], VARIANTS[variant], className)}
			{...rest}
		>
			{children}
		</button>
	)
}
