import styles from './OrderPosition.module.scss';
import { OrderPositionProps } from './OrderPosition.props';
import { FC, useState } from 'react';
import cn from 'classnames';
import { CircleButton } from '../CircleButton/CircleButton';

export const OrderPosition: FC<OrderPositionProps> = ({
	count: defaultCount,
	dough,
	image,
	price,
	size,
	title,
	className,
	...props
}) => {
	const [count, setCount] = useState<number>(defaultCount);

	return (
		<div className={cn(className, styles.orderPosition)} {...props}>
			<img className={cn(styles.image)} src={image} alt={title} />
			<h2>{title}</h2>
			<span>
				{dough} тесто, {size} см
			</span>
			<CircleButton onClick={() => setCount(count + 1)} />
			<CircleButton onClick={() => setCount(count - 1)} />
			<span>{count}</span>
			<span>{price}</span>
		</div>
	);
};
