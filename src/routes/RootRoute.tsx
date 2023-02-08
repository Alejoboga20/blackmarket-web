import { Outlet } from 'react-router-dom';

export const RootRoute = () => {
	return (
		<div id='root-page'>
			<Outlet />
		</div>
	);
};

export default RootRoute;
