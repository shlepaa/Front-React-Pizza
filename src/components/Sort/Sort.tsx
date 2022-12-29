import styles from './Sort.module.scss';
import { SortProps } from './Sort.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
	setIsAllPage,
	sortByParam,
	sortToUpOrDown,
} from '../../store/slices/PizzaSortSlice/PizzaSortSlice';
import { TypeParams } from '../../interfaces/TypeParams';
import { IconContext } from 'react-icons';
import { AiFillCaretUp } from 'react-icons/ai';

export const Sort: FC<SortProps> = ({ sortParams, className, ...props }) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { isAllPages, currentSortParam, isSortedToDown } = useAppSelector(
		(state) => state.pizzaSortReducer
	);

	const chooseSort = (param: TypeParams) => {
		setIsOpened(false);
		dispatch(sortByParam(param));
	};

	const handleSetPage = (isAllPages: boolean): void => {
		dispatch(setIsAllPage(isAllPages));
	};

	return (
		<div className={cn(className, styles.sort)} {...props}>
			<span className={styles.listsBlock}>
				<span className={styles.hr}>/</span>
				<button
					onClick={() => handleSetPage(true)}
					className={cn(styles.lists, {
						[styles.active]: isAllPages,
					})}>
					Все страницы
				</button>
				<button
					onClick={() => handleSetPage(false)}
					className={cn(styles.lists, {
						[styles.active]: !isAllPages,
					})}>
					Постранично
				</button>
			</span>
			<button
				onClick={() => dispatch(sortToUpOrDown(isSortedToDown))}
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
