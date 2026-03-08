export const PromoTypeEnum = {
	Percent: 'Percent',
	Fixed: 'Fixed',
} as const

export type TPromoType = (typeof PromoTypeEnum)[keyof typeof PromoTypeEnum]

export interface IPromoCode {
	code: string
	type: TPromoType
	value: number

	minOrderAmount?: number
	expiresAt?: string
	maxUses?: number
	used?: number
}
