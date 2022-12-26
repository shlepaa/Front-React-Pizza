import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeParams } from '../../../interfaces/TypeParams';
import { IPizza } from '../../../interfaces/IPizza';
import { fetchPizzas } from '../ActionCreators';
import checkForSimilarity from '../../../helpers/checkForSimilarity';

export interface IUserState {
	isLoading: boolean;
	error: boolean;
	pizzas: IPizza[];
	pizzasBackup: IPizza[];
	allPizzaTypes: string[];
	currentType: string;
	searchValue: string;
	currentSortParam: TypeParams;
	isSortedToDown: boolean;
}

export const initialState: IUserState = {
	isLoading: true,
	error: false,
	pizzas: [],
	pizzasBackup: [],
	allPizzaTypes: [],
	currentType: 'все',
	searchValue: '',
	isSortedToDown: localStorage.isDown === 'true' ? true : false,
	currentSortParam: {
		title: 'популярности',
		param: 'rating',
	},
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
			state.isSortedToDown = !action.payload;
		},
		sortByParam: (state, action: PayloadAction<TypeParams>) => {
			state.pizzas = state.pizzas.sort((a, b) =>
				a[action.payload.param] > b[action.payload.param] ? 1 : -1
			);
			state.pizzasBackup = state.pizzasBackup.sort((a, b) =>
				a[action.payload.param] > b[action.payload.param] ? 1 : -1
			);
			state.currentSortParam = action.payload;
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
	extraReducers: (builder) => {
		builder.addCase(fetchPizzas.fulfilled, (state, action) => {
			state.isLoading = false;
			state.error = false;
			state.pizzas = action.payload?.pizzas ?? [];
			state.allPizzaTypes = action.payload?.types ?? [];
			state.pizzasBackup = action.payload?.pizzas ?? [];
		});
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		builder.addCase(fetchPizzas.pending, (state, _action) => {
			state.isLoading = true;
		});
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		builder.addCase(fetchPizzas.rejected, (state, _action) => {
			state.isLoading = false;
			state.error = true;
		});
	},
});

export default pizzaSortSlice.reducer;

export const {
	search,
	setParam,
	setSearchValue,
	sortByParam,
	sortByType,
	sortToUpOrDown,
	unset,
} = pizzaSortSlice.actions;
