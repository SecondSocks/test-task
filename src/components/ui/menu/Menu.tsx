'use client'

import { IMenuProps } from './Menu.types'
import { MenuView } from './MenuView'
import { useMenu } from './useMenu'

export function Menu({ trigger, children }: IMenuProps) {
	const { open, setOpen, ref } = useMenu()

	return (
		<MenuView open={open} setOpen={setOpen} ref={ref} trigger={trigger}>
			{children}
		</MenuView>
	)
}
