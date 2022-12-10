import styles from './Categories.module.scss';
import { CategoriesProps } from './Categories.props';
import cn from 'classnames';
import { FC, useState } from 'react';

export const Categories: FC<CategoriesProps> = ({ className, ...props }) => {
	const [type, setType] = useState<string>('all');
	return (
		<div className={cn(className, styles.categories)} {...props}>
			<button
				onClick={() => setType('all')}
				className={cn({
					[styles.active]: type === 'all',
				})}>
				Все
			</button>
			<button
				onClick={() => setType('meat')}
				className={cn({
					[styles.active]: type === 'meat',
				})}>
				Мясные
			</button>
			<button
				onClick={() => setType('vegetarian')}
				className={cn({
					[styles.active]: type === 'vegetarian',
				})}>
				Вегетарианская
			</button>
			<button
				onClick={() => setType('grill')}
				className={cn({
					[styles.active]: type === 'grill',
				})}>
				Гриль
			</button>
			<button
				onClick={() => setType('spicy')}
				className={cn({
					[styles.active]: type === 'spicy',
				})}>
				Острые
			</button>
			<button
				onClick={() => setType('closed')}
				className={cn({
					[styles.active]: type === 'closed',
				})}>
				Закрытые
			</button>
		</div>
	);
};
