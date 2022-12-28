import styles from './Cart.module.scss';
import { CartProps } from './Cart.props';
import { FC } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { OrderPosition } from '../OrderPosition/OrderPosition';
import { BsCart, BsTrash } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { OrderButton } from '../OrderButton/OrderButton';
import { clearPizzas } from '../../store/slices/PizzasSlice/PizzasSlice';

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
					className={styles.position}
					key={pizza.id + pizza.dough + pizza.size}
					{...pizza}
				/>
			))}
			<span className={styles.count}>
				Всего пицц: <span>{countPizzas} шт.</span>
			</span>
			<span className={styles.amountTitle}>
				Сумма заказа: <span>{amountPrice} ₽</span>
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
