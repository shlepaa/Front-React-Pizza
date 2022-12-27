import { ISizeAndPrice } from './ISizeandPrice';

export interface IPizza {
	currentPrice: number;
	image: string;
	title: string;
	rating: number;
	types: string[];
	dough?: string;
	size?: string;
	possibleDoughs: string[];
	sizesAndPrices: ISizeAndPrice[];
	_id: string;
}
