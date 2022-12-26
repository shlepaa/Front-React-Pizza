import styles from './CategoriesSkeleton.module.scss';
import { CategoriesSkeletonProps } from './CategoriesSkeleton.props';
import cn from 'classnames';
import { FC } from 'react';
import fillWithNumbers from '../../helpers/fillWithNumbers';

export const CategoriesSkeleton: FC<CategoriesSkeletonProps> = ({
	count,
	className,
	...props
}) => {
	return (
		<div
			data-testid="wrapper"
			className={cn(className, styles.categories)}
			{...props}>
			<div className={cn(styles.active, styles.category)}>
				<div className={styles.title} />
			</div>
			{fillWithNumbers(count).map((c) => (
				<div data-testid="category" key={c} className={styles.category}>
					<div className={styles.title} />
				</div>
			))}
		</div>
	);
};
