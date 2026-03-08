'use client'

import { Button } from '@/components/ui/button/Button'
import { CartIcon } from '@/components/ui/icons/cart-icon/CartIcon'
import { Logo } from '@/components/ui/logo/Logo'
import { Menu } from '@/components/ui/menu/Menu'
import { ThemeSwitcher } from '@/components/ui/switchers/theme-switchers/ThemeToggle'
import { CATEGORIES } from '@/mock/category.mock'
import { buildCategoryTree } from '@/utils/build-categoty-tree'
import { Menu as Burger, CircleUser, Heart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { CategoryTreeMenu } from '../CategotyTree'
import { SearchField } from '../search-field/SearchField'

export function Header() {
	const tree = buildCategoryTree(CATEGORIES)
	const [mobileMenu, setMobileMenu] = useState(false)

	return (
		<header className='w-full lg:px-4 border-b border-border bg-surface'>
			<div className='flex items-center gap-3 py-3'>
				<button className='lg:hidden' onClick={() => setMobileMenu(v => !v)}>
					<Burger />
				</button>

				<Logo />

				<div className='hidden lg:block'>
					<Menu trigger={<Button size='sm'>Категории</Button>}>
						<CategoryTreeMenu nodes={tree} />
					</Menu>
				</div>

				<div className='flex-1 min-w-0 hidden sm:block'>
					<SearchField />
				</div>

				<div className='flex items-center gap-3 ml-auto'>
					<Link href='/favorites' className='flex flex-col items-center gap-1'>
						<Heart size={20} />
						<span className='hidden xl:inline text-sm'>Избранное</span>
					</Link>

					<Link href='/cart' className='flex flex-col items-center gap-1'>
						<CartIcon />
						<span className='hidden xl:inline text-sm'>Корзина</span>
					</Link>

					<Link href='#' className='flex flex-col items-center gap-1'>
						<CircleUser size={20} />
						<span className='hidden xl:inline text-sm'>Профиль</span>
					</Link>

					<ThemeSwitcher />
				</div>
			</div>

			<div className='sm:hidden pb-3'>
				<SearchField />
			</div>

			{mobileMenu && (
				<div className='lg:hidden border-t border-border pt-3'>
					<CategoryTreeMenu nodes={tree} />
				</div>
			)}
		</header>
	)
}
