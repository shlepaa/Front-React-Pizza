import { FC } from 'react';
import cn from 'classnames';
import { Allpizzas, ContentTop, Header } from './components';
import styles from './styles/styles.module.scss';

export const App: FC = () => {
	return (
		<div className={cn(styles.wrapper)}>
			<Header className={styles.header} />
			<div className={styles.content}>
				<div className={styles.container}>
					<ContentTop />
					<h2 className={styles.title}>Все пиццы</h2>
					<Allpizzas />
				</div>
			</div>
		</div>
	);
};
