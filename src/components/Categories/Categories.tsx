import styles from './Categories.module.scss';
import { CategoriesProps } from './Categories.props';
import cn from 'classnames';
import { FC } from 'react';

export const Categories: FC<CategoriesProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.categories)} {...props}>
			<ul>
				<li className={cn(styles.active)}>Все</li>
				<li>Мясные</li>
				<li>Вегетарианская</li>
				<li>Гриль</li>
				<li>Острые</li>
				<li>Закрытые</li>
			</ul>
		</div>
	);
};
