import styles from './EmptyCart.module.scss';
import { EmptyCartProps } from './EmptyCart.props';
import { FC } from 'react';
import cn from 'classnames';
import cart from './cart.png';
import { OrderButton } from '..';

export const EmptyCart: FC<EmptyCartProps> = ({ className, ...props }) => {
	return (
		<div
			data-testid="empty-cart"
			className={cn(className, styles.emptyCart)}
			{...props}>
			<h1 className={styles.title}>Корзина пустая</h1>
			<span className={styles.text}>
				Вероятней всего, вы не заказывали ещё пиццу.
			</span>
			<span className={styles.text}>
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</span>
			<img className={styles.img} src={cart} alt="Empty cart" />
			<OrderButton back className={styles.back}>
				Вернуться назад
			</OrderButton>
		</div>
	);
};
