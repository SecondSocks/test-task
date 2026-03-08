import { Button } from '@/components/ui/button/Button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

// Сгенерировано ИИ
export function EmptyCartView() {
	return (
		<div className='max-w-6xl mx-auto px-4 py-12 text-center'>
			<div className='inline-flex items-center justify-center w-36 h-36 rounded-full bg-surface border border-border mx-auto mb-6'>
				<ShoppingCart size={36} />
			</div>
			<h2 className='text-xl font-semibold mb-2'>Ваша корзина пуста</h2>
			<p className='text-sm text-gray-500 mb-6'>
				Добавьте товары, чтобы увидеть их здесь.
			</p>
			<Link href='/' className='inline-block'>
				<Button>Перейти в каталог</Button>
			</Link>
		</div>
	)
}
