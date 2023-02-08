import { Link } from 'react-router-dom';
import logo from '/images/Logo.png';
import { Button, InputField } from '../../components';

export const RegisterRoute = () => {
	return (
		<div id='register-page'>
			<form action='/auth/signin' className='rounded-lg bg-white px-8 pb-6 pt-10' noValidate>
				<div className='flex w-full justify-center'>
					<img src={logo} alt='blackmarket' />
				</div>

				<div className='mt-9 flex flex-col'>
					<InputField label='Email' name='email' isRequired type='email' />
					<InputField label='FullName' name='fullname' isRequired type='text' />
					<InputField label='Password' name='password' isRequired type='password' />

					<Button
						className='mt-4'
						label='Sign up'
						type='submit'
						variant='primary'
						onClick={() => console.log('login')}
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
