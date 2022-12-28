import styles from './OrderPosition.module.scss';
import { OrderPositionProps } from './OrderPosition.props';
import { FC, useState } from 'react';
import cn from 'classnames';
import { CircleButton } from '../CircleButton/CircleButton';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IChosenPizza } from '../../interfaces/IChosenPizza';
import { reloadPizzas } from '../../store/slices/PizzasSlice/PizzasSlice';

export const OrderPosition: FC<OrderPositionProps> = ({
	count: defaultCount,
	dough,
	image,
	price,
	id,
	size,
	title,
	className,
	...props
}) => {
	const [count, setCount] = useState<number>(defaultCount);
	const { pizzas } = useAppSelector((state) => state.pizzasReducer);
	const dispatch = useAppDispatch();
	const allPizzas: IChosenPizza[] = JSON.parse(JSON.stringify(pizzas));

	const handlerSetCount = (calcCount: number): void => {
		if (calcCount < 1) {
			const newPizzas = pizzas.filter((pizza) => {
				if (
					pizza.dough === dough &&
					pizza.title === title &&
					pizza.size === size
				) {
					return false;
				}
				return true;
			});
			dispatch(reloadPizzas(newPizzas));
			localStorage.chosenPizzas = JSON.stringify(newPizzas);
			return;
		}

		setCount(calcCount);
		const currentPizza = allPizzas.find(
			(p) => p.id === id && p.dough === dough && p.size === size
		);

		if (currentPizza) {
			allPizzas.map((p) => {
				if (p.id === id && p.dough === dough && p.size === size) {
					p.count = calcCount;
					return p;
				}
				return p;
			});
			dispatch(reloadPizzas(allPizzas));
			localStorage.chosenPizzas = JSON.stringify(allPizzas);
			return;
		}
	};

	return (
		<div className={cn(className, styles.orderPosition)} {...props}>
			<img className={cn(styles.image)} src={image} alt={title} />
			<div>
				<h2 className={styles.title}>{title}</h2>
				<span className={styles.params}>
					{dough} тесто, {size} см
				</span>
			</div>
			<div className={styles.countBlock}>
				<CircleButton
					isIncrement
					onClick={() => handlerSetCount(count + 1)}
				/>
				<span className={styles.count}>{count}</span>
				<CircleButton onClick={() => handlerSetCount(count - 1)} />
			</div>
			<span className={styles.price}>{price} ₽</span>
			<CircleButton
				onClick={() => handlerSetCount(0)}
				className={styles.close}
				close
			/>
		</div>
	);
};
