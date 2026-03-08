import { useFlagStore } from '@/store/product/product-flags.store'
import { IProduct } from '@/types/product.type'
import { useState } from 'react'

export function useProductPage(product: IProduct) {
	const [imageIdx, setImageIdx] = useState(0)

	const isFavorite = useFlagStore(state =>
		state.favoriteIds.includes(product.id),
	)
	const toggleFavorite = useFlagStore(state => state.toggleFavorite)
	const isCompared = useFlagStore(state =>
		state.comparedIds.includes(product.id),
	)
	const toggleCompared = useFlagStore(state => state.toggleCompared)

	const nextImage = () => setImageIdx(i => (i + 1) % product.images.length)
	const previousImage = () =>
		setImageIdx(i => (i - 1 + product.images.length) % product.images.length)

	return {
		imageIdx,
		isFavorite,
		isCompared,
		setImageIdx,
		toggleCompared,
		toggleFavorite,
		nextImage,
		previousImage,
	}
}
