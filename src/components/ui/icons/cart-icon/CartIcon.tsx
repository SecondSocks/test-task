'use client'

import { useHydrated } from '@/hooks/useHydrated'
import { useCartStore } from '@/store/cart/cart.store'
import { cn } from '@/utils/cn'
import { ShoppingCart } from 'lucide-react'
import { useMemo } from 'react'

export function CartIcon() {
	const hydrated = useHydrated()

	const items = useCartStore(state => state.products)

	const totalCount = useMemo(() => {
		if (!items) return 0
		return items.reduce((acc, product) => acc + product.quantity, 0)
	}, [items])

	if (!hydrated) {
		return <ShoppingCart size={22} />
	}

	return (
		<div className='relative inline-flex items-center'>
			<ShoppingCart size={22} />
			{totalCount > 0 && (
				<span
					className={cn(
						'absolute -right-2 -top-2 inline-flex items-center justify-center',
						'w-5 h-5 text-xs rounded-full bg-red-600 text-white font-medium',
					)}
					aria-label={`${totalCount} items in cart`}
				>
					{totalCount}
				</span>
			)}
		</div>
	)
}
