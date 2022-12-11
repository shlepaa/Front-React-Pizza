import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import { FC, useState } from 'react';
import cn from 'classnames';
import { FcBinoculars } from 'react-icons/fc';
import { IconContext } from 'react-icons';

export const Search: FC<SearchProps> = ({ className, ...props }) => {
	const [value, setValue] = useState<string>('');
	return (
		<div className={styles.wrapper}>
			<input
				placeholder="Поиск..."
				onChange={(e) => setValue(e.currentTarget.value)}
				value={value}
				className={cn(className, styles.search)}
				{...props}
			/>
			<button className={styles.icon}>
				<IconContext.Provider
					value={{
						size: '30px',
					}}>
					<FcBinoculars />
				</IconContext.Provider>
			</button>
		</div>
	);
};
