import styles from './CalcButton.module.scss';
import { CalcButtonProps } from './CalcButton.props';
import { FC } from 'react';
import cn from 'classnames';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export const CalcButton: FC<CalcButtonProps> = ({
	isIncrement = false,
	className,
	...props
}) => {
	return (
		<button className={cn(styles.calcButton)} {...props}>
			<IconContext.Provider
				value={{
					size: '30px',
					className: cn(styles.plus, className),
				}}>
				{isIncrement ? <AiFillPlusCircle /> : <AiFillMinusCircle />}
			</IconContext.Provider>
		</button>
	);
};
