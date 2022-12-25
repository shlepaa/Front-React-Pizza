import styles from './UlDough.module.scss';
import { UlDoughProps } from './UlDough.props';
import { FC } from 'react';
import cn from 'classnames';

export const UlDough: FC<UlDoughProps> = ({
	allDoughs,
	currentDough,
	setDough,
	className,
	...props
}) => {
	return (
		<div className={cn(className, styles.list)} {...props}>
			{allDoughs.map((d) => (
				<button
					data-testid="size-button"
					key={d}
					onClick={() => setDough(d)}
					className={cn({
						[styles.active]: currentDough === d,
					})}>
					{d}
				</button>
			))}
		</div>
	);
};
