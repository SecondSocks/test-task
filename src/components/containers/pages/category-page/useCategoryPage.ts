'use client'

import { CATEGORIES } from '@/mock/category.mock'
import { PRODUCTS } from '@/mock/products.mock'
import { useCatalogStore } from '@/store/catalog/catalog.store'
import { useProductStore } from '@/store/product/product.store'
import { buildCategoryTree } from '@/utils/build-categoty-tree'
import { filterProducts } from '@/utils/filter-products'
import { getCategoryDescendantIds } from '@/utils/get-category-descendant'
import { sortProducts } from '@/utils/sort-products'
import { useEffect, useMemo, useState } from 'react'

export function useCategoryPage(slug: string) {
	const productsFromStore = useProductStore(s => s.products)
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
		if (!productsFromStore) {
			setProducts(PRODUCTS)
		}
	}, [productsFromStore, setProducts])

	const tree = useMemo(() => buildCategoryTree(CATEGORIES), [])

	const products = useMemo(() => {
		if (!productsFromStore) return []

		if (slug === 'new') {
			return productsFromStore.filter(p => p.badges?.type === 'New')
		}

		if (slug === 'discount') {
			return productsFromStore.filter(p => p.badges?.type === 'Discount')
		}

		const category = CATEGORIES.find(c => c.slug === slug)

		if (!category) return []

		const categoryIds = getCategoryDescendantIds(tree, category.id)

		return productsFromStore.filter(p => categoryIds.includes(p.category.id))
	}, [productsFromStore, slug, tree])

	const filtered = useMemo(() => {
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
		setSort,
		previousPage,
		nextPage,
		hasMore,
		showMore,
	}
}
