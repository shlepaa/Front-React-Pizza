export interface IPizza {
	price: number;
	image: string;
	title: string;
	rating: number;
	types: string[];
	dough?: string;
	size?: string;
	possibleDoughs: string[];
	possibleSizes: string[];
}
