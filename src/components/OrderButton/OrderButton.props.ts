import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface OrderButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	back?: boolean;
}
