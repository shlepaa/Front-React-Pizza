import styles from './Sort.module.scss';
import { SortProps } from './Sort.props';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
	sortByParam,
	sortToUpOrDown,
} from '../../store/slices/PizzaSortSlice/PizzaSortSlice';
import { TypeParams } from '../../interfaces/TypeParams';
import { IconContext } from 'react-icons';
import { AiFillCaretUp } from 'react-icons/ai';

export const Sort: FC<SortProps> = ({ sortParams, className, ...props }) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const dispatch = useAppDispatch();
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
		if (!isSortedToDown) {
			localStorage.isDown = true;
			return;
		}
		localStorage.isDown = false;
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
					<AiFillCaretUp data-testid="sort-up-down-button" />
				</IconContext.Provider>
			</button>
			<button
				data-testid="open-popuop-button"
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
							data-testid="sort-button"
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
