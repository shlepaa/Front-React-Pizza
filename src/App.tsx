import { FC } from 'react';
import cn from 'classnames';
import { Categories, Header, PizzaBlock, Sort } from './components';
import styles from './styles/styles.module.scss';

export const App: FC = () => {
	return (
		<div className={cn(styles.wrapper)}>
			<Header className={styles.header} />
			<div className={styles.content}>
				<div className={styles.container}>
					<div className={styles.contentTop}>
						<Categories />
						<Sort />
					</div>
					<h2 className={styles.title}>Все пиццы</h2>
					<div className={styles.items}>
						<PizzaBlock
							image="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
							title="Чизбургер-пицца"
							price={395}
						/>
						<PizzaBlock
							image="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
							title="Чизбургер-пицца"
							price={395}
						/>
						<PizzaBlock
							image="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
							title="Чизбургер-пицца"
							price={395}
						/>
						<PizzaBlock
							image="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
							title="Чизбургер-пицца"
							price={395}
						/>
						<PizzaBlock
							image="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
							title="Чизбургер-пицца"
							price={395}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
