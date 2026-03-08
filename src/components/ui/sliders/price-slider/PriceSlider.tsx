'use client'

import { cn } from '@/utils/cn'
import { useCallback, useEffect, useRef } from 'react'

// Сгенерировано ИИ
interface RangeSliderProps {
	min: number
	max: number
	minLimit: number
	maxLimit: number
	setMin: (v: number) => void
	setMax: (v: number) => void
	step?: number
	minGap?: number
	className?: string
}

export function PriceSlider({
	min,
	max,
	minLimit,
	maxLimit,
	setMin,
	setMax,
	step = 1,
	minGap = 0,
	className,
}: RangeSliderProps) {
	const rangeRef = useRef<HTMLDivElement>(null)

	const getPercent = useCallback(
		(value: number) =>
			Math.round(((value - minLimit) / (maxLimit - minLimit)) * 100),
		[minLimit, maxLimit],
	)

	useEffect(() => {
		if (rangeRef.current) {
			const minPercent = getPercent(min)
			const maxPercent = getPercent(max)
			rangeRef.current.style.left = `${minPercent}%`
			rangeRef.current.style.width = `${maxPercent - minPercent}%`
		}
	}, [min, max, getPercent])

	// Специфические стили для thumb (вынесены для чистоты)
	const thumbStyles = cn(
		'[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5',
		'[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white',
		'[&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600',
		'[&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto',
		'[&::-webkit-slider-thumb]:shadow-sm active:[&::-webkit-slider-thumb]:scale-110 transition-transform',
	)

	return (
		<div className={cn('relative flex items-center w-full h-10', className)}>
			<input
				type='range'
				min={minLimit}
				max={maxLimit}
				step={step}
				value={min}
				onChange={e => {
					const value = Math.min(Number(e.target.value), max - minGap)
					setMin(value)
				}}
				// ИСПРАВЛЕНИЕ: Если значение min близко к максимуму, поднимаем его z-index
				className={cn(
					'absolute w-full h-0 appearance-none pointer-events-none outline-none',
					thumbStyles,
					min > maxLimit - 100 ? 'z-[5]' : 'z-[3]',
				)}
			/>

			<input
				type='range'
				min={minLimit}
				max={maxLimit}
				step={step}
				value={max}
				onChange={e => {
					const value = Math.max(Number(e.target.value), min + minGap)
					setMax(value)
				}}
				className={cn(
					'absolute w-full h-0 appearance-none pointer-events-none outline-none z-[4]',
					thumbStyles,
				)}
			/>

			<div className='relative w-full h-1.5 bg-gray-200 rounded-full'>
				<div
					ref={rangeRef}
					className='absolute h-full bg-blue-600 rounded-full'
				/>
			</div>
		</div>
	)
}
