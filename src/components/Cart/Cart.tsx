import styles from './Cart.module.scss';
import { CartProps } from './Cart.props';
import { FC } from 'react';
import cn from 'classnames';

export const Cart: FC<CartProps> = ({ className, ...props }) => {
	return <div className={cn(className, styles.cart)} {...props}></div>;
};
