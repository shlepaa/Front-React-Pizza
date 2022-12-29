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
	currentPizzasPage: IPizza[];
	allPizzaTypes: string[];
	currentType: string;
	searchValue: string;
	currentSortParam: TypeParams;
	isSortedToDown: boolean;
	isAllPages: boolean;
}

export const initialState: IUserState = {
	isLoading: true,
	error: false,
	pizzas: [],
	pizzasBackup: [],
	currentPizzasPage: [],
	allPizzaTypes: [],
	currentType: 'все',
	searchValue: '',
	isSortedToDown: true,
	currentSortParam: {
		title: 'популярности',
		param: 'rating',
	},
	isAllPages: localStorage.isAllPages === 'true' ? true : false,
};

export const pizzaSortSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setIsAllPage: (state, action: PayloadAction<boolean>) => {
			state.isAllPages = action.payload;
			state.currentType = 'все';
			state.searchValue = '';
			localStorage.isAllPages = action.payload;
			if (action.payload) {
				state.pizzas = state.pizzasBackup;
				return;
			}
			state.pizzas = state.currentPizzasPage;
		},
		setParam: (state, action: PayloadAction<IPizza[]>) => {
			state.pizzas = action.payload;
			state.currentPizzasPage = action.payload;
			state.pizzasBackup = state.pizzasBackup.map((pizzaBack) => {
				const replacementPizza = action.payload.find(
					(pizza) => pizzaBack._id === pizza._id
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
			state.currentType = 'все';
			state.searchValue = '';
			state.currentSortParam = {
				title: 'популярности',
				param: 'rating',
			};
			if (state.isAllPages) {
				state.pizzas = state.pizzasBackup;
				return;
			}
			state.pizzas = state.currentPizzasPage;
		},
		search: (state, action: PayloadAction<string>) => {
			if (!action.payload && !state.isAllPages) {
				state.pizzas = state.currentPizzasPage;
				return;
			}
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
			state.allPizzaTypes = action.payload?.types ?? [];
			state.pizzasBackup = action.payload?.pizzas ?? [];
			state.currentPizzasPage =
				action.payload?.pizzas.filter((pizza, index) => index < 5) ??
				[];
			if (localStorage.isAllPages) {
				const checkForBoolean =
					localStorage.isAllPages === 'true' ? true : false;
				if (checkForBoolean) {
					state.pizzas = action.payload?.pizzas ?? [];
					return;
				}
				state.pizzas =
					action.payload?.pizzas.filter(
						(pizza, index) => index < 5
					) ?? [];
				return;
			}
			state.pizzas =
				action.payload?.pizzas.filter((pizza, index) => index < 5) ??
				[];
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
	setIsAllPage,
} = pizzaSortSlice.actions;
