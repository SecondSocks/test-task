import { ICategoryNode } from '@/types/category.types'

// Сгенерировано ИИ
export function getCategoryDescendantIds(
	nodes: ICategoryNode[],
	categoryId: string,
): string[] {
	const result: string[] = []

	function dfs(node: ICategoryNode) {
		result.push(node.id)
		node.children.forEach(dfs)
	}

	function find(nodes: ICategoryNode[]) {
		for (const node of nodes) {
			if (node.id === categoryId) {
				dfs(node)
				return true
			}

			if (find(node.children)) return true
		}
		return false
	}

	find(nodes)

	return result
}
