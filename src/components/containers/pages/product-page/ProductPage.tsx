'use client'

import { IProduct } from '@/types/product.type'
import { ProductPageView } from './ProductPageView'
import { useProductPage } from './useProductPage'

interface Props {
	product: IProduct
}

export default function ProductPage({ product }: Props) {
	const payload = useProductPage(product)

	return <ProductPageView product={product} {...payload} />
}
