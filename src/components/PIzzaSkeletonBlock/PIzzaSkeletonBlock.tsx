import styles from './PIzzaSkeletonBlock.module.scss';
import { PIzzaSkeletonBlockProps } from './PIzzaSkeletonBlock.props';
import cn from 'classnames';
import { FC } from 'react';

export const PIzzaSkeletonBlock: FC<PIzzaSkeletonBlockProps> = ({
	className,
	...props
}) => {
	return (
		<div
			data-testid="wrapper"
			className={cn(className, styles.pizzaBlock)}
			{...props}>
			<img
				className={cn(styles.image)}
				src="https://i.imgur.com/mTJhAis.png"
				alt={'Loading pizza'}
			/>
			<div className={cn(styles.title)} />
			<div className={cn(styles.selector)}>
				<div className={cn(styles.list)}>
					<div className={cn(styles.active)} />
					<div />
				</div>
				<div className={cn(styles.list)}>
					<div className={cn(styles.active)} />
					<div />
				</div>
			</div>
			<div className={cn(styles.info)}>
				<div className={cn(styles.price)} />
				<div className={styles.buttonsBlock}>
					<div className={cn(styles.plus)}></div>
					<div className={cn(styles.plus)}></div>
				</div>
				<div className={cn(styles.button, styles.buttonOutline)}>
					<div className={styles.buttonTitle} />
					<div className={styles.count} />
				</div>
			</div>
		</div>
	);
};
