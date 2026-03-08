import { create } from 'zustand'
import { ICartStore } from './cart.interface'

export const useCartStore = create<ICartStore>(set => ({
	products: null,

	addProduct: (product, quantity = 1) =>
		set(state => {
			const items = state.products ?? []
			const idx = items.findIndex(i => i.product.id === product.id)

			if (idx >= 0) {
				const updated = items.map((product, id) =>
					id === idx
						? { ...product, quantity: product.quantity + quantity }
						: product,
				)
				return { products: updated }
			}

			return { products: [...items, { product, quantity: quantity }] }
		}),

	incrementProduct: productId =>
		set(state => ({
			products:
				state.products?.map(product =>
					product.product.id === productId
						? { ...product, quantity: product.quantity + 1 }
						: product,
				) ?? null,
		})),

	decrementProduct: productId =>
		set(state => ({
			products:
				state.products
					?.map(product =>
						product.product.id === productId
							? { ...product, quantity: Math.max(0, product.quantity - 1) }
							: product,
					)
					.filter(product => product.quantity > 0) ?? null,
		})),

	setQuantity: (productId, quantity) =>
		set(state => ({
			products:
				state.products
					?.map(product =>
						product.product.id === productId
							? { ...product, quantity: Math.max(0, Math.floor(quantity)) }
							: product,
					)
					.filter(product => product.quantity > 0) ?? null,
		})),

	deleteProduct: productId =>
		set(state => ({
			products:
				state.products?.filter(product => product.product.id !== productId) ??
				null,
		})),

	clearCart: () => set({ products: null }),
}))
