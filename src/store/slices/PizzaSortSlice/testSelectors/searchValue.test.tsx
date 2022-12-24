import { RootState } from '../../../store';
import { initialState } from '../PizzaSortSlice';

const getSearchValue = (state?: Pick<RootState, 'pizzaSortReducer'>): string =>
	state?.pizzaSortReducer?.searchValue || '';

describe('getIsLoading', () => {
	it('with empty state', async () => {
		expect(getSearchValue()).toBe('');
	});

	it('with filled state', async () => {
		expect(
			getSearchValue({
				pizzaSortReducer: { ...initialState, searchValue: 'test' },
			})
		).toBe('test');
	});
});
