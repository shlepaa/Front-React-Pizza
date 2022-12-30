import styles from './OrderPosition.module.scss';
import { OrderPositionProps } from './OrderPosition.props';
import { FC, useState } from 'react';
import cn from 'classnames';
import { CircleButton } from '..';
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
		setCount(calcCount);

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

	if (count < 1) {
		return <></>;
	}

	return (
		<div
			data-testid="position-wrapper"
			className={cn(className, styles.orderPosition)}
			{...props}>
			<img className={cn(styles.image)} src={image} alt={title} />
			<div>
				<h2 data-testid="position-title" className={styles.title}>
					{title}
				</h2>
				<span data-testid="params" className={styles.params}>
					{dough} тесто, {size} см
				</span>
			</div>
			<div className={styles.countBlock}>
				<CircleButton
					data-testid="plus-button"
					isIncrement
					onClick={() => handlerSetCount(count + 1)}
				/>
				<span data-testid="count" className={styles.count}>
					{count}
				</span>
				<CircleButton
					data-testid="minus-button"
					onClick={() => handlerSetCount(count - 1)}
				/>
			</div>
			<span data-testid="price" className={styles.price}>
				{price * count} ₽
			</span>
			<CircleButton
				data-testid="clear-button"
				onClick={() => handlerSetCount(0)}
				className={styles.close}
				close
			/>
		</div>
	);
};
