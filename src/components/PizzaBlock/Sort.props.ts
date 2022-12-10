import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PizzaBlockProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string;
	title: string;
	price: number;
}
