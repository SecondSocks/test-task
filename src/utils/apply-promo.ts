import { IPromoCode, PromoTypeEnum } from '@/types/promo.types'

interface Props {
	total: number
	promo: IPromoCode
}

export function applyPromo({ total, promo }: Props) {
	if (promo.minOrderAmount && total < promo.minOrderAmount) {
		return {
			total,
			discount: 0,
			error: `Минимальная сумма заказа ${promo.minOrderAmount}₽`,
		}
	}

	if (promo.expiresAt && new Date(promo.expiresAt) < new Date()) {
		return {
			total,
			discount: 0,
			error: 'Промокод истек',
		}
	}

	let discount = 0

	if (promo.type === PromoTypeEnum.Percent) {
		discount = total * (promo.value / 100)
	} else {
		discount = promo.value
	}

	const finalTotal = Math.max(total - discount, 0)

	return {
		total: finalTotal,
		discount,
	}
}
