import { IPromoCode, PromoTypeEnum } from '@/types/promo.types'

// Сгенерировано ИИ
export const PROMO_CODES: IPromoCode[] = [
	{
		code: 'WELCOME10',
		type: PromoTypeEnum.Percent,
		value: 10,
		minOrderAmount: 100,
	},

	{
		code: 'TECH20',
		type: PromoTypeEnum.Percent,
		value: 20,
		minOrderAmount: 500,
	},

	{
		code: 'SAVE50',
		type: PromoTypeEnum.Fixed,
		value: 50,
		minOrderAmount: 300,
	},

	{
		code: 'MEGA100',
		type: PromoTypeEnum.Fixed,
		value: 100,
		minOrderAmount: 1000,
	},

	{
		code: 'SPRING15',
		type: PromoTypeEnum.Percent,
		value: 15,
		expiresAt: '2026-06-01',
	},

	{
		code: 'BLACKFRIDAY',
		type: PromoTypeEnum.Percent,
		value: 30,
		expiresAt: '2026-11-30',
	},

	{
		code: 'APPLE5',
		type: PromoTypeEnum.Percent,
		value: 5,
		minOrderAmount: 200,
	},

	{
		code: 'FREESHIP',
		type: PromoTypeEnum.Fixed,
		value: 20,
		minOrderAmount: 150,
	},

	{
		code: 'VIP25',
		type: PromoTypeEnum.Percent,
		value: 25,
		minOrderAmount: 2000,
		maxUses: 100,
		used: 12,
	},

	{
		code: 'TEST10',
		type: PromoTypeEnum.Percent,
		value: 10,
	},
]
