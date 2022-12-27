import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface AddButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	count: number;
	setCount: (inctremOrDecrem: string) => void;
}
