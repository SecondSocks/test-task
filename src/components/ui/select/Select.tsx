import { cn } from '@/utils/cn'
import { ISelectProps } from './Select.types'

export const Select = ({
	label,
	className,
	children,
	...rest
}: ISelectProps) => {
	return (
		<div className='flex flex-col'>
			{label && <label className='mb-2 text-sm text-muted'>{label}</label>}
			<div className='relative'>
				<select
					className={cn(
						'appearance-none w-full px-4 py-2 rounded-lg border border-neutral-200 bg-surface text-text',
						className,
					)}
					{...rest}
				>
					{children}
				</select>
				<span className='pointer-events-none absolute inset-y-0 right-3 flex items-center'>
					<svg width='18' height='18' viewBox='0 0 20 20' fill='none'>
						<path
							d='M6 8l4 4 4-4'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</span>
			</div>
		</div>
	)
}
