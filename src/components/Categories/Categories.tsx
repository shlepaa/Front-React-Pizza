import styles from './Categories.module.scss';
import { CategoriesProps } from './Categories.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { pizzaSortSlice } from '../../store/reducers/PizzaSortSlice';

export const Categories: FC<CategoriesProps> = ({ className, ...props }) => {
	const [type, setType] = useState<string>('all');
	const dispatch = useAppDispatch();
	const { allPizzaTypes } = useAppSelector((state) => state.pizzaSortReducer);
	const { unset, sortByType } = pizzaSortSlice.actions;
	const handlerSetType = (type: string) => {
		setType(type);
		if (type === 'all') {
			dispatch(unset());
			return;
		}
		dispatch(sortByType(type));
	};
	return (
		<div className={cn(className, styles.categories)} {...props}>
			<button
				onClick={() => handlerSetType('all')}
				className={cn({
					[styles.active]: type === 'all',
				})}>
				Все
			</button>
			{allPizzaTypes.map((p) => (
				<button
					key={p}
					onClick={() => handlerSetType(p)}
					className={cn({
						[styles.active]: type === p,
					})}>
					{p[0]?.toUpperCase() + p.slice(1, p.length)}
				</button>
			))}
		</div>
	);
};
