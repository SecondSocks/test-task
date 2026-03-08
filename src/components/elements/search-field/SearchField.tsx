'use client'

import { Input } from '@/components/ui/input/Input'
import Link from 'next/link'
import { useSearchField } from './useSearchField'

export function SearchField() {
	const { value, setValue, foundProducts, shouldShowResults, isNothingFound } =
		useSearchField()

	return (
		<div className='relative flex flex-col gap-2'>
			<Input
				type='search'
				placeholder='Поиск по сайту...'
				className=' md:w-80 lg:w-120'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			{shouldShowResults && (
				<div className='absolute rounded-md bg-surface w-120 max-h-80 scroll-auto overflow-y-auto z-50 mt-11'>
					{isNothingFound ? (
						<p className='p-3 text-text-muted'>ничего не найдено</p>
					) : (
						foundProducts.map(product => (
							<Link
								href={`/product/${product.id}`}
								key={product.id}
								className='flex p-2 items-center gap-2'
								onClick={() => setValue('')}
							>
								<img src={product.images[0]} className='size-6 lg:size-8' />
								<div>
									<h3>{product.title}</h3>
									<p className='text-text-muted'>
										Бренд:{' '}
										<span className='text-text'>{product.brand.name}</span>
									</p>
								</div>
							</Link>
						))
					)}
				</div>
			)}
		</div>
	)
}
