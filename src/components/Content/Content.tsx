import styles from './Content.module.scss';
import { ContentProps } from './Content.props';
import cn from 'classnames';
import { FC } from 'react';
import { Allpizzas, ContentTop } from '..';

export const Content: FC<ContentProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.content)} {...props}>
			<div className={styles.container}>
				<ContentTop />
				<Allpizzas />
			</div>
		</div>
	);
};
