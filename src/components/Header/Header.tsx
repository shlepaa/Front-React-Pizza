import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import { FC } from 'react';
import { CartButton } from '../CartButton/CartButton';
import Logo from './logo.svg';
import { Search } from '../Search/Search';
import { Link } from 'react-router-dom';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
	return (
		<div className={cn(styles.header, className)} {...props}>
			<div className={styles.container}>
				<Link to="/" className={styles.logoBlock}>
					<Logo className={styles.logo} />
					<div>
						<h1>React Pizza</h1>
						<p>самая вкатывающая пицца во вселенной</p>
					</div>
				</Link>
				<Search className={styles.search} />
				<CartButton link="/cart" />
			</div>
		</div>
	);
};
