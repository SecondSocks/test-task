'use client'

import { ICategoryNode } from '@/types/category.types'
import { cn } from '@/utils/cn'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Сгенерировано ИИ
interface ICategoryTreeMenuProps {
	nodes: ICategoryNode[]
}

export function CategoryTreeMenu({ nodes }: ICategoryTreeMenuProps) {
	return (
		<ul className='w-60 bg-surface border border-border rounded-lg shadow-md z-50'>
			{nodes.map(category => (
				<li key={category.id} className='group relative'>
					<Link
						href={`/category/${category.slug}`}
						className={cn(
							'flex items-center justify-between px-4 py-2',
							'text-sm text-text',
							'hover:bg-surface-alt transition',
						)}
					>
						<span>{category.name}</span>

						{category.children.length > 0 && (
							<ChevronRight className='w-4 h-4 opacity-60' />
						)}
					</Link>

					{category.children.length > 0 && (
						<ul
							className={cn(
								'absolute left-full top-0',
								'w-60 bg-surface border border-border rounded-lg shadow-md',
								'opacity-0 invisible',
								'group-hover:visible group-hover:opacity-100',
								'transition',
							)}
						>
							{category.children.map(sub => (
								<li key={sub.id}>
									<Link
										href={`/category/${sub.slug}`}
										className='block px-4 py-2 text-sm hover:bg-surface-alt transition'
									>
										{sub.name}
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>
			))}
			<li>
				<Link
					href='/category/new'
					className='block px-4 py-2 text-sm hover:bg-surface-alt transition'
				>
					Новинки
				</Link>
			</li>
			<li>
				<Link
					href='/category/discount'
					className='block px-4 py-2 text-sm hover:bg-surface-alt transition'
				>
					Акции
				</Link>
			</li>
		</ul>
	)
}
