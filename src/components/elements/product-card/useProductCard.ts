'use client'

import { useCartStore } from '@/store/cart/cart.store'
import { useProductStore } from '@/store/product/product.store'
import { IProduct } from '@/types/product.type'
import { useState } from 'react'

export function useProductCard(product: IProduct) {
	const toggleCompared = useProductStore(state => state.toggleCompared)
	const toggleFavorite = useProductStore(state => state.toggleFavorite)
	const addToCart = useCartStore(state => state.addProduct)

	const [imageIdx, setImageIdx] = useState(0)
	const [added, setAdded] = useState(false)

	const nextImage = () => {
		setImageIdx(prev => (prev + 1 < product.images.length ? prev + 1 : 0))
	}

	const prevImage = () => {
		setImageIdx(prev => (prev > 0 ? prev - 1 : product.images.length - 1))
	}

	const handleAdd = () => {
		addToCart(product)
		setAdded(true)

		setTimeout(() => setAdded(false), 600)
	}

	return {
		product,
		added,
		toggleCompared,
		toggleFavorite,
		handleAdd,
		imageIdx,
		setImageIdx,
		nextImage,
		prevImage,
	}
}
