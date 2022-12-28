import styles from './OrderButton.module.scss';
import { OrderButtonProps } from './OrderButton.props';
import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import ArrowIcon from './arrow.svg';

export const OrderButton: FC<OrderButtonProps> = ({
	back,
	className,
	children,
	...props
}) => {
	return back ? (
		<button
			className={cn(className, styles.button, styles.backButton)}
			{...props}>
			<Link to="/">
				{process.env.NODE_ENV === 'test' ? (
					''
				) : (
					<ArrowIcon className={cn(styles.icon)} />
				)}
				<span>{children}</span>
			</Link>
		</button>
	) : (
		<button
			className={cn(className, styles.button, styles.orderButton)}
			{...props}>
			<Link to="/order">
				<span>{children}</span>
			</Link>
		</button>
	);
};
