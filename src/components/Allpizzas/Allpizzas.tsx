import styles from './Allpizzas.module.scss';
import { AllpizzasProps } from './Allpizzas.props';
import cn from 'classnames';
import { FC } from 'react';
import { PizzaBlock } from '../PizzaBlock/PizzaBlock';
import { useAppSelector } from '../../hooks/redux';

export const Allpizzas: FC<AllpizzasProps> = ({ className, ...props }) => {
	const { pizzas, currentType } = useAppSelector(
		(state) => state.pizzaSortReducer
	);
	const firstToUpper =
		currentType[0]?.toUpperCase() +
		currentType.slice(1, currentType.length);
	const lastChars = `${firstToUpper[firstToUpper.length - 2]}${
		firstToUpper[firstToUpper.length - 1]
	}`;
	let correctedType = '';
	if (lastChars === 'ая') {
		correctedType = firstToUpper.slice(0, firstToUpper.length - 2) + 'ие';
	} else {
		correctedType = firstToUpper;
	}
	if (lastChars === 'ая' && firstToUpper[firstToUpper.length - 3] !== 'к') {
		correctedType = firstToUpper.slice(0, firstToUpper.length - 2) + 'ые';
	}
	return (
		<>
			<h2 className={styles.title}>{correctedType} пиццы</h2>
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
		</>
	);
};
