import { create } from 'zustand'
import { IProductStore } from './product-store.types'

export const useProductStore = create<IProductStore>((set, get) => ({
	products: null,

	setProducts: products => set({ products }),
	getProductById: id => {
		return get().products?.find(product => product.id === id)
	},

	toggleFavorite: productId =>
		set(state => ({
			products: state.products?.map(product =>
				product.id === productId
					? { ...product, isFavorite: !product.isFavorite }
					: product,
			),
		})),
	toggleCompared: productId =>
		set(state => ({
			products: state.products?.map(product =>
				product.id === productId
					? { ...product, isCompared: !product.isCompared }
					: product,
			),
		})),
}))
