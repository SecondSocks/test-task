import { Button } from '@/components/ui/button/Button'
import { IProduct } from '@/types/product.type'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import Link from 'next/link'

interface Props {
	favorites: IProduct[]
	toggleFavorite: (productId: string) => void
	addToCart: (product: IProduct) => void
}

export function FavoritesPageView({
	favorites,
	toggleFavorite,
	addToCart,
}: Props) {
	return (
		<div className='max-w-6xl mx-auto px-4 py-8'>
			<div className='flex items-center justify-between mb-6'>
				<h1 className='text-2xl font-semibold'>Избранное</h1>
				<div className='text-sm text-gray-500'>
					{favorites.length} {favorites.length === 1 ? 'товар' : 'товара'}
				</div>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
				{favorites.map(product => (
					<article
						key={product.id}
						className='bg-surface border border-border rounded-xl p-4 flex flex-col justify-between'
					>
						<Link href={`/product/${product.id}`} className='no-underline'>
							<div className='h-44 flex items-center justify-center bg-white rounded-md overflow-hidden border border-border'>
								<img
									src={product.images[0]}
									alt={product.title}
									className='object-contain max-h-full w-full'
								/>
							</div>

							<h3 className='mt-3 text-sm font-medium line-clamp-2 min-h-11 text-text'>
								{product.title}
							</h3>

							<div className='mt-2 text-xs text-gray-500'>
								{product.brand.name} · {product.characteristics.memory ?? ''}
							</div>
						</Link>

						<div className='mt-3 flex items-center justify-between'>
							<div>
								<div className='flex items-center gap-2'>
									<Star
										className='fill-yellow-400'
										stroke='#FEC800'
										size={14}
									/>
									<span className='text-sm font-medium'>
										{product.rating.value}
									</span>
									<span className='text-gray-400 text-xs'>
										({product.rating.reviewsCount})
									</span>
								</div>
								<div className='mt-1 text-base font-semibold'>
									{product.price.toLocaleString()} ₽
								</div>
							</div>

							<div className='flex flex-col items-end gap-2'>
								<Button
									size='sm'
									onClick={() => addToCart(product)}
									title='Добавить в корзину'
								>
									<ShoppingCart size={14} />
								</Button>

								<Button
									size='sm'
									variant='secondary'
									onClick={() => toggleFavorite(product.id)}
									title='Убрать из избранного'
								>
									<Heart size={14} className='fill-red-600' />
								</Button>
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	)
}
