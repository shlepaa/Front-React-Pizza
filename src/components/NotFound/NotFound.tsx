import styles from './NotFound.module.scss';
import { NotFoundProps } from './NotFound.props';
import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import img from './1500x500.jpg';

export const NotFound: FC<NotFoundProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.notFound)} {...props}>
			<h1 className={styles.ops}>Упс</h1>
			<h2 className={styles.title}>404 Страница не найдена</h2>
			<img
				className={styles.image}
				src={process.env.NODE_ENV === 'test' ? '' : img}
				alt="Cat on the piece of pizzas"
			/>
			<span className={styles.homepage}>Все пиццы сьел кот!</span>
			<span className={styles.homepage}>
				Поищите пиццы на <Link to="/">главной</Link> страницу
			</span>
		</div>
	);
};
