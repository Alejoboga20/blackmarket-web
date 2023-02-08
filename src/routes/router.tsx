import { createBrowserRouter } from 'react-router-dom';

import RootRoute from './RootRoute';
import RootAuth from './RootAuth';
import RootErrorRoute from './RootErrorRoute';
import { ProductsRoute, SettingsRoute, CartRoute, PurchasesRoute, HomeRoute } from '../pages/root';
import { SigninRoute, RegisterRoute, ForgotPasswordRoute } from '../pages/auth';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootRoute />,
		errorElement: <RootErrorRoute />,
		children: [
			{
				path: '',
				element: <HomeRoute />,
			},
			{
				path: 'products',
				element: <ProductsRoute />,
			},
			{
				path: 'settings',
				element: <SettingsRoute />,
			},
			{
				path: 'purchases',
				element: <PurchasesRoute />,
			},
			{
				path: 'cart',
				element: <CartRoute />,
			},
		],
	},
	{
		path: 'auth',
		element: <RootAuth />,
		children: [
			{ path: '', element: <SigninRoute /> },
			{ path: 'register', element: <RegisterRoute /> },
			{ path: 'forgot-password', element: <ForgotPasswordRoute /> },
		],
	},
]);
