import { Link } from 'react-router-dom';
import logo from '/images/Logo.png';
import { Button, InputField } from '../../components';

export const SigninRoute = () => {
	return (
		<div id='signin-page'>
			<form action='/auth/signin' className='rounded-lg bg-white px-8 pt-10 pb-6' noValidate>
				<div className='flex w-full justify-center'>
					<img src={logo} alt='blackmarket' />
				</div>

				<div className='mt-8 flex flex-col'>
					<InputField label='Email' name='email' isRequired type='email' />
					<InputField label='Password' name='password' isRequired type='password' />
					<Button
						className='mt-4'
						label='Log in'
						type='submit'
						variant='primary'
						onClick={() => console.log('login')}
						fullWidth
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
