import ProductPage from '@/components/containers/pages/product-page/ProductPage'
import { PRODUCTS } from '@/mock/products.mock'
import { notFound } from 'next/navigation'

export default async function ProductPageById({ params }) {
	const param = await params
	const product = PRODUCTS.find(p => p.id === param.productId)

	if (!product) {
		notFound()
	}

	return <ProductPage product={product} />
}
