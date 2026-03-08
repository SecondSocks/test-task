import { CategoryPage } from '@/components/containers/pages/category-page/CategoryPage'

interface Props {
	params: Promise<{ slug: string }>
}

export default async function Category({ params }: Props) {
	const { slug } = await params

	return <CategoryPage slug={slug} />
}
