import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import { FC } from 'react';
import { CartButton } from '../CartButton/CartButton';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
	return (
		<div className={cn(styles.header, className)} {...props}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img
						width="38"
						src="./img/pizza-logo.svg"
						alt="Pizza logo"
					/>
					<div>
						<h1>React Pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</div>
				<div className={styles.cart}>
					<CartButton link="/cart.html" />
				</div>
			</div>
		</div>
	);
};
