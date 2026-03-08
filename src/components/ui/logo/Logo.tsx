import Link from 'next/link'

// Сгенерировано ИИ
export function Logo() {
	return (
		<Link href='/'>
			<svg
				width='170'
				height='40'
				viewBox='0 0 170 40'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g>
					<rect x='2' y='6' width='26' height='28' rx='5' fill='#0077E6' />

					<rect x='7' y='10' width='16' height='18' rx='2' fill='white' />

					<circle cx='15' cy='13' r='1.2' fill='#0077E6' />
				</g>

				<text
					x='38'
					y='26'
					fontFamily='Inter, sans-serif'
					fontSize='18'
					fontWeight='600'
					fill='#6e6e6e'
				>
					TechStore
				</text>
			</svg>
		</Link>
	)
}
