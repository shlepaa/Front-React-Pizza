import styles from './Cart.module.scss';
import { CartProps } from './Cart.props';
import { FC } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { BsCart, BsTrash } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { clearPizzas } from '../../store/slices/PizzasSlice/PizzasSlice';
import { EmptyCart, OrderButton, OrderPosition } from '../../components';

export const Cart: FC<CartProps> = ({ className, ...props }) => {
	const dispatch = useAppDispatch();
	const { pizzas } = useAppSelector((state) => state.pizzasReducer);

	const countPizzas = pizzas.reduce(
		(amount, currentPizza) => amount + currentPizza.count,
		0
	);

	const amountPrice = pizzas.reduce(
		(amount, currentPizza) =>
			amount + currentPizza.price * currentPizza.count,
		0
	);

	if (!pizzas.length) {
		return <EmptyCart />;
	}

	return (
		<div className={cn(className, styles.cart)} {...props}>
			<div className={styles.title}>
				<IconContext.Provider
					value={{
						size: '30px',
						className: cn(styles.cartIcon),
					}}>
					<BsCart />
				</IconContext.Provider>
				<span>Корзина</span>
			</div>
			<button
				data-testid="clear-all-button"
				onClick={() => dispatch(clearPizzas())}
				className={styles.clear}>
				<IconContext.Provider
					value={{
						size: '30px',
						className: cn(styles.trashIcon),
					}}>
					<BsTrash />
				</IconContext.Provider>
				<span>Очистить корзину</span>
			</button>
			{pizzas.map((pizza) => (
				<OrderPosition
					data-testid="position"
					className={styles.position}
					key={pizza.id + pizza.dough + pizza.size}
					{...pizza}
				/>
			))}
			<span className={styles.count}>
				Всего пицц:{' '}
				<span data-testid="amount-count">{countPizzas} шт.</span>
			</span>
			<span className={styles.amountTitle}>
				Сумма заказа:{' '}
				<span data-testid="amount-price">{amountPrice} ₽</span>
			</span>
			<OrderButton className={styles.back} back>
				Вернуться назад
			</OrderButton>
			<OrderButton className={styles.orderNow}>
				Оплатить сейчас
			</OrderButton>
		</div>
	);
};
