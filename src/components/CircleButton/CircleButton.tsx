import styles from './CircleButton.module.scss';
import { CircleButtonProps } from './CircleButton.props';
import { FC, ReactElement } from 'react';
import cn from 'classnames';
import {
	AiFillPlusCircle,
	AiFillMinusCircle,
	AiOutlineCloseCircle,
} from 'react-icons/ai';
import { IconContext } from 'react-icons';

export const CircleButton: FC<CircleButtonProps> = ({
	isIncrement = false,
	close = false,
	className,
	...props
}) => {
	const whatIsButton = (): ReactElement => {
		if (close) {
			return <AiOutlineCloseCircle />;
		}
		if (isIncrement) {
			return <AiFillPlusCircle />;
		}
		return <AiFillMinusCircle />;
	};

	return (
		<button className={cn(styles.circleButton)} {...props}>
			<IconContext.Provider
				value={{
					size: '30px',
					className: cn(styles.plus, className),
				}}>
				{whatIsButton()}
			</IconContext.Provider>
		</button>
	);
};
