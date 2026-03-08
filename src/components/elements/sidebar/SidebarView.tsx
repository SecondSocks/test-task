import { Button } from '@/components/ui/button/Button'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { Input } from '@/components/ui/input/Input'
import { PriceSlider } from '@/components/ui/sliders/price-slider/PriceSlider'
import { BRANDS } from '@/mock/brands.mock'
import { Dispatch, SetStateAction } from 'react'

interface Props {
	brands: string[]
	min: number
	max: number
	setMin: Dispatch<SetStateAction<number>>
	setMax: Dispatch<SetStateAction<number>>
	setIsFilterOpen: Dispatch<SetStateAction<boolean>>
	toggleBrand: (id: string) => void
	applyFilter: () => void
	handleReset: () => void
}

export function SidebarView({
	brands,
	min,
	max,
	setMax,
	setMin,
	setIsFilterOpen,
	toggleBrand,
	applyFilter,
	handleReset,
}: Props) {
	return (
		<aside className='w-64 shrink-0 border-r border-border p-4 flex flex-col gap-6 mr-3'>
			<h1 className='font-bold text-xl'>Фильтры</h1>
			<div className='flex flex-col gap-2'>
				<h3 className='font-semibold'>Цена</h3>

				<div className='flex flex-col gap-2'>
					<div className='flex gap-2'>
						<Input
							value={min || 1}
							min={1}
							onChange={e => setMin(Number(e.target.value))}
							placeholder='Мин:'
						/>

						<Input
							value={max || 2}
							min={2}
							onChange={e => setMax(Number(e.target.value))}
							placeholder='Макс:'
						/>
					</div>

					<PriceSlider
						min={min}
						max={max}
						minLimit={0}
						maxLimit={1000000}
						step={1}
						setMin={setMin}
						setMax={setMax}
					/>
				</div>
			</div>

			<div className='flex flex-col gap-2'>
				<h3 className='font-semibold'>Бренды</h3>

				<div className='flex flex-col gap-2 max-h-60 overflow-y-auto'>
					{BRANDS.map(brand => (
						<div className='flex items-center gap-2' key={brand.id}>
							<Checkbox
								checked={brands.includes(brand.id)}
								onChange={() => toggleBrand(brand.id)}
							/>
							<p>{brand.name}</p>
						</div>
					))}
				</div>
			</div>

			<div className='flex flex-col gap-2 mt-10'>
				<Button
					onClick={() => {
						applyFilter()
						setIsFilterOpen(false)
					}}
				>
					Применить
				</Button>
				<Button
					variant='secondary'
					onClick={() => {
						handleReset()
						setIsFilterOpen(false)
					}}
				>
					Сбросить
				</Button>
			</div>
		</aside>
	)
}
