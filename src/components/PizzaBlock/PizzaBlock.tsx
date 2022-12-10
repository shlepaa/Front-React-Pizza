import styles from './PizzaBlock.module.scss';
import { PizzaBlockProps } from './Sort.props';
import cn from 'classnames';
import { FC } from 'react';
import { AddButton } from '../AddButton/AddButton';

export const PizzaBlock: FC<PizzaBlockProps> = ({
	title,
	price,
	image,
	className,
	...props
}) => {
	return (
		<div className={cn(className, styles.pizzaBlock)} {...props}>
			<img className={cn(styles.image)} src={image} alt={title} />
			<h4 className={cn(styles.title)}>{title}</h4>
			<div className={cn(styles.selector)}>
				<ul>
					<li className={cn(styles.active)}>тонкое</li>
					<li>традиционное</li>
				</ul>
				<ul>
					<li className={cn(styles.active)}>26 см.</li>
					<li>30 см.</li>
					<li>40 см.</li>
				</ul>
			</div>
			<div className={cn(styles.info)}>
				<div className={cn(styles.price)}>от {price} ₽</div>
				<AddButton />
			</div>
		</div>
	);
};
