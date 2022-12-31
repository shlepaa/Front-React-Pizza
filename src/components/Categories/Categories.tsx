import styles from './Categories.module.scss';
import { CategoriesProps } from './Categories.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
	sortByType,
	unset,
} from '../../store/slices/PizzaSortSlice/PizzaSortSlice';

export const Categories: FC<CategoriesProps> = ({ className, ...props }) => {
	const [isPartShown, setIsPartShown] = useState<boolean>(true);
	const dispatch = useAppDispatch();
	const { allPizzaTypes, currentType, searchValue } = useAppSelector(
		(state) => state.pizzaSortReducer
	);

	const checkForCount = (): string[] => {
		if (allPizzaTypes.length >= 5 && isPartShown) {
			return allPizzaTypes.filter((_type, index) => index <= 3);
		}
		return allPizzaTypes;
	};

	const handlerSetType = (type: string) => {
		if (type === 'все') {
			dispatch(unset());
			return;
		}
		dispatch(sortByType(type));
	};

	return (
		<div className={cn(className, styles.wrapper)} {...props}>
			<div className={cn(className, styles.categories)}>
				{checkForCount().map((p) => (
					<button
						data-testid="type-button"
						key={p}
						onClick={() => handlerSetType(p)}
						className={cn(styles.categoryButton, {
							[styles.active]: currentType === p && !searchValue,
						})}>
						{p[0]?.toUpperCase() + p.slice(1, p.length)}
					</button>
				))}
				<button
					data-testid="all-button"
					onClick={() => handlerSetType('все')}
					className={cn(styles.categoryButton, {
						[styles.active]: currentType === 'все' && !searchValue,
					})}>
					Все
				</button>
			</div>
			{isPartShown && allPizzaTypes.length > 5 && (
				<button
					data-testid="all-categories-button"
					onClick={() => setIsPartShown(!isPartShown)}
					className={styles.seeAll}>
					Смотреть все категории . . .
				</button>
			)}
		</div>
	);
};
