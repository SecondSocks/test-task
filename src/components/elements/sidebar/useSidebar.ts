'use client'

import { useCatalogStore } from '@/store/catalog/catalog.store'
import { useState } from 'react'

export function useSidebar() {
	const brandIds = useCatalogStore(state => state.brandIds)
	const setMinPrice = useCatalogStore(state => state.setMinPrice)
	const setMaxPrice = useCatalogStore(state => state.setMaxPrice)
	const setBrandIds = useCatalogStore(state => state.setBrandIds)
	const resetFilters = useCatalogStore(state => state.resetFilters)

	const [min, setMin] = useState(1)
	const [max, setMax] = useState(1_000_000)
	const [brands, setBrands] = useState<string[]>(brandIds)

	const toggleBrand = (id: string) => {
		setBrands(prev =>
			prev.includes(id)
				? prev.filter(brandId => brandId !== id)
				: [...prev, id],
		)
	}

	const applyFilter = () => {
		setMinPrice(min)
		setMaxPrice(max)
		setBrandIds(brands)
	}

	const handleReset = () => {
		resetFilters()
		setMin(1)
		setMax(1_000_000)
		setBrands([])
	}

	return {
		brands,
		min,
		max,
		setMin,
		setMax,
		toggleBrand,
		applyFilter,
		handleReset,
	}
}
