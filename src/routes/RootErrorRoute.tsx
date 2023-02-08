import { useRouteError } from 'react-router-dom';

const RootErrorRoute = () => {
	const error = useRouteError() as RouteError;

	return <div id='error-page'>{error.error.message}</div>;
};

type RouteError = {
	data: string;
	error: ErrorObject;
	internal: boolean;
	status: number;
	statusText: string;
};

type ErrorObject = {
	message: string;
	stack: string;
};

export default RootErrorRoute;
