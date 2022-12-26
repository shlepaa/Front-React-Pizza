import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Content } from '../components';
import { MainLayout } from '../layouts/MainLayout';

export const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Content />} />
				<Route path="*" element={<h1>not found</h1>} />
				<Route path="cart" element={<h1>cart</h1>} />
			</Route>
		</Routes>
	);
};
