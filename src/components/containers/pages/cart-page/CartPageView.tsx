import { Button } from '@/components/ui/button/Button'
import { Price } from '@/components/ui/price/Price'
import { IProductInCart } from '@/store/cart/cart.interface'
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react'
import Link from 'next/link'

interface Props {
	items: IProductInCart[]

	enteredPromo: string
	setEnteredPromo: (value: string) => void

	totals: {
		subtotal: number
		total: number
		discount: number
	}

	increment: (productId: string) => void
	decrement: (productId: string) => void
	deleteProduct: (productId: string) => void
	setQuantity: (productId: string, quantity: number) => void
	clearCart: () => void
}

export function CartPageView({
	items,
	enteredPromo,
	setEnteredPromo,
	totals,
	increment,
	decrement,
	deleteProduct,
	setQuantity,
	clearCart,
}: Props) {
	const totalQuantity = items.reduce((a, b) => a + b.quantity, 0)

	return (
		<div className='max-w-6xl mx-auto px-4 py-8'>
			<h1 className='text-2xl font-semibold mb-6'>Корзина</h1>

			<div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
				<div className='lg:col-span-8'>
					<div className='flex flex-col gap-4'>
						{items.map(item => (
							<div
								key={item.product.id}
								className='flex gap-4 items-center bg-surface border border-border rounded-lg p-4'
							>
								<Link href={`/product/${item.product.id}`} className='shrink-0'>
									<div className='w-28 h-20 bg-white rounded-md flex items-center justify-center overflow-hidden border border-border'>
										<img
											src={item.product.images[0]}
											alt={item.product.title}
											className='w-full h-full object-contain'
										/>
									</div>
								</Link>

								<div className='flex-1 min-w-0'>
									<Link
										href={`/product/${item.product.id}`}
										className='no-underline'
									>
										<h3 className='text-sm font-medium line-clamp-2'>
											{item.product.title}
										</h3>
									</Link>

									<div className='text-xs text-gray-500 mt-1'>
										{item.product.brand.name} ·{' '}
										{item.product.characteristics.memory ?? ''}
									</div>

									<div className='mt-3 flex items-center gap-4'>
										<div className='inline-flex items-center gap-2 bg-surface-alt border border-border rounded-md px-2 py-1'>
											<button onClick={() => decrement(item.product.id)}>
												<MinusCircle size={18} />
											</button>

											<input
												type='number'
												value={item.quantity}
												onChange={e => {
													const v = Number(e.target.value || 0)
													if (!Number.isNaN(v))
														setQuantity(
															item.product.id,
															Math.max(0, Math.floor(v)),
														)
												}}
												className='w-12 text-center bg-transparent text-sm outline-none'
												min={0}
											/>

											<button onClick={() => increment(item.product.id)}>
												<PlusCircle size={18} />
											</button>
										</div>

										<button
											onClick={() => deleteProduct(item.product.id)}
											className='text-sm text-gray-500 hover:text-red-600 flex items-center gap-1'
										>
											<Trash2 size={16} /> Удалить
										</button>
									</div>
								</div>

								<div className='w-28 text-right'>
									<Price value={item.product.price * item.quantity} />
									<div className='text-sm text-gray-500'>
										({item.product.price.toLocaleString()} ₽/шт)
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<aside className='lg:col-span-4'>
					<div className='bg-surface border border-border rounded-lg p-5 sticky top-6'>
						<h3 className='text-lg font-medium'>Итого</h3>

						<div className='mt-4 flex justify-between'>
							<span className='text-sm text-gray-500'>
								Товары ({items.length})
							</span>
							<span className='font-semibold'>{totalQuantity} шт</span>
						</div>

						<div className='mt-4 flex justify-between'>
							<span className='text-sm text-gray-500'>Промежуточный итог</span>
							<Price value={totals.subtotal} />
						</div>

						{totals.discount > 0 && (
							<div className='mt-2 flex justify-between text-green-600'>
								<span className='text-sm'>Скидка</span>
								<Price value={totals.discount} />
							</div>
						)}

						<div className='mt-4 flex justify-between text-lg font-semibold'>
							<span>Итого</span>
							<Price value={totals.total} />
						</div>

						<div className='mt-2 flex justify-between'>
							<span className='text-sm text-gray-500'>Доставим:</span>
							<span className='text-sm'>{new Date().toDateString()}</span>
						</div>

						<div className='mt-4'>
							<input
								placeholder='Промокод'
								className='w-full px-3 py-2 border border-border rounded-md bg-white outline-none text-sm'
								value={enteredPromo}
								onChange={e => setEnteredPromo(e.target.value)}
							/>
						</div>

						<div className='mt-4 flex flex-col gap-2'>
							<Button className='w-full'>Оформить заказ</Button>

							<Button
								variant='secondary'
								className='w-full'
								onClick={clearCart}
							>
								Очистить корзину
							</Button>
						</div>
					</div>
				</aside>
			</div>
		</div>
	)
}
