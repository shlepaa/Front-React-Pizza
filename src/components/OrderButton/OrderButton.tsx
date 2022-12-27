import styles from './OrderButton.module.scss';
import { OrderButtonProps } from './OrderButton.props';
import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import ArrowIcon from './arrow.svg';

export const OrderButton: FC<OrderButtonProps> = ({
	back,
	className,
	...props
}) => {
	return back ? (
		<Link to="/">
			<button
				className={cn(className, styles.button, styles.backButton)}
				{...props}>
				<ArrowIcon className={cn(styles.icon)} />
				Вернуться назад
			</button>
		</Link>
	) : (
		<Link to="/order">
			<button
				className={cn(className, styles.button, styles.orderButton)}
				{...props}>
				Оплатить сейчас
			</button>
		</Link>
	);
};
