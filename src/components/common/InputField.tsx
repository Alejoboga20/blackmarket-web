import { useState } from 'react';
import cn from 'classnames';

import crossError from '/icons/cross-error.svg';
import visibilityOff from '/icons/visibility-off.svg';
import visibilityOn from '/icons/visibility-on.svg';

export const InputField = ({
	name,
	defaultValue = '',
	label = '',
	placeholder = '',
	isRequired = false,
	disabled = false,
	type = 'text',
	error = '',
}: InputFieldProps) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	return (
		<div className='mt-4 flex flex-col'>
			<label htmlFor={label} className={cn('block', { hidden: !label })}>
				{label} {isRequired && '*'}
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
					required={isRequired}
					placeholder={placeholder}
					name={name}
					defaultValue={defaultValue}
					autoComplete='on'
					formNoValidate
					className={cn(
						'mt-1 h-12 w-full rounded-lg border-1 border-solid border-black p-3 text-black focus:outline-none',
						{ 'border-red-600': error }
					)}
				/>
			</div>

			<div className={cn('mt-1 flex text-red-600', { hidden: !error })}>
				<img src={crossError} alt='error' />
				<small className='ml-2 block'>{error}</small>
			</div>
		</div>
	);
};

interface InputFieldProps {
	name: string;
	label?: string;
	defaultValue?: string;
	placeholder?: string;
	isRequired?: boolean;
	disabled?: boolean;
	error?: string;
	type?: 'text' | 'password' | 'email' | 'file' | 'date';
}
