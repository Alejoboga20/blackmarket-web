import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string | React.ReactNode;
	variant?: ButtonVariants;
	type?: ButtonTypes;
	fullWidth?: boolean;
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
}

type ButtonVariants = 'primary' | 'outline';
type ButtonTypes = 'button' | 'submit' | 'reset';

enum ButtonVariantsEnum {
	PRIMARY = 'primary',
	OUTLINE = 'outline',
}

export const Button = ({
	label,
	type = 'button',
	variant = 'primary',
	fullWidth = false,
	disabled = false,
	onClick,
	className,
	...restProps
}: ButtonProps) => {
	return (
		<button
			disabled={disabled}
			type={type}
			className={cn(
				'mt-3 block rounded-lg p-3',
				'disabled:bg-gray-200 disabled:text-gray-700',
				'hover:border-1 hover:border-blue-700 hover:bg-blue-700 hover:text-white',
				'focus:outline-dashed focus:outline-2 focus:outline-offset-2 focus:outline-blue-600',
				'active:bg-blue-900 active:outline active:outline-4 active:outline-blue-50',
				{ 'w-full': fullWidth },
				{ 'bg-black p-3 text-white': variant === ButtonVariantsEnum.PRIMARY },
				{
					'border-1 border-black': variant === ButtonVariantsEnum.OUTLINE,
				},
				className
			)}
			onClick={onClick}
			{...restProps}
		>
			{label}
		</button>
	);
};
