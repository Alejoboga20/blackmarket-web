import { InputHTMLAttributes, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import cn from 'classnames';

import crossError from '/icons/cross-error.svg';
import visibilityOff from '/icons/visibility-off.svg';
import visibilityOn from '/icons/visibility-on.svg';

export const InputField = ({
	name,
	defaultValue = '',
	label = '',
	placeholder = '',
	required = false,
	disabled = false,
	type = 'text',
	error = '',
	register,
}: InputFieldProps) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	return (
		<div className='mt-4 flex flex-col'>
			<label htmlFor={label} className={cn('block', { hidden: !label })}>
				{label} {required && '*'}
			</label>

			<div className='relative'>
				<img
					src={isPasswordVisible ? visibilityOn : visibilityOff}
					alt='password visibility'
					onClick={() => setIsPasswordVisible(!isPasswordVisible)}
					className={cn('absolute top-0 bottom-0 right-0 my-auto cursor-pointer px-2', {
						hidden: type !== 'password',
					})}
				/>
				<input
					id={label}
					type={isPasswordVisible ? 'text' : type}
					disabled={disabled}
					required={required}
					placeholder={placeholder}
					defaultValue={defaultValue}
					autoComplete='on'
					formNoValidate
					className={cn(
						'mt-1 h-12 w-full rounded-lg border-1 border-solid border-black p-3 text-black focus:outline-none',
						{ 'border-red-600': error }
					)}
					{...register(name)}
				/>
			</div>

			<div className={cn('mt-1 flex text-red-600', { hidden: !error })}>
				<img src={crossError} alt='error' />
				<small className='ml-2 block'>{error}</small>
			</div>
		</div>
	);
};

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
	error?: string;
	register: UseFormRegister<any>;
}
