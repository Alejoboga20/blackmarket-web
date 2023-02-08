import { Outlet } from 'react-router-dom';

const RootRoute = () => {
	return (
		<div id='root-page'>
			<Outlet />
		</div>
	);
};

export default RootRoute;
