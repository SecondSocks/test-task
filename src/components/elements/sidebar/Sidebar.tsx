import { SidebarView } from './SidebarView'
import { useSidebar } from './useSidebar'

export function Sidebar() {
	const payload = useSidebar()

	return <SidebarView {...payload} />
}
