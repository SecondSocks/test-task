export type TButtonVariant = 'primary' | 'secondary' | 'ghost'
export type TButtonSize = 'sm' | 'md' | 'lg'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: TButtonVariant
	size?: TButtonSize
}
