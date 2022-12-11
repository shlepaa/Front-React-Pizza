import styles from './UlSizes.module.scss';
import { UlSizesProps } from './UlSizes.props';
import { FC } from 'react';
import cn from 'classnames';

export const UlSizes: FC<UlSizesProps> = ({
	currentSize,
	allSizes,
	setSize,
	className,
	...props
}) => {
	return (
		<ul className={cn(className, styles.list)} {...props}>
			{allSizes.map((s) => (
				<li
					key={s}
					onClick={() => setSize(s)}
					className={cn({
						[styles.active]: currentSize === s,
					})}>
					{s} см
				</li>
			))}
		</ul>
	);
};
