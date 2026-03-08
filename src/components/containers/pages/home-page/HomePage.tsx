'use client'

import { CatalogView } from '@/components/elements/catalog-view/CatalogView'
import { useHomePage } from './useHomePage'

export function HomePage() {
	const payload = useHomePage()

	return <CatalogView {...payload} />
}
