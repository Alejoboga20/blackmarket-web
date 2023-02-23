import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, InputField } from '../../components';
import logo from '/images/Logo.png';

enum FormFields {
	email = 'email',
}

type FormData = {
	email: string;
};

const schema = yup.object({
	[FormFields.email]: yup.string().email(),
});

export const ForgotPasswordRoute = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormData>({ mode: 'onTouched', resolver: yupResolver(schema) });

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log({ data });
	};

	const isSubmitButtonDisabled = !!errors.email;

	return (
		<div id='forgot-password-page' className='md:max-w-authForms'>
			<form
				action='/auth/forgot-password'
				className='rounded-lg bg-white px-8 pt-10 pb-6'
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<div className='flex w-full justify-center'>
					<img src={logo} alt='blackmarket' />
				</div>

				<p className='mt-9 text-center'>
					Please type your email adrdress below in order to recover your password.
				</p>

				<div className='mt-2 flex flex-col'>
					<InputField
						label='Email'
						name={FormFields.email}
						required
						type='email'
						register={register}
					/>
					<Button
						className='mt-4'
						label='Recover password'
						type='submit'
						variant='primary'
						disabled={isSubmitButtonDisabled}
						fullWidth
					/>
					<Link to='/auth'>
						<Button
							className='mt-4'
							label='Go back to login'
							type='submit'
							variant='outline'
							onClick={() => console.log('Go back to login')}
							fullWidth
						/>
					</Link>
				</div>
			</form>
		</div>
	);
};
