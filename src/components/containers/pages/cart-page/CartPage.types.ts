import { IProductInCart } from '@/store/cart/cart.interface'
import { IPromoCode } from '@/types/promo.types'

export interface ICartPageHookPayload {
	items: IProductInCart[]
	enteredPromo: string
	setEnteredPromo: (value: string) => void

	promo: IPromoCode | undefined

	totals: {
		subtotal: number
		total: number
		discount: number
	}

	increment: (productId: string) => void
	decrement: (productId: string) => void
	deleteProduct: (productId: string) => void
	setQuantity: (productId: string, quantity: number) => void
	clearCart: () => void
}
