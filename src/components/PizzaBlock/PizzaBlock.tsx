import styles from './PizzaBlock.module.scss';
import { PizzaBlockProps } from './Sort.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { AddButton } from '../AddButton/AddButton';
import { UlSizes } from '../UlSizes/UlSizes';
import { UlDough } from '../UlDough/UlDough';
import { useAppDispatch } from '../../hooks/redux';
import { pizzasSlice } from '../../store/reducers/PizzasSlice';
import { IChosenPizza } from '../../interfaces/IChosenPizza';

export const PizzaBlock: FC<PizzaBlockProps> = ({
	title,
	price,
	image,
	className,
	...props
}) => {
	const [dough, setDough] = useState<string>('тонкое');
	const [size, setSize] = useState<string>('26');
	const [count, setCount] = useState<number>(1);
	const dispatch = useAppDispatch();
	const { addPizza, reloadPizzas } = pizzasSlice.actions;
	const setPizzaParams = () => {
		setCount(1);
		const chosenPizza: IChosenPizza = {
			dough,
			title,
			count,
			size,
			image,
			price,
		};

		if (!localStorage.pizzas) {
			localStorage.pizzas = JSON.stringify([chosenPizza]);
			dispatch(addPizza(chosenPizza));
			console.log(JSON.parse(localStorage.pizzas), 1);
			return;
		}

		const allPizzas: IChosenPizza[] = JSON.parse(localStorage.pizzas);
		const currentPizza = allPizzas.find(
			(p) => p.title === title && p.dough === dough && p.size === size
		);
		if (currentPizza) {
			allPizzas.map((p) => {
				if (p.title === title && p.dough === dough && p.size === size) {
					p.count = p.count + count;
					return p;
				}
				return p;
			});
			dispatch(reloadPizzas(allPizzas));
			localStorage.pizzas = JSON.stringify(allPizzas);
			console.log(JSON.parse(localStorage.pizzas), 2);

			return;
		}
		dispatch(addPizza(chosenPizza));
		localStorage.pizzas = JSON.stringify([...allPizzas, chosenPizza]);
		console.log(JSON.parse(localStorage.pizzas), 3);
	};

	const handlerSetCount = (inctremOrDecrem: string) => {
		if (inctremOrDecrem === 'increment') {
			setCount(count + 1);
		}
		if (inctremOrDecrem === 'decrement') {
			setCount(count !== 1 ? count - 1 : 1);
		}
	};

	return (
		<div className={cn(className, styles.pizzaBlock)} {...props}>
			<img className={cn(styles.image)} src={image} alt={title} />
			<h4 className={cn(styles.title)}>{title}</h4>
			<div className={cn(styles.selector)}>
				<UlDough
					setDough={setDough}
					allDoughs={['тонкое', 'традиционное']}
					currentDough={dough}
				/>
				<UlSizes
					setSize={setSize}
					allSizes={['26', '30', '40']}
					currentSize={size}
				/>
			</div>
			<div className={cn(styles.info)}>
				<div className={cn(styles.price)}>
					<span
						className={cn(styles.amountCost, {
							[styles.visibleAmount]: count > 1,
						})}>
						Общая цена
					</span>
					{count > 1 ? price * count : price} ₽
				</div>
				<AddButton
					onClick={setPizzaParams}
					count={count}
					setCount={handlerSetCount}
				/>
			</div>
		</div>
	);
};
