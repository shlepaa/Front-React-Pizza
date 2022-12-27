import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface CalcButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	isIncrement?: boolean;
}
