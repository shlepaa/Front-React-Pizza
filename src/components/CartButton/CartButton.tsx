import styles from './CartButton.module.scss';
import { CartButtonProps } from './CartButton.props';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { useAppSelector } from '../../hooks/redux';

export const CartButton: FC<CartButtonProps> = ({
	link,
	className,
	...props
}) => {
	const [totalCount, setTotalCount] = useState<number>(0);
	const { pizzas } = useAppSelector((state) => state.pizzasReducer);

	useEffect(() => {
		console.log(pizzas.length);
		if (pizzas.length === 0) {
			setTotalCount(0);
		}
		const count = pizzas.reduce(
			(totalPrice, currentPrice) =>
				totalPrice + currentPrice.price * currentPrice.count,
			0
		);
		setTotalCount(count);
		console.log(1);
	}, [pizzas]);

	return (
		<a href={link} {...props}>
			<button className={cn(className, styles.button, styles.buttonCart)}>
				<span>{totalCount} ₽</span>
				<div className={styles.delimiter}></div>
				<IconContext.Provider
					value={{
						size: '20px',
						color: 'white',
					}}>
					<RiShoppingCartLine />
				</IconContext.Provider>
				<span>3</span>
			</button>
		</a>
	);
};
