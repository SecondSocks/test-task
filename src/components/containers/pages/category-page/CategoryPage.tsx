'use client'

import { CatalogView } from '@/components/elements/catalog-view/CatalogView'
import { useCategoryPage } from './useCategoryPage'

interface Props {
	slug: string
}

export function CategoryPage({ slug }: Props) {
	const payload = useCategoryPage(slug)

	return <CatalogView {...payload} />
}
