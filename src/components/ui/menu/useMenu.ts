'use client'

import { useEffect, useRef, useState } from 'react'

export function useMenu() {
	const [open, setOpen] = useState(false)
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const onDoc = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
		}
		document.addEventListener('click', onDoc)
		return () => document.removeEventListener('click', onDoc)
	}, [])

	return { open, setOpen, ref }
}
