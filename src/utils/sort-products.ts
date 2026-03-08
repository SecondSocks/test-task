import { TSort } from '@/store/catalog/catalog.types'
import { IProduct } from '@/types/product.type'

const sortMap = {
	'По возрастанию': (a: IProduct, b: IProduct) => a.price - b.price,
	'По убыванию': (a: IProduct, b: IProduct) => b.price - a.price,
	'По рейтингу': (a: IProduct, b: IProduct) => b.rating.value - a.rating.value,
	'По популярности': (a: IProduct, b: IProduct) =>
		b.rating.reviewsCount - a.rating.reviewsCount,
}

export function sortProducts(products: IProduct[], sort?: TSort) {
	if (!sort) return products
	return [...products].sort(sortMap[sort])
}
