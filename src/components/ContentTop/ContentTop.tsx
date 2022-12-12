import styles from './ContentTop.module.scss';
import { ContentTopProps } from './ContentTop.props';
import cn from 'classnames';
import { FC } from 'react';
import { Categories } from '../Categories/Categories';
import { Sort } from '../Sort/Sort';

export const ContentTop: FC<ContentTopProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.contentTop)} {...props}>
			<Categories />
			<Sort sortParams={['популярности', 'цене', 'алфавиту']} />
		</div>
	);
};
