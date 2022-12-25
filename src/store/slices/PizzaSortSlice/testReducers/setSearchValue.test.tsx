import pizzasSortReducer, {
	IUserState,
	setSearchValue,
} from '../PizzaSortSlice';

const initialState: IUserState = {
	isLoading: false,
	error: false,
	pizzas: [],
	pizzasBackup: [],
	allPizzaTypes: ['тестовая'],
	currentType: 'все',
	searchValue: '',
	isSortedToDown: false,
	currentSortParam: {
		title: 'популярности',
		param: 'rating',
	},
};

describe('setSearchValue', () => {
	it('Set search value with meat', () => {
		const changedState = pizzasSortReducer(
			{ ...initialState },
			setSearchValue('мясная')
		);
		expect(changedState.searchValue).toBe('мясная');
	});

	it('Empty value', () => {
		const changedState = pizzasSortReducer(
			{ ...initialState },
			setSearchValue('')
		);
		expect(changedState.searchValue).toBe('');
	});
});
