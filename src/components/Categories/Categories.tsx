import styles from './Categories.module.scss';
import { CategoriesProps } from './Categories.props';
import cn from 'classnames';
import { FC, useState } from 'react';

export const Categories: FC<CategoriesProps> = ({ className, ...props }) => {
	const [type, setType] = useState<string>('all');
	return (
		<div className={cn(className, styles.categories)} {...props}>
			<ul>
				<li
					onClick={() => setType('all')}
					className={cn({
						[styles.active]: type === 'all',
					})}>
					Все
				</li>
				<li
					onClick={() => setType('meat')}
					className={cn({
						[styles.active]: type === 'meat',
					})}>
					Мясные
				</li>
				<li
					onClick={() => setType('vegetarian')}
					className={cn({
						[styles.active]: type === 'vegetarian',
					})}>
					Вегетарианская
				</li>
				<li
					onClick={() => setType('grill')}
					className={cn({
						[styles.active]: type === 'grill',
					})}>
					Гриль
				</li>
				<li
					onClick={() => setType('spicy')}
					className={cn({
						[styles.active]: type === 'spicy',
					})}>
					Острые
				</li>
				<li
					onClick={() => setType('closed')}
					className={cn({
						[styles.active]: type === 'closed',
					})}>
					Закрытые
				</li>
			</ul>
		</div>
	);
};
