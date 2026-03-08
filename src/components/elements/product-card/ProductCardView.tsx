import { Badge } from '@/components/ui/badge/Badge'
import { Button } from '@/components/ui/button/Button'
import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { cn } from '@/utils/cn'
import {
	CircleArrowLeft,
	CircleArrowRight,
	Heart,
	ShoppingCart,
	Star,
} from 'lucide-react'
import { m } from 'motion/react'
import Link from 'next/link'
import { IProductCardViewProps } from './ProductCard.types'

export function ProductCardView({
	product,
	imageIdx,
	added,
	setImageIdx,
	prevImage,
	nextImage,
	toggleCompared,
	toggleFavorite,
	handleAdd,
}: IProductCardViewProps) {
	return (
		<article
			className={cn(
				'relative bg-surface border border-border rounded-xl p-3',
				'flex flex-col h-full min-w-0 transition',
				'hover:shadow-lg hover:border-primary/40',
			)}
		>
			{product.badges && (
				<Badge
					type={product.badges.type}
					className='absolute top-2 left-2 z-10 text-xs px-2 py-0.5'
				>
					{product.badges.type === 'Discount'
						? `${product.badges.value}%`
						: product.badges.type}
				</Badge>
			)}

			<div className='relative flex items-center justify-center h-28 sm:h-36 md:h-40'>
				<img
					src={product.images[imageIdx]}
					alt={product.title}
					className='max-h-full object-contain'
					draggable={false}
				/>

				<button
					onClick={prevImage}
					className='hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 rounded-full p-1 bg-white/80 hover:bg-white text-gray-600 shadow'
					onMouseDown={e => e.preventDefault()}
				>
					<CircleArrowLeft size={18} />
				</button>

				<button
					onClick={nextImage}
					className='hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-1 bg-white/80 hover:bg-white text-gray-600 shadow'
					onMouseDown={e => e.preventDefault()}
				>
					<CircleArrowRight size={18} />
				</button>
			</div>

			<div className='mt-2 flex justify-center gap-1 overflow-x-auto scrollbar-none'>
				{product.images.slice(0, 3).map((img, idx) => (
					<button
						key={img}
						onClick={() => setImageIdx(idx)}
						className={cn(
							'w-8 h-8 sm:w-10 sm:h-10 rounded-md border overflow-hidden shrink-0',
							idx === imageIdx
								? 'border-primary'
								: 'border-border hover:border-primary',
						)}
					>
						<img
							src={img}
							className='w-full h-full object-cover'
							draggable={false}
						/>
					</button>
				))}
			</div>

			<Link href={`/product/${product.id}`} className='mt-2'>
				<h3 className='text-xs sm:text-sm font-medium line-clamp-2 min-h-8'>
					{product.title}
				</h3>
			</Link>

			<div className='flex items-center justify-between mt-1 text-xs'>
				<div className='flex items-center gap-1 text-gray-400'>
					<Star size={12} className='fill-yellow-400' />
					{product.rating.value}
				</div>

				<label className='flex items-center gap-1 cursor-pointer'>
					<Checkbox
						checked={product.isCompared ?? false}
						onChange={() => toggleCompared(product.id)}
					/>
					<span className='hidden sm:inline'>Сравнить</span>
				</label>
			</div>

			<div className='mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
				<div className='font-semibold text-sm'>
					{product.badges?.type === 'Discount' ? (
						<span className='flex gap-2'>
							<h3 className='line-through text-gray-500 text-xs'>
								{product.price}₽
							</h3>{' '}
							<h3>
								{Math.round(
									(product.price * (100 - product.badges?.value!)) / 100,
								)}
								₽
							</h3>
						</span>
					) : (
						<h3>{product.price}₽</h3>
					)}
				</div>

				<div className='flex gap-1'>
					<Button
						size='sm'
						variant='secondary'
						onClick={() => toggleFavorite(product.id)}
					>
						<Heart
							size={14}
							className={product.isFavorite ? 'fill-red-600' : ''}
						/>
					</Button>

					<m.button
						whileTap={{ scale: 0.9 }}
						whileHover={{ scale: 1.05 }}
						animate={{ scale: added ? [1, 1.3, 1] : 1 }}
						transition={{ type: 'spring', stiffness: 400 }}
						onClick={handleAdd}
						className='relative flex items-center justify-center h-8 w-8 rounded-md bg-primary text-white'
					>
						<ShoppingCart size={16} />
					</m.button>
				</div>
			</div>
		</article>
	)
}
