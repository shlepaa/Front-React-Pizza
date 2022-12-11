import styles from './UlSizes.module.scss';
import { UlSizesProps } from './UlSizes.props';
import { FC } from 'react';
import cn from 'classnames';

export const UlSizes: FC<UlSizesProps> = ({
	size,
	setSize,
	className,
	...props
}) => {
	return (
		<ul className={cn(className, styles.list)} {...props}>
			<li
				onClick={() => setSize('26')}
				className={cn({
					[styles.active]: size === '26',
				})}>
				26 см.
			</li>
			<li
				onClick={() => setSize('30')}
				className={cn({
					[styles.active]: size === '30',
				})}>
				30 см.
			</li>
			<li
				onClick={() => setSize('40')}
				className={cn({
					[styles.active]: size === '40',
				})}>
				40 см.
			</li>
		</ul>
	);
};
