import styles from './AddButton.module.scss';
import { AddButtonProps } from './AddButton.props';
import cn from 'classnames';
import { FC } from 'react';
import { CircleButton } from '..';

export const AddButton: FC<AddButtonProps> = ({
	setCount,
	count,
	className,
	...props
}) => {
	return (
		<>
			<div className={styles.buttonsBlock}>
				<CircleButton
					isIncrement
					data-testid="plus"
					onClick={() => setCount('increment')}
				/>
				<CircleButton
					data-testid="minus"
					onClick={() => setCount('decrement')}
				/>
			</div>
			<button
				{...props}
				className={cn(
					className,
					styles.button,
					styles.buttonOutline,
					styles.buttonAdd
				)}>
				<span>Добавить</span>
				<i data-testid="count" className={styles.count}>
					{count}
				</i>
			</button>
		</>
	);
};
