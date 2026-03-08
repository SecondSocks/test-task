import { cn } from '@/utils/cn'
import { IRadioProps } from './RadioButton.types'

// Сгенерировано ИИ
export const RadioButton = ({ label, className, ...rest }: IRadioProps) => (
	<label
		className={cn(
			'inline-flex items-center gap-2 cursor-pointer select-none',
			className,
		)}
	>
		<input type='radio' className='sr-only peer' {...rest} />
		<span className='w-4 h-4 rounded-full border border-neutral-300 shrink-0 peer-checked:bg-primary peer-checked:border-primary relative'>
			<span className='absolute inset-0 m-auto w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100'></span>
		</span>
		{label && <span className='text-sm text-text'>{label}</span>}
	</label>
)
