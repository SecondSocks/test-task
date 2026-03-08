import { ICategory } from '@/types/category.types'

// Сгенерировано ИИ
export const CATEGORIES: ICategory[] = [
	// ROOT
	{
		id: 'smartphones',
		name: 'Смартфоны',
		slug: 'smartphones',
		parentId: null,
	},
	{ id: 'laptops', name: 'Ноутбуки', slug: 'laptops', parentId: null },
	{ id: 'tablets', name: 'Планшеты', slug: 'tablets', parentId: null },
	{ id: 'audio', name: 'Аудио', slug: 'audio', parentId: null },
	{
		id: 'accessories',
		name: 'Аксессуар',
		slug: 'accessories',
		parentId: null,
	},
	{
		id: 'wearables',
		name: 'Носимые устройства',
		slug: 'wearables',
		parentId: null,
	},

	// SMARTPHONES
	{
		id: 'smartphones-flagship',
		name: 'Флагманы',
		slug: 'flagship',
		parentId: 'smartphones',
	},
	{
		id: 'smartphones-budget',
		name: 'Бюджетные',
		slug: 'budget',
		parentId: 'smartphones',
	},
	{
		id: 'smartphones-gaming',
		name: 'Игровые',
		slug: 'gaming',
		parentId: 'smartphones',
	},

	// LAPTOPS
	{
		id: 'laptops-ultrabooks',
		name: 'Ультрабуки',
		slug: 'ultrabooks',
		parentId: 'laptops',
	},
	{
		id: 'laptops-gaming',
		name: 'Игровые ноутбуки',
		slug: 'gaming-laptops',
		parentId: 'laptops',
	},
	{
		id: 'laptops-transformers',
		name: 'Ноутбуки трансформеры',
		slug: 'transformers',
		parentId: 'laptops',
	},

	// TABLETS
	{
		id: 'tablets-android',
		name: 'Андроид планшеты',
		slug: 'android-tablets',
		parentId: 'tablets',
	},
	{ id: 'tablets-ipad', name: 'iPad', slug: 'ipad', parentId: 'tablets' },

	// AUDIO
	{
		id: 'audio-headphones',
		name: 'Наушники',
		slug: 'headphones',
		parentId: 'audio',
	},
	{
		id: 'audio-speakers',
		name: 'Колонки',
		slug: 'speakers',
		parentId: 'audio',
	},
	{
		id: 'audio-earbuds',
		name: 'Беспроводные наушники',
		slug: 'earbuds',
		parentId: 'audio',
	},

	// ACCESSORIES
	{
		id: 'accessories-chargers',
		name: 'Зарядные устройства',
		slug: 'chargers',
		parentId: 'accessories',
	},
	{
		id: 'accessories-cases',
		name: 'Чехлы',
		slug: 'cases',
		parentId: 'accessories',
	},
	{
		id: 'accessories-cables',
		name: 'Кабели',
		slug: 'cables',
		parentId: 'accessories',
	},
	{
		id: 'accessories-powerbanks',
		name: 'Power banks',
		slug: 'power-banks',
		parentId: 'accessories',
	},

	// WEARABLES
	{
		id: 'wearables-smartwatch',
		name: 'Смарт часы',
		slug: 'smart-watches',
		parentId: 'wearables',
	},
	{
		id: 'wearables-fitness',
		name: 'Фитнес трекеры',
		slug: 'fitness-trackers',
		parentId: 'wearables',
	},
]
