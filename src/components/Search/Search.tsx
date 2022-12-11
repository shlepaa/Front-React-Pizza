import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import { FC, useState } from 'react';
import cn from 'classnames';

export const Search: FC<SearchProps> = ({ className, ...props }) => {
	const [value, setValue] = useState<string>('');
	return (
		<input
			placeholder="Поиск..."
			onChange={(e) => setValue(e.currentTarget.value)}
			value={value}
			className={cn(className, styles.search)}
			{...props}
		/>
	);
};
