import { Link } from 'react-router-dom';
import logo from '../../../public/images/Logo.png';

export const SigninRoute = () => {
	return (
		<div id='signin-page'>
			<form action='/auth/signin' className='bg-white rounded-lg pt-10 px-4' noValidate>
				<div className='w-full flex justify-center'>
					<img src={logo} alt='blackmarket' />
				</div>

				<div className='flex flex-col mt-9'>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' formNoValidate />

					<label htmlFor='password'>Password</label>
					<input type='password' id='password' formNoValidate />

					<button name='login' type='submit'>
						Log in
					</button>
					<Link to='forgot-password' className='text-center'>
						I forgot my password
					</Link>
				</div>
			</form>

			<div className='bg-white rounded-lg py-5 px-4 mt-4 text-center'>
				<p>Don't have an account?</p>
				<Link to='register'>
					<button name='signup' className='mt-4'>
						Sign up
					</button>
				</Link>
			</div>
		</div>
	);
};
