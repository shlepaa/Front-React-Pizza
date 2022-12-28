import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface OrderPositionProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	dough: string;
	title: string;
	count: number;
	size: string;
	image: string;
	price: number;
	id: string;
}
