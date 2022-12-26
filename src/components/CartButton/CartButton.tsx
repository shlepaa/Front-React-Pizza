import styles from './CartButton.module.scss';
import { CartButtonProps } from './CartButton.props';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { useAppSelector } from '../../hooks/redux';
import { Link } from 'react-router-dom';

export const CartButton: FC<CartButtonProps> = ({
	link,
	className,
	...props
}) => {
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [totalCount, setTotalCount] = useState<number>(0);
	const { pizzas } = useAppSelector((state) => state.pizzasReducer);

	useEffect(() => {
		if (!pizzas.length) {
			setTotalPrice(0);
			setTotalCount(0);
		}
		const price = pizzas.reduce(
			(totalPrice, currentPrice) =>
				totalPrice + currentPrice.price * currentPrice.count,
			0
		);
		const count = pizzas.reduce(
			(totalCount, currentCount) => totalCount + currentCount.count,
			0
		);
		setTotalPrice(price);
		setTotalCount(count);
	}, [pizzas]);

	return (
		<Link to={link}>
			<button
				className={cn(className, styles.button, styles.buttonCart)}
				{...props}>
				<span data-testid="total-price">{totalPrice} ₽</span>
				<div className={styles.delimiter}></div>
				<IconContext.Provider
					value={{
						size: '20px',
						color: 'white',
					}}>
					<RiShoppingCartLine />
				</IconContext.Provider>
				<span data-testid="total-count">{totalCount}</span>
			</button>
		</Link>
	);
};
