export const SortOptionEnum = {
	Popularity: 'По популярности',
	PriceAsc: 'По возрастанию',
	PriceDesc: 'По убыванию',
	Rating: 'По рейтингу',
} as const

export type TSortOptionEnum =
	(typeof SortOptionEnum)[keyof typeof SortOptionEnum]
