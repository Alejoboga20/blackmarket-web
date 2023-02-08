import { Outlet } from 'react-router-dom';

const RootAuth = () => {
	return (
		<div className='bg-auth-background w-screen h-screen bg-cover'>
			<Outlet />
		</div>
	);
};

export default RootAuth;
