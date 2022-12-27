import styles from './NotFound.module.scss';
import { NotFoundProps } from './NotFound.props';
import { FC } from 'react';
import cn from 'classnames';

export const NotFound: FC<NotFoundProps> = ({ className, ...props }) => {
	return <div className={cn(className, styles.notFound)} {...props}></div>;
};
