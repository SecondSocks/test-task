interface Props {
	value: number
}

export function Price({ value }: Props) {
	return <span className='font-semibold'>{value.toLocaleString()} ₽</span>
}
