import pizzasSortReducer, {
	setSearchValue,
	initialState,
} from '../PizzaSortSlice';

describe('setSearchValue', () => {
	it('Set search value with meat', () => {
		const changedState = pizzasSortReducer(
			initialState,
			setSearchValue('мясная')
		);
		expect(changedState.searchValue).toBe('мясная');
	});

	it('Empty value', () => {
		const changedState = pizzasSortReducer(
			initialState,
			setSearchValue('')
		);
		expect(changedState.searchValue).toBe('');
	});
});
