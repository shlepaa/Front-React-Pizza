import { FC } from 'react';
import cn from 'classnames';
import { Content, Header } from './components';
import styles from './styles/styles.module.scss';

export const App: FC = () => {
	return (
		<div className={cn(styles.wrapper)}>
			<Header />
			<Content />
		</div>
	);
};
