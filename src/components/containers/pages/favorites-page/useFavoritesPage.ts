import { useCartStore } from '@/store/cart/cart.store'
import { useProductStore } from '@/store/product/product.store'
import { useMemo } from 'react'

export function useFavoritesPage() {
	const products = useProductStore(s => s.products) ?? []
	const toggleFavorite = useProductStore(s => s.toggleFavorite)
	const addToCart = useCartStore(s => s.addProduct)

	const favorites = useMemo(
		() => products.filter(p => p.isFavorite),
		[products],
	)
	return {
		favorites,
		toggleFavorite,
		addToCart,
	}
}
