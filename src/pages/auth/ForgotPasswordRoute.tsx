import { Link } from 'react-router-dom';
import logo from '/images/Logo.png';
import { Button, InputField } from '../../components';

export const ForgotPasswordRoute = () => {
	return (
		<div id='forgot-password-page'>
			<form
				action='/auth/forgot-password'
				className='rounded-lg bg-white px-8 pt-10 pb-6'
				noValidate
			>
				<div className='flex w-full justify-center'>
					<img src={logo} alt='blackmarket' />
				</div>

				<p className='mt-9 text-center'>
					Please type your email adrdress below in order to recover your password.
				</p>

				<div className='mt-2 flex flex-col'>
					<InputField label='Email' name='email' isRequired type='email' />

					<Button
						className='mt-4'
						label='Recover password'
						type='submit'
						variant='primary'
						onClick={() => console.log('Recover password')}
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
