import { create } from 'zustand'
import { ICatalogStore } from './catalog.types'

export const useCatalogStore = create<ICatalogStore>(set => ({
	priceRange: {
		min: 0,
		max: 1_000_000,
	},
	brandIds: [],

	sort: undefined,

	page: 1,
	perPage: 12,

	setMinPrice: minPrice =>
		set(state => ({
			priceRange: { min: minPrice, max: state.priceRange.max },
			page: 1,
		})),

	setMaxPrice: maxPrice =>
		set(state => ({
			priceRange: { min: state.priceRange.min, max: maxPrice },
			page: 1,
		})),
	toggleBrandId: brandId =>
		set(state => ({
			brandIds: state.brandIds.includes(brandId)
				? state.brandIds.filter(id => id !== brandId)
				: [...state.brandIds, brandId],
			page: 1,
		})),
	setBrandIds: brandIds => set({ brandIds }),

	resetFilters: () =>
		set(() => ({
			priceRange: { min: 0, max: 1_000_000 },
			brandIds: [],
			page: 1,
		})),

	setSort: sort => set(() => ({ sort, page: 1 })),

	previousPage: () => set(state => ({ page: Math.max(1, state.page - 1) })),
	setPage: page => set(() => ({ page })),
	nextPage: () => set(state => ({ page: state.page + 1 })),
}))
