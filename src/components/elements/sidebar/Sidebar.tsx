import { Dispatch, SetStateAction } from 'react'
import { SidebarView } from './SidebarView'
import { useSidebar } from './useSidebar'

interface Props {
	setIsFilterOpen: Dispatch<SetStateAction<boolean>>
}

export function Sidebar({ setIsFilterOpen }: Props) {
	const payload = useSidebar()

	return <SidebarView setIsFilterOpen={setIsFilterOpen} {...payload} />
}
