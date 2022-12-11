import styles from './Sort.module.scss';
import { SortProps } from './Sort.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import ArrowIcon from './arrow.svg';
import { useAppDispatch } from '../../hooks/redux';
import { pizzaSlice } from '../../store/reducers/PizzaSlice';

export const Sort: FC<SortProps> = ({ className, ...props }) => {
	const [sort, setSort] = useState<string>('популярности');
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { sortRating, sortAlphabet, sortPrice } = pizzaSlice.actions;
	const chooseSort = (chosenSort: string) => {
		setSort(chosenSort);
		setIsOpened(false);
		if (chosenSort === 'популярности') {
			dispatch(sortRating());
		}
		if (chosenSort === 'алфавиту') {
			dispatch(sortAlphabet());
		}
		if (chosenSort === 'цене') {
			dispatch(sortPrice());
		}
	};
	return (
		<div className={cn(className, styles.sort)} {...props}>
			<button
				onClick={() => setIsOpened(!isOpened)}
				className={cn(styles.label)}>
				<ArrowIcon
					className={cn({
						[styles.down]: isOpened,
					})}
				/>
				<b>Сортировка по:</b>
				<span>{sort}</span>
			</button>
			<div
				className={cn(styles.popup, {
					[styles.popupActive]: isOpened,
				})}>
				<div className={styles.sortBlock}>
					<button
						onClick={() => chooseSort('популярности')}
						className={cn({
							[styles.active]: sort === 'популярности',
						})}>
						популярности
					</button>
					<button
						onClick={() => chooseSort('цене')}
						className={cn({
							[styles.active]: sort === 'цене',
						})}>
						цене
					</button>
					<button
						onClick={() => chooseSort('алфавиту')}
						className={cn({
							[styles.active]: sort === 'алфавиту',
						})}>
						алфавиту
					</button>
				</div>
			</div>
		</div>
	);
};
