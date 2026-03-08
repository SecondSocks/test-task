// 'use client'
import { ProductCard } from '@/components/elements/product-card/ProductCard'
import { Sidebar } from '@/components/elements/sidebar/Sidebar'
import { Button } from '@/components/ui/button/Button'
import { Select } from '@/components/ui/select/Select'
import { SortOptionEnum } from '@/constants/sort.constants'
import { TSort } from '@/store/catalog/catalog.types'
import { IProduct } from '@/types/product.type'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import { useState } from 'react'

interface Props {
	totalCount: number
	sort?: TSort
	page: number
	perPage: number
	visibleProducts: IProduct[]
	setSort: (sort: TSort) => void
	previousPage: () => void
	nextPage: () => void
	hasMore: boolean
	showMore: () => void
}

export function CatalogView({
	totalCount,
	sort,
	page,
	perPage,
	visibleProducts,
	setSort,
	previousPage,
	nextPage,
	hasMore,
	showMore,
}: Props) {
	const [isFiltersOpen, setIsFiltersOpen] = useState(false)

	return (
		<main className='mt-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 w-full'>
			<aside className='hidden lg:block'>
				<div className='w-70'>
					<Sidebar />
				</div>
			</aside>

			<section className='min-w-0 flex flex-col gap-4'>
				<h1 className='text-2xl font-semibold'>{totalCount} товаров</h1>

				<div className='flex items-center gap-2 w-full'>
					<div className='flex-1 min-w-0 sm:max-w-xs'>
						<Select
							value={sort ?? 'none'}
							onChange={e => setSort(e.target.value as any)}
							className='w-full'
						>
							<option value='Не выбрано'>Не выбрано</option>
							<option value={SortOptionEnum.PriceAsc}>
								{SortOptionEnum.PriceAsc}
							</option>
							<option value={SortOptionEnum.PriceDesc}>
								{SortOptionEnum.PriceDesc}
							</option>
							<option value={SortOptionEnum.Popularity}>
								{SortOptionEnum.Popularity}
							</option>
							<option value={SortOptionEnum.Rating}>
								{SortOptionEnum.Rating}
							</option>
						</Select>
					</div>

					<Button
						variant='secondary'
						size='sm'
						className='lg:hidden ml-auto'
						onClick={() => setIsFiltersOpen(v => !v)}
						aria-expanded={isFiltersOpen}
						aria-controls='mobile-filters'
					>
						Фильтры
					</Button>
				</div>

				{isFiltersOpen && (
					<div
						id='mobile-filters'
						className='lg:hidden rounded-xl border border-border bg-surface p-3'
					>
						<Sidebar />
					</div>
				)}

				<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr min-h-0'>
					{visibleProducts.map(p => (
						<div key={p.id} className='h-full'>
							<ProductCard product={p} />
						</div>
					))}
				</div>

				<div className='flex justify-center mt-6'>
					{hasMore && <Button onClick={showMore}>Показать ещё</Button>}
				</div>

				<div className='flex justify-center mt-4 gap-2'>
					{page > 1 && (
						<CircleArrowLeft
							onClick={previousPage}
							className='cursor-pointer'
						/>
					)}
					<span className='px-3 py-1 rounded-md bg-surface-alt'>{page}</span>
					{hasMore && (
						<CircleArrowRight onClick={nextPage} className='cursor-pointer' />
					)}
				</div>
			</section>
		</main>
	)
}
