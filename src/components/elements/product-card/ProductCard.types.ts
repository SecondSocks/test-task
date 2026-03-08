import { IProduct } from '@/types/product.type'
import { Dispatch, SetStateAction } from 'react'

export interface IProductCardViewProps {
	product: IProduct
	imageIdx: number
	setImageIdx: Dispatch<SetStateAction<number>>
	added: boolean
	prevImage: () => void
	nextImage: () => void
	toggleCompared: (productId: string) => void
	toggleFavorite: (productId: string) => void
	handleAdd: () => void
}
