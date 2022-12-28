import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import styles from './MainLayout.module.scss';
import cn from 'classnames';
import { MainLayoutProps } from './MainLayout.props';

export const MainLayout: FC<MainLayoutProps> = ({ className, ...props }) => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<Header />
			<Outlet />
			<h1>footer</h1>
		</div>
	);
};
