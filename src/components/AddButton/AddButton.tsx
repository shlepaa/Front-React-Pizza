import styles from './AddButton.module.scss';
import { AddButtonProps } from './AddButton.props';
import cn from 'classnames';
import { FC } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export const AddButton: FC<AddButtonProps> = ({
	setCount,
	count,
	className,
	...props
}) => {
	return (
		<>
			<div className={styles.buttonsBlock}>
				<button
					data-testid="plus"
					onClick={() => setCount('increment')}>
					<IconContext.Provider
						value={{
							size: '30px',
							className: cn(styles.plus),
						}}>
						<AiFillPlusCircle />
					</IconContext.Provider>
				</button>
				<button
					data-testid="minus"
					onClick={() => setCount('decrement')}>
					<IconContext.Provider
						value={{
							size: '30px',
							className: cn(styles.plus),
						}}>
						<AiFillMinusCircle />
					</IconContext.Provider>
				</button>
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
