import styles from './CategoriesSkeleton.module.scss';
import { CategoriesSkeletonProps } from './CategoriesSkeleton.props';
import cn from 'classnames';
import { FC } from 'react';

export const CategoriesSkeleton: FC<CategoriesSkeletonProps> = ({
	count,
	className,
	...props
}) => {
	const fillWithSkeletonCategory = (count: number): number[] => {
		const skeletonArray: number[] = [];
		for (let i = 0; i < count; i++) {
			skeletonArray.push(i);
		}
		return skeletonArray;
	};

	return (
		<div className={cn(className, styles.categories)} {...props}>
			<div className={cn(styles.active, styles.category)}>
				<div className={styles.title} />
			</div>
			{fillWithSkeletonCategory(count).map((c) => (
				<div key={c} className={styles.category}>
					<div className={styles.title} />
				</div>
			))}
		</div>
	);
};
