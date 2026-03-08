import { ICategory, ICategoryNode } from '@/types/category.types'

// Сгенерировано ИИ
export function buildCategoryTree(categories: ICategory[]): ICategoryNode[] {
	const map = new Map<string, ICategoryNode>()
	const roots: ICategoryNode[] = []

	categories.forEach(category => {
		map.set(category.id, { ...category, children: [] })
	})

	categories.forEach(category => {
		const node = map.get(category.id)!

		if (category.parentId) {
			const parent = map.get(category.parentId)
			parent?.children.push(node)
		} else {
			roots.push(node)
		}
	})

	return roots
}
