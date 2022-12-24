import styles from './ContentTop.module.scss';
import { ContentTopProps } from './ContentTop.props';
import cn from 'classnames';
import { FC } from 'react';
import { Categories } from '../Categories/Categories';
import { Sort } from '../Sort/Sort';
import { useAppSelector } from '../../hooks/redux';
import { CategoriesSkeleton } from '../CategoriesSkeleton/CategoriesSkeleton';

export const ContentTop: FC<ContentTopProps> = ({ className, ...props }) => {
	const { error, isLoading } = useAppSelector(
		(state) => state.pizzaSortReducer
	);

	return (
		<div className={cn(className, styles.contentTop)} {...props}>
			{isLoading || error ? (
				<CategoriesSkeleton count={4} />
			) : (
				<>
					<Categories />
					<Sort
						sortParams={[
							{ param: 'rating', title: 'популярности' },
							{ param: 'currentPrice', title: 'цене' },
							{ param: 'title', title: 'алфавиту' },
						]}
					/>
				</>
			)}
		</div>
	);
};
