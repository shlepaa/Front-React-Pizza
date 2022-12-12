import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizza } from '../../interfaces/IPizza';
import { fetchPizzas } from './data';

const allPizzaTypes = fetchPizzas.map((p) => p.types).flat();
const sortedTypes: string[] = [];
allPizzaTypes.forEach((p) => {
	if (!sortedTypes.includes(p)) {
		sortedTypes.push(p);
	}
});

interface IUserState {
	isLoading: boolean;
	error: string;
	pizzas: IPizza[];
	pizzasBackup: IPizza[];
	allPizzaTypes: string[];
	currentType: string;
	searchValue: string;
}

export const initialState: IUserState = {
	isLoading: false,
	pizzas: fetchPizzas,
	pizzasBackup: fetchPizzas,
	allPizzaTypes: sortedTypes,
	currentType: 'все',
	searchValue: '',
	error: '',
};

const checkForSimilarity = (word: string, search: string): boolean => {
	return word
		.toLowerCase()
		.split(' ')
		.join('')
		.includes(search.toLowerCase().split(' ').join(''));
};

export const pizzaSortSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		sortByParam: (
			state,
			action: PayloadAction<'price' | 'title' | 'rating'>
		) => {
			state.pizzas = state.pizzas.sort((a, b) =>
				a[action.payload] > b[action.payload] ? 1 : -1
			);
		},
		sortPrice: (state) => {
			state.pizzas = state.pizzas.sort((a, b) =>
				a.price > b.price ? 1 : -1
			);
		},
		sortAlphabet: (state) => {
			state.pizzas = state.pizzas.sort((a, b) =>
				a.title > b.title ? 1 : -1
			);
		},
		sortRating: (state) => {
			state.pizzas = state.pizzas.sort((a, b) =>
				a.rating > b.rating ? 1 : -1
			);
		},
		sortByType: (state, action: PayloadAction<string>) => {
			state.pizzas = state.pizzasBackup.filter((p) =>
				p.types.includes(action.payload)
			);
			state.currentType = action.payload;
			state.currentType = action.payload;
			state.searchValue = '';
		},
		unset: (state) => {
			state.pizzas = state.pizzasBackup;
			state.currentType = 'все';
			state.searchValue = '';
		},
		search: (state, action: PayloadAction<string>) => {
			state.pizzas = state.pizzasBackup.filter(
				(p) =>
					checkForSimilarity(p.title, action.payload) ||
					checkForSimilarity(p.types.join(''), action.payload)
			);
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
	},
});

export default pizzaSortSlice.reducer;
