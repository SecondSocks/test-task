import { ReactNode } from 'react'

export type TBadgeType = 'New' | 'Discount' | 'default'

export interface IBadgeProps {
	children?: ReactNode
	type?: TBadgeType | undefined
	className?: string
}
