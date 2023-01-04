import { ReactNode } from 'react';

export interface OrderButtonProps /* extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> */ {
	back?: boolean;
	className: string;
	children: ReactNode;
}
