import styles from './ContentTop.module.scss';
import { ContentTopProps } from './ContentTop.props';
import cn from 'classnames';
import { FC } from 'react';
import { Sort } from '../Sort/Sort';
import { useAppSelector } from '../../hooks/redux';
import { CategoriesSkeleton, Categories } from '..';
import sortParams from '../../helpers/sortParams';

export const ContentTop: FC<ContentTopProps> = ({ className, ...props }) => {
	const { error, isLoading } = useAppSelector(
		(state) => state.pizzaSortReducer
	);

	return (
		<div className={cn(className, styles.contentTop)} {...props}>
			{isLoading || error ? (
				<CategoriesSkeleton data-testid="skeleton-wrapper" count={4} />
			) : (
				<>
					<Categories data-testid="categories-wrapper" />
					<Sort data-testid="sort-wrapper" sortParams={sortParams} />
				</>
			)}
		</div>
	);
};
