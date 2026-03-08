import { useDebounce } from '@/hooks/useDebounce'
import { PRODUCTS } from '@/mock/products.mock'
import { IProduct } from '@/types/product.type'
import { useMemo, useState } from 'react'

export function useSearchField() {
	const [value, setValue] = useState('')

	const debouncedValue = useDebounce(value, 300)
	const normalizedValue = debouncedValue.trim()

	const foundProducts = useMemo<IProduct[]>(() => {
		if (!normalizedValue) return []

		const query = normalizedValue.toLowerCase()

		return PRODUCTS.filter(
			product =>
				product.title.toLowerCase().includes(query) ||
				product.slug.toLowerCase().includes(query),
		)
	}, [normalizedValue])

	const shouldShowResults = Boolean(normalizedValue)
	const isNothingFound = shouldShowResults && foundProducts.length === 0

	return { value, foundProducts, shouldShowResults, isNothingFound, setValue }
}
