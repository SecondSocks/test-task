import { TSort } from '@/store/catalog/catalog.store'
import { IProduct } from '@/types/product.type'

export function sortProducts(products: IProduct[], sort?: TSort) {
	const copy = [...products]

	if (!sort) return copy

	switch (sort) {
		case 'По возрастанию':
			return products.sort(
				(product1, product2) => product1.price - product2.price,
			)
		case 'По убыванию':
			return products.sort(
				(product1, product2) => product2.price - product1.price,
			)
		case 'По рейтингу':
			return products.sort(
				(product1, product2) => product2.rating.value - product1.rating.value,
			)
		case 'По популярности':
			return products.sort(
				(product1, product2) =>
					product2.rating.reviewsCount - product1.rating.reviewsCount,
			)
		default:
			return copy
	}
}
