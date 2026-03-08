import { cn } from '@/utils/cn'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { IMenuProps } from './Menu.types'

interface Props extends IMenuProps {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	ref: RefObject<HTMLDivElement | null>
}

export function MenuView({ open, setOpen, ref, trigger, children }: Props) {
	return (
		<div className='relative inline-block' ref={ref}>
			<div onClick={() => setOpen(v => !v)} className='cursor-pointer'>
				{trigger}
			</div>

			<div
				role='menu'
				aria-hidden={!open}
				className={cn(
					'origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow hover:shadow-lg bg-surface ring-1 ring-black/5 transition-opacity z-50',
					!open && 'invisible opacity-0',
					open && 'visible opacity-100',
				)}
			>
				<div className='py-2' onClick={() => setOpen(false)}>
					{children}
				</div>
			</div>
		</div>
	)
}
