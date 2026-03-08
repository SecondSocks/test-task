import { SortOptionEnum } from '@/constants/sort.constants'
import { IFilters } from '@/types/filters.types'

export type TSort = (typeof SortOptionEnum)[keyof typeof SortOptionEnum]

export interface ICatalogStore extends IFilters {
	sort?: TSort
	page: number
	perPage: number

	setMinPrice: (minPrice: number) => void
	setMaxPrice: (maxPrice: number) => void
	toggleBrandId: (brandId: string) => void
	setBrandIds: (brandIds: string[]) => void

	resetFilters: () => void

	setSort: (sort: TSort) => void

	previousPage: () => void
	setPage: (page: number) => void
	nextPage: () => void
}
