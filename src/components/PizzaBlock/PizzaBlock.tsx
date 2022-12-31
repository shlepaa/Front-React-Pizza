import styles from './PizzaBlock.module.scss';
import { PizzaBlockProps } from './PizzaBlock.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { UlDough, UlSizes, AddButton } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
	addPizza,
	reloadPizzas,
} from '../../store/slices/PizzasSlice/PizzasSlice';
import { IChosenPizza } from '../../interfaces/IChosenPizza';
import { IPizza } from '../../interfaces/IPizza';
import { setParam } from '../../store/slices/PizzaSortSlice/PizzaSortSlice';

export const PizzaBlock: FC<PizzaBlockProps> = ({
	title,
	_id: id,
	sizesAndPrices,
	possibleDoughs,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	currentPrice,
	image,
	rating,
	defaultDough = possibleDoughs[0] || '',
	defaultSize = sizesAndPrices.map((s) => s.size)[0] || '',
	className,
	...props
}) => {
	const [dough, setDough] = useState<string>(defaultDough);
	const [size, setSize] = useState<string>(defaultSize);
	const [count, setCount] = useState<number>(1);
	const dispatch = useAppDispatch();
	const { pizzas: chosenPizzas } = useAppSelector(
		(state) => state.pizzasReducer
	);
	const { pizzas } = useAppSelector((state) => state.pizzaSortReducer);
	const copiedWithoutFlagsPizzas: IPizza[] = JSON.parse(
		JSON.stringify(pizzas)
	);

	const setPizzaParams = () => {
		setCount(1);
		const chosenPizza: IChosenPizza = {
			dough,
			id,
			title,
			count,
			size,
			image,
			price: findDependencyBetweenSizeAndPrice(),
		};

		if (!chosenPizzas.length) {
			localStorage.chosenPizzas = JSON.stringify([chosenPizza]);
			dispatch(addPizza(chosenPizza));
			console.log(JSON.parse(localStorage.chosenPizzas), 1);
			return;
		}

		const allPizzas: IChosenPizza[] = JSON.parse(
			JSON.stringify(chosenPizzas)
		);
		const currentPizza = allPizzas.find(
			(p) => p.id == id && p.dough === dough && p.size === size
		);
		if (currentPizza) {
			allPizzas.map((p) => {
				if (p.id == id && p.dough === dough && p.size === size) {
					p.count = p.count + count;
					return p;
				}
				return p;
			});
			dispatch(reloadPizzas(allPizzas));
			localStorage.chosenPizzas = JSON.stringify(allPizzas);
			console.log(JSON.parse(localStorage.chosenPizzas), 2);
			return;
		}

		dispatch(addPizza(chosenPizza));
		localStorage.chosenPizzas = JSON.stringify([...allPizzas, chosenPizza]);
		console.log(JSON.parse(localStorage.chosenPizzas), 3);
	};

	const handlerSetCount = (inctremOrDecrem: string) => {
		if (inctremOrDecrem === 'increment') {
			setCount(count + 1);
		}
		if (inctremOrDecrem === 'decrement') {
			setCount(count !== 1 ? count - 1 : 1);
		}
	};

	const handlerSetDough = (currentDough: string) => {
		setDough(currentDough);
		const correctedPizzas = copiedWithoutFlagsPizzas.map((p) => {
			if (p.title === title) {
				return { ...p, dough: currentDough };
			}
			return p;
		});
		dispatch(setParam(correctedPizzas));
		localStorage.pizzas = JSON.stringify(correctedPizzas);
	};

	const handlerSetSize = (currentSize: string) => {
		setSize(currentSize);
		const correctedPizzas = copiedWithoutFlagsPizzas.map((p) => {
			if (p.title === title) {
				return {
					...p,
					size: currentSize,
				};
			}
			return p;
		});
		dispatch(setParam(correctedPizzas));
		localStorage.pizzas = JSON.stringify(correctedPizzas);
	};

	const findDependencyBetweenSizeAndPrice = (): number => {
		const currentDependency = sizesAndPrices.find((s) => s.size === size);
		if (currentDependency) {
			return currentDependency.price;
		}
		return 0;
	};

	return (
		<div className={cn(className, styles.pizzaBlock)} {...props}>
			<img className={cn(styles.image)} src={image} alt={title} />
			<span data-testid="rating" className={styles.rate}>
				Рейтинг: {rating}/5
			</span>
			<h4 data-testid="title-pizza" className={cn(styles.title)}>
				{title}
			</h4>
			<div className={cn(styles.selector)}>
				<UlDough
					setDough={handlerSetDough}
					allDoughs={possibleDoughs}
					currentDough={dough}
				/>
				<UlSizes
					setSize={handlerSetSize}
					allSizes={sizesAndPrices.map((s) => s.size)}
					currentSize={size}
				/>
			</div>
			<div className={cn(styles.info)}>
				<div data-testid="price" className={cn(styles.price)}>
					<span
						data-testid="amount-cost"
						className={cn(styles.amountCost, {
							[styles.visibleAmount]: count > 1,
						})}>
						Общая цена
					</span>
					{count > 1
						? findDependencyBetweenSizeAndPrice() * count
						: findDependencyBetweenSizeAndPrice()}{' '}
					₽
				</div>
				<AddButton
					data-testid="add-button"
					onClick={setPizzaParams}
					count={count}
					setCount={handlerSetCount}
				/>
			</div>
		</div>
	);
};
