import styles from './CartButton.module.scss';
import { CartButtonProps } from './CartButton.props';
import cn from 'classnames';
import { FC } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

export const CartButton: FC<CartButtonProps> = ({
	link,
	className,
	...props
}) => {
	return (
		<a href={link} {...props}>
			<button className={cn(className, styles.button, styles.buttonCart)}>
				<span>520 ₽</span>
				<div className={styles.delimiter}></div>
				<IconContext.Provider
					value={{
						size: '20px',
						color: 'white',
					}}>
					<RiShoppingCartLine />
				</IconContext.Provider>
				<span>3</span>
			</button>
		</a>
	);
};
