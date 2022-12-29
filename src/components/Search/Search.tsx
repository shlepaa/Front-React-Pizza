import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import { FC, useEffect } from 'react';
import cn from 'classnames';
import { FcBinoculars } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import {
	search,
	setSearchValue,
} from '../../store/slices/PizzaSortSlice/PizzaSortSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Link } from 'react-router-dom';

export const Search: FC<SearchProps> = ({ className, ...props }) => {
	const dispatch = useAppDispatch();
	const { searchValue } = useAppSelector((state) => state.pizzaSortReducer);

	useEffect(() => {
		dispatch(search(searchValue));
	}, [dispatch, searchValue]);

	const handlerSearch = (currentValue: string) => {
		dispatch(setSearchValue(currentValue));
		dispatch(search(searchValue));
	};

	return (
		<div data-testid="search-wrapper" className={styles.wrapper}>
			<Link data-testid="link" to="/">
				<input
					data-testid="search"
					placeholder="Поиск..."
					onChange={(e) => handlerSearch(e.currentTarget.value)}
					value={searchValue}
					className={cn(className, styles.search)}
					{...props}
				/>
			</Link>
			<IconContext.Provider
				value={{
					className: styles.icon,
					size: '30px',
				}}>
				<FcBinoculars />
			</IconContext.Provider>
		</div>
	);
};
