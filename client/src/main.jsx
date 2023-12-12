import ReactDOM from 'react-dom/client';
import './index.css';
// import './pages/Main/style.css'

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
// import Error from './pages/Error/Error.jsx'
import Home from './pages/Home/Home'
import LogInSignUp from './pages/LoginSignup/LogInSignUp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		// errorElement: <Error />,
		children: [
			{
				index: true,
				element: <LogInSignUp />,
			},
			{
				path: '/home',
				element: <Home />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
