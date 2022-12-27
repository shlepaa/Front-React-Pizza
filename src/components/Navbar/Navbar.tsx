import styles from './Navbar.module.scss';
import { NavbarProps } from './Navbar.props';
import { FC } from 'react';
import cn from 'classnames';

export const Navbar: FC<NavbarProps> = ({ className, ...props }) => {
	return <div className={cn(className, styles.navbar)} {...props}></div>;
};
