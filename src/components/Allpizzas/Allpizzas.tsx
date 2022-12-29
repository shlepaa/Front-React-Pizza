import styles from './Allpizzas.module.scss';
import { AllpizzasProps } from './Allpizzas.props';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPizzas } from '../../store/slices/ActionCreators';
import { ErrorBlock, PIzzaSkeletonBlock, PizzaBlock } from '..';
import fillWithNumbers from '../../helpers/fillWithNumbers';
import setEnding from '../../helpers/setEnding';
import {
	setParam,
	unset,
} from '../../store/slices/PizzaSortSlice/PizzaSortSlice';

export const Allpizzas: FC<AllpizzasProps> = ({ className, ...props }) => {
	const {
		isAllPages,
		pizzasBackup,
		pizzas,
		currentType,
		searchValue,
		error,
		isLoading,
	} = useAppSelector((state) => state.pizzaSortReducer);
	const dispatch = useAppDispatch();
	const pageCount = pizzasBackup.length / 5;
	const [currentPage, setCurrentPage] = useState<number>(1);

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

	const handleSwitchPage = (number: number): void => {
		const newPage = pizzasBackup.slice((number - 1) * 5, number * 5);
		dispatch(setParam(newPage));
		dispatch(unset());
		setCurrentPage(number);
	};

	if (error) {
		return <ErrorBlock data-testid="error" />;
	}

	return (
		<div {...props}>
			<h2 data-testid="title" className={styles.title}>
				{isLoading
					? 'Загрузка пицц . . .'
					: `${handlerLogicalTitle()} пиццы`}
			</h2>
			<div className={cn(className, styles.items)}>
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
								{...p}
								key={p.title}
								defaultDough={p.dough}
								defaultSize={p.size}
							/>
					  ))}
			</div>
			{!isAllPages && (
				<div className={styles.pages}>
					{fillWithNumbers(Math.ceil(pageCount)).map((page) => (
						<button
							onClick={() => handleSwitchPage(page + 1)}
							key={page}
							className={cn({
								[styles.active]: currentPage === page + 1,
							})}>
							{page + 1}
						</button>
					))}
				</div>
			)}
		</div>
	);
};
