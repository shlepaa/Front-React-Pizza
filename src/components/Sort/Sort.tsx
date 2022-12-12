import styles from './Sort.module.scss';
import { SortProps } from './Sort.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import ArrowIcon from './arrow.svg';
import { useAppDispatch } from '../../hooks/redux';
import { pizzaSortSlice } from '../../store/reducers/PizzaSortSlice';

export const Sort: FC<SortProps> = ({ sortParams, className, ...props }) => {
	const [sort, setSort] = useState<string>('популярности');
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { sortRating, sortAlphabet, sortPrice } = pizzaSortSlice.actions;
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
					{sortParams.map((p) => (
						<button
							key={p}
							onClick={() => chooseSort(p)}
							className={cn({
								[styles.active]: sort === p,
							})}>
							{p}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
