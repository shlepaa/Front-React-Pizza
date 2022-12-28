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
import setEnding from '../../helpers/setEnding';

export const Allpizzas: FC<AllpizzasProps> = ({ className, ...props }) => {
	const { pizzas, currentType, searchValue, error, isLoading } =
		useAppSelector((state) => state.pizzaSortReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPizzas());
	}, [dispatch]);

	const handlerLogicalTitle = (): string => {
		if (!pizzas.length) {
			return 'Не найдено';
		}
		if (searchValue) {
			return 'Поиск';
		}
		return setEnding(currentType);
	};

	if (error) {
		return <ErrorBlock data-testid="error" />;
	}

	return (
		<>
			<h2 data-testid="title" className={styles.title}>
				{isLoading
					? 'Загрузка пицц . . .'
					: `${handlerLogicalTitle()} пиццы`}
			</h2>
			<div className={cn(className, styles.items)} {...props}>
				{isLoading
					? fillWithNumbers(8).map((p) => (
							<PIzzaSkeletonBlock
								data-testid="sleketon-wrapper"
								key={p}
							/>
					  ))
					: pizzas.map((p) => (
							<PizzaBlock
								data-testid="pizza-wrapper"
								sizesAndPrices={p.sizesAndPrices}
								possibleDoughs={p.possibleDoughs}
								image={p.image}
								title={p.title}
								key={p.title}
								defaultDough={p.dough}
								defaultSize={p.size}
								id={p._id}
							/>
					  ))}
			</div>
		</>
	);
};
