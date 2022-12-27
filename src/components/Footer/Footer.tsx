import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';
import { FC } from 'react';
import cn from 'classnames';

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
	return <div className={cn(className, styles.footer)} {...props}></div>;
};
