export function calculateDiscount(price: number | undefined, discount: number) {
	return (price! * discount) / 100
}
