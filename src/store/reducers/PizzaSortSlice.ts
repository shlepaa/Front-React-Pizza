import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeParams } from '../../interfaces/TypeParams';
import { IPizza } from '../../interfaces/IPizza';
import { fetchPizzas } from './ActionCreators';

interface IUserState {
	isLoading: boolean;
	error: string;
	pizzas: IPizza[];
	pizzasBackup: IPizza[];
	allPizzaTypes: string[];
	currentType: string;
	searchValue: string;
	currentSortParam: TypeParams;
	isSortedToDown: boolean;
}

export const initialState: IUserState = {
	isLoading: false,
	error: '',
	pizzas: [],
	pizzasBackup: [],
	allPizzaTypes: [],
	currentType: 'все',
	searchValue: '',
	isSortedToDown: true,
	currentSortParam: {
		title: 'популярности',
		param: 'rating',
	},
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
		setParam: (state, action: PayloadAction<IPizza[]>) => {
			state.pizzas = action.payload;
			state.pizzasBackup = state.pizzasBackup.map((pizzaBack) => {
				const replacementPizza = action.payload.find(
					(pizza) => pizzaBack.title === pizza.title
				);
				if (replacementPizza) {
					return replacementPizza;
				}
				return pizzaBack;
			});
		},
		sortToUpOrDown: (state, action: PayloadAction<boolean>) => {
			state.pizzas = state.pizzas.sort((a, b) => {
				if (
					a[state.currentSortParam.param] >
					b[state.currentSortParam.param]
				) {
					return action.payload ? -1 : 1;
				}
				return action.payload ? 1 : -1;
			});
			state.isSortedToDown = !state.isSortedToDown;
		},
		sortByParam: (state, action: PayloadAction<TypeParams>) => {
			state.pizzas = state.pizzas.sort((a, b) =>
				a[action.payload.param] > b[action.payload.param] ? 1 : -1
			);
			state.pizzasBackup = state.pizzasBackup.sort((a, b) =>
				a[action.payload.param] > b[action.payload.param] ? 1 : -1
			);
			state.currentSortParam = action.payload;
			state.isSortedToDown = true;
		},
		sortByType: (state, action: PayloadAction<string>) => {
			state.pizzas = state.pizzasBackup.filter((p) =>
				p.types.includes(action.payload)
			);
			state.currentType = action.payload;
			state.searchValue = '';
		},
		unset: (state) => {
			state.pizzas = state.pizzasBackup;
			state.currentType = 'все';
			state.searchValue = '';
		},
		search: (state, action: PayloadAction<string>) => {
			state.pizzas = (
				state.searchValue ? state.pizzasBackup : state.pizzas
			).filter(
				(p) =>
					checkForSimilarity(p.title, action.payload) ||
					checkForSimilarity(p.types.join(''), action.payload)
			);
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = '';
			state.pizzas = action.payload?.pizzas ?? [];
			state.allPizzaTypes = action.payload?.types ?? [];
			state.pizzasBackup = localStorage.pizzasBackup
				? JSON.parse(localStorage.pizzasBackup)
				: action.payload?.pizzas ?? [];
		});
	},
});

export default pizzaSortSlice.reducer;
