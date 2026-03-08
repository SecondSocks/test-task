import { PRODUCTS } from '@/mock/products.mock'
import { useCatalogStore } from '@/store/catalog/catalog.store'
import { useProductStore } from '@/store/product/product.store'
import { filterProducts } from '@/utils/filter-products'
import { sortProducts } from '@/utils/sort-products'
import { useEffect, useMemo, useState } from 'react'

export function useHomePage() {
	const products = useProductStore(s => s.products)
	const setProducts = useProductStore(s => s.setProducts)

	const {
		priceRange,
		brandIds,
		sort,
		page,
		perPage,
		setSort,
		previousPage,
		nextPage,
	} = useCatalogStore()

	const [expandedPages, setExpandedPages] = useState(1)

	useEffect(() => {
		if (!products) {
			setProducts(PRODUCTS)
		}
	}, [products, setProducts])

	const filtered = useMemo(() => {
		if (!products) return []
		return filterProducts(products, { priceRange, brandIds })
	}, [products, priceRange, brandIds])

	const sorted = useMemo(() => {
		return sortProducts(filtered, sort)
	}, [filtered, sort])

	const visibleProducts = useMemo(() => {
		const start = (page - 1) * perPage
		const end = start + expandedPages * perPage

		return sorted.slice(start, end)
	}, [sorted, page, perPage, expandedPages])

	const totalCount = filtered.length

	const hasMore = (page - 1) * perPage + visibleProducts.length < totalCount

	const showMore = () => {
		setExpandedPages(prev => prev + 1)
	}

	useEffect(() => {
		setExpandedPages(1)
	}, [page])

	return {
		visibleProducts,
		sort,
		page,
		perPage,
		totalCount,
		hasMore,
		setSort,
		previousPage,
		nextPage,
		showMore,
	}
}
