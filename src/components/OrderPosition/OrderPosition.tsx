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
	const [isClosed, setIsClosed] = useState<boolean>(false);

	if (isClosed || count < 1) {
		return <></>;
	}

	return (
		<div className={cn(className, styles.orderPosition)} {...props}>
			<img className={cn(styles.image)} src={image} alt={title} />
			<div>
				<h2 className={styles.title}>{title}</h2>
				<span className={styles.params}>
					{dough} тесто, {size} см
				</span>
			</div>
			<div className={styles.countBlock}>
				<CircleButton isIncrement onClick={() => setCount(count + 1)} />
				<span className={styles.count}>{count}</span>
				<CircleButton onClick={() => setCount(count - 1)} />
			</div>
			<span className={styles.price}>{price} ₽</span>
			<CircleButton
				onClick={() => setIsClosed(true)}
				className={styles.close}
				close
			/>
		</div>
	);
};
