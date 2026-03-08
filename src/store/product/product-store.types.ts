import { IProduct } from '@/types/product.type'

export interface IProductStore {
	products: IProduct[] | null
	setProducts: (products: IProduct[]) => void
	getProductById: (id: string) => IProduct | undefined

	toggleFavorite: (productId: string) => void

	toggleCompared: (productId: string) => void
}

export interface IFlagStore {
	favoriteIds: string[]
	comparedIds: string[]
	toggleFavorite: (id: string) => void
	toggleCompared: (id: string) => void
	isFavorite: (id: string) => boolean
	isCompared: (id: string) => boolean
}
