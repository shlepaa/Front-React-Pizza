import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { EmptyCart, Header } from '../components';
import styles from './MainLayout.module.scss';
import cn from 'classnames';
import { MainLayoutProps } from './MainLayout.props';

export const MainLayout: FC<MainLayoutProps> = ({ className, ...props }) => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<Header />
			<EmptyCart />
			<Outlet />
			<h1>footer</h1>
		</div>
	);
};
