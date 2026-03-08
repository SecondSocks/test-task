'use client'

import { cn } from '@/utils/cn'
import { forwardRef, memo } from 'react'
import { IInputProps } from './Input.types'

export const Input = memo(
	forwardRef<HTMLInputElement, IInputProps>(
		({ className, label, error, ...props }, ref) => {
			return (
				<div className='flex flex-col gap-1'>
					{label && (
						<label className='text-sm font-medium text-text'>{label}</label>
					)}

					<input
						ref={ref}
						className={cn(
							'w-full rounded-md border border-border bg-surface',
							'px-3 py-2 text-sm text-text placeholder:text-text-muted',
							'outline-none transition',

							'focus:border-primary focus:ring-2 focus:ring-primary/20',

							'disabled:opacity-50 disabled:cursor-not-allowed',

							error && 'border-red-500 focus:ring-red-500/20',

							className,
						)}
						{...props}
					/>

					{error && <span className='text-xs text-red-500'>{error}</span>}
				</div>
			)
		},
	),
)

Input.displayName = 'Input'
