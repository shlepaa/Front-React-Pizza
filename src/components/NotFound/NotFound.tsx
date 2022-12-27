import styles from './NotFound.module.scss';
import { NotFoundProps } from './NotFound.props';
import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export const NotFound: FC<NotFoundProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.notFound)} {...props}>
			<h1 className={styles.ops}>Упс</h1>
			<h2 className={styles.title}>404 Страница не найдена</h2>
			<img
				className={styles.image}
				src="https://pbs.twimg.com/profile_banners/338031595/1470808244/1500x500"
				alt=""
			/>
			<span className={styles.homepage}>Все пиццы сьел кот!</span>
			<span className={styles.homepage}>
				Попробуйте <Link to="/">главную</Link> страницу
			</span>
		</div>
	);
};
