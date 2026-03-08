export interface IPriceRange {
	min: number
	max: number
}

export interface IFilters {
	priceRange: IPriceRange
	brandIds: string[]
}
