import { Button } from '@/components/ui/button/Button'
import { Heart, Link } from 'lucide-react'

// Сгенерировано ИИ
export function EmptyFavoritesPageView() {
	return (
		<div className='max-w-6xl mx-auto px-4 py-12 text-center'>
			<div className='inline-flex items-center justify-center w-36 h-36 rounded-full bg-surface border border-border mx-auto mb-6'>
				<Heart size={36} />
			</div>

			<h2 className='text-2xl font-semibold mb-2'>
				У вас пока нет избранных товаров
			</h2>
			<p className='text-sm text-gray-500 mb-6'>
				Добавляйте товары в избранное — они появятся здесь.
			</p>

			<Link href='/' className='inline-block'>
				<Button>Перейти в каталог</Button>
			</Link>
		</div>
	)
}
