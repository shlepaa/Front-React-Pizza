import styles from './Sort.module.scss';
import { SortProps } from './Sort.props';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import ArrowIcon from './arrow.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { pizzaSortSlice } from '../../store/reducers/PizzaSortSlice';
import { TypeParams } from '../../interfaces/TypeParams';

export const Sort: FC<SortProps> = ({ sortParams, className, ...props }) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { sortByParam } = pizzaSortSlice.actions;
	const { currentSortParam } = useAppSelector(
		(state) => state.pizzaSortReducer
	);

	useEffect(() => {
		if (localStorage.currentSortParam) {
			dispatch(sortByParam(JSON.parse(localStorage.currentSortParam)));
		}
	}, [dispatch, sortByParam]);

	const chooseSort = (param: TypeParams) => {
		setIsOpened(false);
		localStorage.currentSortParam = JSON.stringify(param);
		dispatch(sortByParam(param));
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
				<span>{currentSortParam.title}</span>
			</button>
			<div
				className={cn(styles.popup, {
					[styles.popupActive]: isOpened,
				})}>
				<div className={styles.sortBlock}>
					{sortParams.map((p) => (
						<button
							key={p.param}
							onClick={() => chooseSort(p)}
							className={cn({
								[styles.active]:
									currentSortParam.param === p.param,
							})}>
							{p.title}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
