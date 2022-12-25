import styles from './Allpizzas.module.scss';
import { AllpizzasProps } from './Allpizzas.props';
import cn from 'classnames';
import { FC, useEffect } from 'react';
import { PizzaBlock } from '../PizzaBlock/PizzaBlock';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPizzas } from '../../store/slices/ActionCreators';
import { PIzzaSkeletonBlock } from '../PIzzaSkeletonBlock/PIzzaSkeletonBlock';
import { ErrorBlock } from '../ErrorBlock/ErrorBlock';
import fillWithNumbers from '../../helpers/fillWithNumbers';

export const Allpizzas: FC<AllpizzasProps> = ({ className, ...props }) => {
	const { pizzas, currentType, searchValue, error, isLoading } =
		useAppSelector((state) => state.pizzaSortReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPizzas());
	}, [dispatch]);

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

	const handlerLogicalTitle = (): string => {
		if (!pizzas.length) {
			return 'Не найдено';
		}
		if (searchValue) {
			return 'Поиск';
		}
		return correctedType;
	};

	return (
		<>
			{error ? (
				<>
					<ErrorBlock />
				</>
			) : (
				<>
					<h2 className={styles.title}>
						{isLoading
							? 'Загрузка пицц . . .'
							: `${handlerLogicalTitle()} пиццы`}
					</h2>
					<div className={cn(className, styles.items)} {...props}>
						{isLoading
							? fillWithNumbers(8).map((p) => (
									<PIzzaSkeletonBlock key={p} />
							  ))
							: pizzas.map((p) => (
									<PizzaBlock
										sizesAndPrices={p.sizesAndPrices}
										possibleDoughs={p.possibleDoughs}
										image={p.image}
										title={p.title}
										key={p.title}
										defaultDough={p.dough}
										defaultSize={p.size}
									/>
							  ))}
					</div>
				</>
			)}
		</>
	);
};
