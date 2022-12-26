import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

export const App: FC = () => {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
};
