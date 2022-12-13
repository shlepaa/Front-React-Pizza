import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ISizeAndPrice } from '../../interfaces/ISizeandPrice';

export interface PizzaBlockProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	image: string;
	title: string;
	defaultDough?: string;
	defaultSize?: string;
	possibleDoughs: string[];
	sizesAndPrices: ISizeAndPrice[];
}
