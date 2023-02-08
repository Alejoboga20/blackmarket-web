import { createBrowserRouter } from 'react-router-dom';

import RootRoute from './RootRoute';
import RootErrorRoute from './RootErrorRoute';
import { ProductsRoute, SettingsRoute, CartRoute, PurchasesRoute } from '../pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootRoute />,
		errorElement: <RootErrorRoute />,
		children: [
			{
				path: '/products',
				element: <ProductsRoute />,
			},
			{
				path: '/settings',
				element: <SettingsRoute />,
			},
			{
				path: '/purchases',
				element: <PurchasesRoute />,
			},
			{
				path: '/cart',
				element: <CartRoute />,
			},
		],
	},
]);
``;
