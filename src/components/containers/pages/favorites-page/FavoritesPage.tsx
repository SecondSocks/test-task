'use client'

import { EmptyFavoritesPageView } from './EmptyFavoritesView'
import { FavoritesPageView } from './FavoritesPageView'
import { useFavoritesPage } from './useFavoritesPage'

export default function FavoritesPage() {
	const payload = useFavoritesPage()

	if (payload.favorites.length === 0) {
		return <EmptyFavoritesPageView />
	}

	return <FavoritesPageView {...payload} />
}
