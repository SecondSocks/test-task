export interface ICategory {
	id: string
	name: string
	slug: string
	parentId: string | null
}

export interface ICategoryNode extends ICategory {
	children: ICategoryNode[]
}
