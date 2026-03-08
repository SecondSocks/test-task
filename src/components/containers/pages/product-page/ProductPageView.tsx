import { Button } from '@/components/ui/button/Button'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { IProduct } from '@/types/product.type'
import { cn } from '@/utils/cn'
import { CircleArrowLeft, CircleArrowRight, Heart, Star } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface Props {
	product: IProduct
	imageIdx: number
	isFavorite: boolean
	isCompared: boolean
	setImageIdx: Dispatch<SetStateAction<number>>
	toggleCompared: (id: string) => void
	toggleFavorite: (id: string) => void
	nextImage: () => void
	previousImage: () => void
}

export function ProductPageView({
	product,
	imageIdx,
	isFavorite,
	isCompared,
	setImageIdx,
	toggleCompared,
	toggleFavorite,
	nextImage,
	previousImage,
}: Props) {
	return (
		<div className='max-w-6xl mx-auto px-4 py-8'>
			<h1 className='text-2xl font-semibold mb-6'>{product.title}</h1>

			<main className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
				<div className='flex flex-col items-center gap-4'>
					<div className='relative w-full bg-surface rounded-xl border border-border p-6 flex items-center justify-center'>
						<CircleArrowLeft
							className='absolute left-2 cursor-pointer'
							onClick={previousImage}
						/>
						<img
							src={product.images[imageIdx]}
							className='max-h-95 object-contain'
						/>
						<CircleArrowRight
							className='absolute right-2 cursor-pointer'
							onClick={nextImage}
						/>
					</div>
					<div className='flex gap-3'>
						{product.images.map((img, idx) => (
							<img
								key={img}
								src={img}
								onClick={() => setImageIdx(idx)}
								className={cn(
									'w-16 h-16 object-contain border rounded-md cursor-pointer p-1',
									idx === imageIdx
										? 'border-primary'
										: 'border-border hover:border-primary',
								)}
							/>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-6'>
					<div className='text-sm text-gray-400'>
						Бренд:
						<span className='ml-2 text-text font-medium'>
							{product.brand.name}
						</span>
					</div>

					<div className='bg-surface border border-border rounded-xl p-5 flex flex-col gap-3'>
						<p className='flex justify-between'>
							<span className='text-gray-400'>Дисплей</span>
							<span>{product.characteristics.displaySize}"</span>
						</p>
						<p className='flex justify-between'>
							<span className='text-gray-400'>Память</span>
							<span>{product.characteristics.memory} ГБ</span>
						</p>
						<p className='flex justify-between'>
							<span className='text-gray-400'>Процессор</span>
							<span>{product.characteristics.processor}</span>
						</p>
					</div>

					<div className='flex items-center gap-2'>
						<Star className='fill-yellow-400' stroke='#FEC800' size={18} />
						<span className='font-medium'>{product.rating.value}</span>
						<span className='text-gray-400 text-sm'>
							({product.rating.reviewsCount} оценок)
						</span>
					</div>

					<div className='flex items-center gap-4'>
						<label className='flex items-center gap-2 cursor-pointer'>
							<Checkbox
								checked={isCompared}
								onChange={() => toggleCompared(product.id)}
							/>
							<span className='text-sm'>Сравнить</span>
						</label>

						<Button
							variant='secondary'
							onClick={() => toggleFavorite(product.id)}
						>
							<Heart size={18} className={isFavorite ? 'fill-red-600' : ''} />
						</Button>
					</div>

					<div className='bg-surface border border-border rounded-xl p-6 flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>
							{product.price.toLocaleString()} ₽
						</h2>
						<Button className='w-full'>Купить</Button>
					</div>
				</div>
			</main>
		</div>
	)
}
