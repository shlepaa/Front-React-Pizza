import styles from './CircleButton.module.scss';
import { CircleButtonProps } from './CircleButton.props';
import { FC } from 'react';
import cn from 'classnames';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export const CircleButton: FC<CircleButtonProps> = ({
	isIncrement = false,
	className,
	...props
}) => {
	return (
		<button className={cn(styles.circleButton)} {...props}>
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
