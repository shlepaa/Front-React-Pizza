import styles from './PizzaBlock.module.scss';
import { PizzaBlockProps } from './Sort.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { AddButton } from '../AddButton/AddButton';

interface IChosenPizza {
	dough: string;
	title: string;
	count: number;
	size: string;
	image: string;
	price: number;
}

export const PizzaBlock: FC<PizzaBlockProps> = ({
	title,
	price,
	image,
	className,
	...props
}) => {
	const [dough, setDough] = useState<string>('thin');
	const [size, setSize] = useState<string>('26');
	const setPizzaParams = () => {
		let count = 0;
		count++;
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
					p.count++;
					return p;
				}
				return p;
			});
			localStorage.pizzas = JSON.stringify(allPizzas);
			console.log(JSON.parse(localStorage.pizzas), 2);

			return;
		}
		localStorage.pizzas = JSON.stringify([...allPizzas, chosenPizza]);
		console.log(JSON.parse(localStorage.pizzas), 3);
	};

	return (
		<div className={cn(className, styles.pizzaBlock)} {...props}>
			<img className={cn(styles.image)} src={image} alt={title} />
			<h4 className={cn(styles.title)}>{title}</h4>
			<div className={cn(styles.selector)}>
				<ul>
					<li
						onClick={() => setDough('thin')}
						className={cn({
							[styles.active]: dough === 'thin',
						})}>
						тонкое
					</li>
					<li
						onClick={() => setDough('traditional')}
						className={cn({
							[styles.active]: dough === 'traditional',
						})}>
						традиционное
					</li>
				</ul>
				<ul>
					<li
						onClick={() => setSize('26')}
						className={cn({
							[styles.active]: size === '26',
						})}>
						26 см.
					</li>
					<li
						onClick={() => setSize('30')}
						className={cn({
							[styles.active]: size === '30',
						})}>
						30 см.
					</li>
					<li
						onClick={() => setSize('40')}
						className={cn({
							[styles.active]: size === '40',
						})}>
						40 см.
					</li>
				</ul>
			</div>
			<div className={cn(styles.info)}>
				<div className={cn(styles.price)}>от {price} ₽</div>
				<AddButton onClick={setPizzaParams} />
			</div>
		</div>
	);
};
