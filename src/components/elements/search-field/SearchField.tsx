'use client'

import { Input } from '@/components/ui/input/Input'
import { useDebounce } from '@/hooks/useDebounce'
import { PRODUCTS } from '@/mock/products.mock'
import { IProduct } from '@/types/product.type'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export function SearchField() {
	const [value, setValue] = useState('')

	const debouncedValue = useDebounce(value, 300)

	const foundProducts = useMemo<IProduct[]>(() => {
		if (!debouncedValue) return []

		const query = debouncedValue.toLowerCase()

		return PRODUCTS.filter(
			product =>
				product.title.toLowerCase().includes(query) ||
				product.slug.toLowerCase().includes(query),
		)
	}, [debouncedValue])

	return (
		<div className='relative flex flex-col gap-2'>
			<Input
				type='search'
				placeholder='Поиск по сайту...'
				className='w-120'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			{foundProducts && (
				<div className='absolute rounded-md bg-surface w-120 max-h-80 scroll-auto overflow-y-auto z-50 mt-11'>
					{foundProducts.map(product => (
						<Link
							href={`/product/${product.id}`}
							key={product.id}
							className='flex p-2 items-center gap-2'
						>
							<img src={product.images[0]} className='size-6 lg:size-8' />
							<div>
								<h3>{product.title}</h3>
								<p className='text-text-muted'>
									Бренд: <span className='text-text'>{product.brand.name}</span>
								</p>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	)
}
