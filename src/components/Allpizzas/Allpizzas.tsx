import styles from './Allpizzas.module.scss';
import { AllpizzasProps } from './Allpizzas.props';
import cn from 'classnames';
import { FC } from 'react';
import { PizzaBlock } from '../PizzaBlock/PizzaBlock';
import { useAppSelector } from '../../hooks/redux';

export const Allpizzas: FC<AllpizzasProps> = ({ className, ...props }) => {
	const { pizzas } = useAppSelector((state) => state.pizzaReducer);
	return (
		<div className={cn(className, styles.items)} {...props}>
			{pizzas.map((p) => (
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
