import { Link } from 'react-router-dom';
import logo from '/images/Logo.png';
import { Button, InputField } from '../../components';

export const SigninRoute = () => {
	return (
		<div id='signin-page'>
			<form action='/auth/signin' className='bg-white rounded-lg pt-10 pb-6 px-8' noValidate>
				<div className='w-full flex justify-center'>
					<img src={logo} alt='blackmarket' />
				</div>

				<div className='flex flex-col mt-8'>
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

			<div className='bg-white rounded-lg py-5 px-8 mt-4 text-center '>
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
