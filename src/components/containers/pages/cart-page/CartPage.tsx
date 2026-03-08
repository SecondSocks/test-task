'use client'

import { CartPageView } from './CartPageView'
import { EmptyCartView } from './EmptyCartView'
import { useCartPage } from './useCartPage'

export default function CartPage() {
	const payload = useCartPage()

	if (payload.items.length === 0) {
		return <EmptyCartView />
	}

	return <CartPageView {...payload} />
}
