import styles from './Sort.module.scss';
import { SortProps } from './Sort.props';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { pizzaSortSlice } from '../../store/reducers/PizzaSortSlice';
import { TypeParams } from '../../interfaces/TypeParams';
import { IconContext } from 'react-icons';
import { AiFillCaretUp } from 'react-icons/ai';

export const Sort: FC<SortProps> = ({ sortParams, className, ...props }) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { sortByParam, sortToUpOrDown } = pizzaSortSlice.actions;
	const { currentSortParam, isSortedToDown } = useAppSelector(
		(state) => state.pizzaSortReducer
	);

	useEffect(() => {
		if (localStorage.currentSortParam) {
			dispatch(sortByParam(JSON.parse(localStorage.currentSortParam)));
		} else {
			dispatch(sortByParam(currentSortParam));
		}
	}, [dispatch, sortByParam, sortToUpOrDown]);

	const chooseSort = (param: TypeParams) => {
		setIsOpened(false);
		localStorage.currentSortParam = JSON.stringify(param);
		dispatch(sortByParam(param));
	};
	const handlerSetIsSortedByUpOrDown = () => {
		dispatch(sortToUpOrDown(isSortedToDown));
	};
	return (
		<div className={cn(className, styles.sort)} {...props}>
			<button
				onClick={handlerSetIsSortedByUpOrDown}
				className={styles.icon}>
				<IconContext.Provider
					value={{
						size: '30px',
						className: cn({
							[styles.down]: isSortedToDown,
						}),
					}}>
					<AiFillCaretUp />
				</IconContext.Provider>
			</button>
			<button
				data-testid="sorting-button"
				onClick={() => setIsOpened(!isOpened)}
				className={cn(styles.label)}>
				<b>Сортировка по:</b>
				<span>{currentSortParam.title}</span>
			</button>
			<div
				data-testid="popup"
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
