import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface CircleButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	isIncrement?: boolean;
	close?: boolean;
}
