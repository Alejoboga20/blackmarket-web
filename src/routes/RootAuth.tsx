import { Outlet } from 'react-router-dom';

const RootAuth = () => {
	return (
		<div className='bg-auth-background w-screen h-screen bg-cover'>
			<main className='px-4 pt-10'>
				<Outlet />
			</main>
		</div>
	);
};

export default RootAuth;
