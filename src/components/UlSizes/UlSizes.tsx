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
		<div className={cn(className, styles.list)} {...props}>
			{allSizes.map((s) => (
				<button
					data-testid="size-button"
					key={s}
					onClick={() => setSize(s)}
					className={cn({
						[styles.active]: currentSize === s,
					})}>
					{s} см
				</button>
			))}
		</div>
	);
};
