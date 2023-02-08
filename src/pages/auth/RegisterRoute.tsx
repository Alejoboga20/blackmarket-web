import { Link } from 'react-router-dom';
import logo from '../../../public/images/Logo.png';

export const RegisterRoute = () => {
	return (
		<div id='register-page'>
			<form action='/auth/signin' className='bg-white rounded-lg pt-10 px-4' noValidate>
				<div className='w-full flex justify-center'>
					<img src={logo} alt='blackmarket' />
				</div>

				<div className='flex flex-col mt-9'>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' formNoValidate />

					<label htmlFor='fullname'>Full Name</label>
					<input type='text' id='fullname' formNoValidate />

					<label htmlFor='password'>Password</label>
					<input type='password' id='password' formNoValidate />

					<button name='signup' type='submit'>
						Sign up
					</button>
					<Link to='forgot-password' className='text-center'>
						By signing up, you accept the Data Policy and the Cookies Policy.
					</Link>

					<p>
						Already have an account? <Link to='/auth'>Log in</Link>{' '}
					</p>
				</div>
			</form>
		</div>
	);
};
