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
		<Link data-testid="back-button" to="/">
			<button
				className={cn(className, styles.button, styles.backButton)}
				{...props}>
				<ArrowIcon className={cn(styles.icon)} />
				<span data-testid="back-text">{children}</span>
			</button>
		</Link>
	) : (
		<Link data-testid="order-button" to="/order">
			<button
				className={cn(className, styles.button, styles.orderButton)}
				{...props}>
				<span>{children}</span>
			</button>
		</Link>
	);
};
