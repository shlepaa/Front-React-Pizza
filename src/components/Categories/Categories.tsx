import styles from './Categories.module.scss';
import { CategoriesProps } from './Categories.props';
import cn from 'classnames';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { pizzaSortSlice } from '../../store/slices/PizzaSortSlice/PizzaSortSlice';

export const Categories: FC<CategoriesProps> = ({ className, ...props }) => {
	const dispatch = useAppDispatch();
	const { allPizzaTypes, currentType, searchValue } = useAppSelector(
		(state) => state.pizzaSortReducer
	);
	const { unset, sortByType } = pizzaSortSlice.actions;

	const handlerSetType = (type: string) => {
		if (type === 'все') {
			dispatch(unset());
			return;
		}
		dispatch(sortByType(type));
	};

	return (
		<div className={cn(className, styles.categories)} {...props}>
			<button
				data-testid="all-button"
				onClick={() => handlerSetType('все')}
				className={cn({
					[styles.active]: currentType === 'все' && !searchValue,
				})}>
				Все
			</button>
			{allPizzaTypes.map((p) => (
				<button
					data-testid="type-button"
					key={p}
					onClick={() => handlerSetType(p)}
					className={cn({
						[styles.active]: currentType === p && !searchValue,
					})}>
					{p[0]?.toUpperCase() + p.slice(1, p.length)}
				</button>
			))}
		</div>
	);
};
