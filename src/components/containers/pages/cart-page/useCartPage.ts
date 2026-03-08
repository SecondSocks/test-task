import { PROMO_CODES } from '@/mock/promocodes.mock'
import { useCartStore } from '@/store/cart/cart.store'
import { applyPromo } from '@/utils/apply-promo'
import { useMemo, useState } from 'react'
import { ICartPageHookPayload } from './CartPage.types'

export function useCartPage(): ICartPageHookPayload {
	const items = useCartStore(state => state.products) ?? []

	const increment = useCartStore(state => state.incrementProduct)
	const decrement = useCartStore(state => state.decrementProduct)
	const deleteProduct = useCartStore(state => state.deleteProduct)
	const setQuantity = useCartStore(state => state.setQuantity)
	const clearCart = useCartStore(state => state.clearCart)

	const [enteredPromo, setEnteredPromo] = useState<string>('')

	const promo = useMemo(
		() => PROMO_CODES.find(p => p.code === enteredPromo),
		[enteredPromo],
	)

	const totals = useMemo(() => {
		const subtotal = items.reduce(
			(acc, it) => acc + it.product.price * it.quantity,
			0,
		)

		if (!promo) {
			return {
				subtotal,
				total: subtotal,
				discount: 0,
			}
		}

		const total = applyPromo({ total: subtotal, promo }).total

		return {
			subtotal,
			total,
			discount: subtotal - total,
		}
	}, [items, promo])

	return {
		items,
		enteredPromo,
		setEnteredPromo,
		promo,
		totals,
		increment,
		decrement,
		deleteProduct,
		setQuantity,
		clearCart,
	}
}
