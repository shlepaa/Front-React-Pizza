import styles from './ErrorBlock.module.scss';
import { ErrorBlockProps } from './ErrorBlock.props';
import { FC } from 'react';
import cn from 'classnames';

export const ErrorBlock: FC<ErrorBlockProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.error)} {...props}>
			<h1>500 Ошибка Сервера</h1>
			<img
				className={styles.image}
				src="https://i.imgur.com/F0qoSsb.png"
				alt="Pizza error"
			/>
			<span className={styles.text}>Не удалось загрузить пиццы.</span>
			<span className={styles.text}>
				Перезагрузите страничку или попробуйте позже
			</span>
		</div>
	);
};
