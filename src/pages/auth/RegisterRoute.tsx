import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthContext } from '../../context/auth/AuthContext';
import { Button, InputField } from '../../components';
import logo from '/images/Logo.png';

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

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
	[FormFields.fullname]: yup.string().min(3),
	[FormFields.password]: yup
		.string()
		.matches(
			PASSWORD_REGEX,
			'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one symbol and one number'
		)
		.required(),
});

export const RegisterRoute = () => {
	const { user, error, signUp } = useContext(AuthContext);
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormData>({ mode: 'onTouched', resolver: yupResolver(schema) });

	const onSubmit: SubmitHandler<FormData> = async ({ email, password, fullname }) =>
		signUp(email, password, fullname);

	const isSignupButtonDisabled = !!(errors.email || errors.password || errors.fullname);

	return (
		<div id='register-page' className='md:max-w-authForms'>
			<form
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
						required
						type='email'
						error={errors.email?.message}
						register={register}
					/>
					<InputField
						label='Fullname'
						name={FormFields.fullname}
						required
						type='text'
						error={errors.fullname?.message}
						register={register}
					/>
					<InputField
						label='Password'
						name={FormFields.password}
						required
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
