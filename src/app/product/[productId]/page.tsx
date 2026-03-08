import ProductPage from '@/components/containers/pages/product-page/ProductPage'
import { PRODUCTS } from '@/mock/products.mock'
import { notFound } from 'next/navigation'

interface Props {
	params: Promise<{ productId: string }>
}

export default async function ProductPageById({ params }: Props) {
	const { productId } = await params
	const product = PRODUCTS.find(p => p.id === productId)

	if (!product) {
		notFound()
	}

	return <ProductPage product={product} />
}
