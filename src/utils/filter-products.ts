import { IFilters } from '@/types/filters.types'
import { IProduct } from '@/types/product.type'

export const filterProducts = (products: IProduct[], filters: IFilters) => {
	if (!products) return []

	return products
		.filter(p =>
			filters.brandIds.length ? filters.brandIds.includes(p.brand.id) : true,
		)
		.filter(
			p =>
				p.price >= filters.priceRange.min && p.price <= filters.priceRange.max,
		)
}
