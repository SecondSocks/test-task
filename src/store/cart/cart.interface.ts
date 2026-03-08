import { IProduct } from '@/types/product.type'

export interface IProductInCart {
	product: IProduct
	quantity: number
}

export interface ICartStore {
	products: IProductInCart[] | null
	addProduct: (product: IProduct) => void
	incrementProduct: (productId: string) => void
	decrementProduct: (productId: string) => void
	setQuantity: (productId: string, quantity: number) => void
	deleteProduct: (productId: string) => void
	clearCart: () => void
}
