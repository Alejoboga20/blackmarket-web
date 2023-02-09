import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import logo from '/images/Logo.png';
import { Button, InputField } from '../../components';

enum FormFields {
	email = 'email',
	password = 'password',
}

type FormData = {
	email: string;
	password: string;
};

const schema = yup.object({
	[FormFields.email]: yup.string().email().required(),
	[FormFields.password]: yup.string().min(6).required(),
});

export const SigninRoute = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormData>({ mode: 'onTouched', resolver: yupResolver(schema) });

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log({ data });
	};

	const isLoginButtonDisabled = !!(errors.email || errors.password);

	return (
		<div id='signin-page' className='md:max-w-authForms'>
			<form
				action='/auth/signin'
				className='rounded-lg bg-white px-8 pt-10 pb-6'
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<div className='flex w-full justify-center'>
					<img src={logo} alt='blackmarket' />
				</div>

				<div className='mt-8 flex flex-col'>
					<InputField
						label='Email'
						name={FormFields.email}
						isRequired
						type='email'
						register={register}
						error={errors.email?.message}
					/>
					<InputField
						label='Password'
						name={FormFields.password}
						type='password'
						register={register}
						error={errors.password?.message}
						isRequired
					/>
					<Button
						className='mt-4'
						label='Log in'
						type='submit'
						variant='primary'
						fullWidth
						disabled={isLoginButtonDisabled}
					/>
					<Link to='forgot-password' className='mt-4 text-center text-blue-500'>
						I forgot my password
					</Link>
				</div>
			</form>

			<div className='mt-4 rounded-lg bg-white py-5 px-8 text-center '>
				<p>Don't have an account?</p>
				<Link to='register'>
					<Button
						className='mt-4'
						label='Sign up'
						type='submit'
						variant='outline'
						onClick={() => console.log('redirect to register')}
						fullWidth
					/>
				</Link>
			</div>
		</div>
	);
};
