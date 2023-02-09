import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, InputField } from '../../components';
import logo from '/images/Logo.png';

enum FormFields {
	email = 'email',
	fullname = 'fullname',
	password = 'password',
}

type FormData = {
	email: string;
	fullname: string;
	password: string;
};

const schema = yup.object({
	[FormFields.email]: yup.string().email().required(),
	[FormFields.fullname]: yup.string().min(3).required(),
	[FormFields.password]: yup.string().min(6).required(),
});

export const RegisterRoute = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormData>({ mode: 'onTouched', resolver: yupResolver(schema) });

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log({ data });
	};

	const isSignupButtonDisabled = !!(errors.email || errors.password || errors.fullname);

	return (
		<div id='register-page' className='md:max-w-authForms'>
			<form
				action='/auth/signin'
				className='rounded-lg bg-white px-8 pb-6 pt-10'
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<div className='flex w-full justify-center'>
					<img src={logo} alt='blackmarket' />
				</div>

				<div className='mt-9 flex flex-col'>
					<InputField
						label='Email'
						name={FormFields.email}
						isRequired
						type='email'
						error={errors.email?.message}
						register={register}
					/>
					<InputField
						label='FullName'
						name={FormFields.fullname}
						isRequired
						type='text'
						error={errors.fullname?.message}
						register={register}
					/>
					<InputField
						label='Password'
						name={FormFields.password}
						isRequired
						type='password'
						error={errors.password?.message}
						register={register}
					/>

					<Button
						className='mt-4'
						label='Sign up'
						type='submit'
						variant='primary'
						disabled={isSignupButtonDisabled}
						fullWidth
					/>

					<p className='mt-4 text-center'>
						By signing up, you accept the Data Policy and the Cookies Policy.
					</p>

					<p className='mt-4 text-center'>
						Already have an account?{' '}
						<Link to='/auth' className='text-blue-500'>
							Log in
						</Link>{' '}
					</p>
				</div>
			</form>
		</div>
	);
};
