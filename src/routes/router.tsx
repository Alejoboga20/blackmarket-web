import { createBrowserRouter } from 'react-router-dom';
import RootRoute from './RootRoute';
import RootErrorRoute from './RootErrorRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootRoute />,
		errorElement: <RootErrorRoute />,
	},
]);
