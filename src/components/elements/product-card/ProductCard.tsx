'use client'

import { IProduct } from '@/types/product.type'
import { ProductCardView } from './ProductCardView'
import { useProductCard } from './useProductCard'

interface Props {
	product: IProduct
}

export function ProductCard({ product }: Props) {
	const payload = useProductCard(product)

	return <ProductCardView {...payload} />
}
