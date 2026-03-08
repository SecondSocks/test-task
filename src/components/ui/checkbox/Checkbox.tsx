import { cn } from '@/utils/cn'
import { Check } from 'lucide-react'
import { forwardRef, memo } from 'react'
import type { ICheckboxProps } from './Checkbox.types'

export const Checkbox = memo(
	forwardRef<HTMLInputElement, ICheckboxProps>(
		({ className, disabled, ...rest }, ref) => {
			return (
				<label
					className={cn(
						'relative inline-flex items-center cursor-pointer',
						disabled && 'opacity-50 cursor-not-allowed',
					)}
				>
					<input
						ref={ref}
						type='checkbox'
						disabled={disabled}
						className='peer sr-only'
						{...rest}
					/>

					<div
						className={cn(
							'w-5 h-5 rounded-sm border border-neutral-300 shrink-0',
							'transition-colors duration-150',
							'peer-checked:bg-primary peer-checked:border-primary',
							className,
						)}
						aria-hidden
					/>

					<span
						className={cn(
							'pointer-events-none absolute left-0 top-0 w-5 h-5 flex items-center justify-center',
							'transition-opacity duration-150',
							'opacity-0 peer-checked:opacity-100',
						)}
					>
						<Check size={14} strokeWidth={3} className='text-white' />
					</span>
				</label>
			)
		},
	),
)
