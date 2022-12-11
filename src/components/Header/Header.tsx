import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import { FC } from 'react';
import { CartButton } from '../CartButton/CartButton';
import Logo from './logo.svg';
import { Search } from '../Search/Search';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
	return (
		<div className={cn(styles.header, className)} {...props}>
			<div className={styles.container}>
				<div className={styles.logoBlock}>
					<Logo className={styles.logo} />
					<div>
						<h1>React Pizza</h1>
						<p>самая вкатывающая пицца во вселенной</p>
					</div>
				</div>
				<Search className={styles.search} />
				<CartButton link="/cart.html" />
			</div>
		</div>
	);
};
