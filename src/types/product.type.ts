import { IBrand } from './brand.types'
import { ICategory } from './category.types'

export interface IRating {
	value: number
	reviewsCount: number
}

export const ProductBadgeEnum = {
	Discount: 'Discount',
	New: 'New',
} as const
export type TProductBadge =
	(typeof ProductBadgeEnum)[keyof typeof ProductBadgeEnum]

export interface IProductBadge {
	type: TProductBadge
	value?: number
}

export interface ICharacteristics {
	memory?: string
	displaySize?: string
	processor?: string
}

export interface IProduct {
	id: string
	title: string
	slug: string
	rating: IRating
	price: number

	brand: IBrand
	category: ICategory

	images: string[]

	characteristics: ICharacteristics

	badges?: IProductBadge

	isFavorite?: boolean
	isCompared?: boolean
}
