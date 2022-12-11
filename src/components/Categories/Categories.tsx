import styles from './Categories.module.scss';
import { CategoriesProps } from './Categories.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { pizzaSortSlice } from '../../store/reducers/PizzaSortSlice';

type ReducersType =
	| 'pizza/sortSpicy'
	| 'pizza/sortClosed'
	| 'pizza/sortGrill'
	| 'pizza/sortMeat'
	| 'pizza/sortVegetables'
	| 'pizza/unset';

export const Categories: FC<CategoriesProps> = ({ className, ...props }) => {
	const [type, setType] = useState<string>('all');
	const dispatch = useAppDispatch();
	const {
		sortClosed,
		sortGrill,
		sortMeat,
		sortSpicy,
		sortVegetables,
		unset,
	} = pizzaSortSlice.actions;
	const handlerSetType = (
		type: string,
		reducer: ActionCreatorWithoutPayload<ReducersType>
	) => {
		setType(type);
		dispatch(reducer());
	};
	return (
		<div className={cn(className, styles.categories)} {...props}>
			<button
				onClick={() => handlerSetType('all', unset)}
				className={cn({
					[styles.active]: type === 'all',
				})}>
				Все
			</button>
			<button
				onClick={() => handlerSetType('meat', sortMeat)}
				className={cn({
					[styles.active]: type === 'meat',
				})}>
				Мясные
			</button>
			<button
				onClick={() => handlerSetType('vegetarian', sortVegetables)}
				className={cn({
					[styles.active]: type === 'vegetarian',
				})}>
				Вегетарианская
			</button>
			<button
				onClick={() => handlerSetType('grill', sortGrill)}
				className={cn({
					[styles.active]: type === 'grill',
				})}>
				Гриль
			</button>
			<button
				onClick={() => handlerSetType('spicy', sortSpicy)}
				className={cn({
					[styles.active]: type === 'spicy',
				})}>
				Острые
			</button>
			<button
				onClick={() => handlerSetType('closed', sortClosed)}
				className={cn({
					[styles.active]: type === 'closed',
				})}>
				Закрытые
			</button>
		</div>
	);
};
