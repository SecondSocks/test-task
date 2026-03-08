import { useDebounce } from '@/hooks/useDebounce'
import { PRODUCTS } from '@/mock/products.mock'
import { IProduct } from '@/types/product.type'
import { useMemo, useState } from 'react'

export function useSearchField() {
	const [value, setValue] = useState('')

	const debouncedValue = useDebounce(value, 300)

	const foundProducts = useMemo<IProduct[]>(() => {
		if (!debouncedValue) return []

		const query = debouncedValue.toLowerCase()

		return PRODUCTS.filter(
			product =>
				product.title.toLowerCase().includes(query) ||
				product.slug.toLowerCase().includes(query),
		)
	}, [debouncedValue])
	return { value, foundProducts, setValue }
}
