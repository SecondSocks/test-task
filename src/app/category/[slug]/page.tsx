import { CategoryPage } from '@/components/containers/pages/category-page/CategoryPage'

export default async function Category({ params }) {
	const param = await params
	const slug = param.slug

	return <CategoryPage slug={slug} />
}
