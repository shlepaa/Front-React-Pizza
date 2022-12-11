import styles from './UlDough.module.scss';
import { UlDoughProps } from './UlDough.props';
import { FC } from 'react';
import cn from 'classnames';

export const UlDough: FC<UlDoughProps> = ({
	dough,
	setDough,
	className,
	...props
}) => {
	return (
		<ul className={cn(className, styles.list)} {...props}>
			<li
				onClick={() => setDough('thin')}
				className={cn({
					[styles.active]: dough === 'thin',
				})}>
				тонкое
			</li>
			<li
				onClick={() => setDough('traditional')}
				className={cn({
					[styles.active]: dough === 'traditional',
				})}>
				традиционное
			</li>
		</ul>
	);
};
