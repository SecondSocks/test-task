import { ThemeSync } from '@/components/elements/ThemeSync'
import { domAnimation, LazyMotion } from 'motion/react'
import { ReactNode } from 'react'
import { Header } from '../../elements/header/Header'

interface Props {
	children: ReactNode
}

export function MainLayout({ children }: Props) {
	return (
		<LazyMotion features={domAnimation}>
			<div className='w-full max-w-none px-6'>
				<ThemeSync />
				<Header />
				{children}
			</div>
		</LazyMotion>
	)
}
