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

interface UserState {
	isLoading: boolean;
	error: string;
	pizzas: IPizza[];
	pizzasBackup: IPizza[];
	allPizzaTypes: string[];
	currentType: string;
}

export const initialState: UserState = {
	isLoading: false,
	pizzas: fetchPizzas,
	pizzasBackup: fetchPizzas,
	allPizzaTypes: sortedTypes,
	currentType: 'все',
	error: '',
};

export const pizzaSortSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
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
		},
		unset: (state) => {
			state.pizzas = state.pizzasBackup;
			state.currentType = 'все';
		},
	},
});

export default pizzaSortSlice.reducer;
