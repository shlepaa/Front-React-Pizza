import styles from './Allpizzas.module.scss';
import { AllpizzasProps } from './Allpizzas.props';
import cn from 'classnames';
import { FC } from 'react';
import { PizzaBlock } from '../PizzaBlock/PizzaBlock';

export const Allpizzas: FC<AllpizzasProps> = ({ className, ...props }) => {
	const pizzas = [
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Пицца 4 сыра',
			price: 495,
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Колбасная вечеринка',
			price: 525,
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Сладкая пицца',
			price: 461,
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Чизбургер-пицца',
			price: 395,
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Гамбургер-пицца',
			price: 295,
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Чизбургер-пицца',
			price: 395,
		},
	];
	return (
		<div className={cn(className, styles.items)} {...props}>
			{pizzas.map(p => (
				<PizzaBlock
					image={p.image}
					title={p.title}
					price={p.price}
					key={Math.random()}
				/>
			))}
		</div>
	);
};
