import { RootState } from '../../../store';
import { initialState } from '../PizzaSortSlice';

const getAllPizzaTypes = (
	state?: Pick<RootState, 'pizzaSortReducer'>
): string[] => state?.pizzaSortReducer?.allPizzaTypes || [];

const types = ['мясная', 'сырная'];

describe('getIsLoading', () => {
	it('with empty state', async () => {
		expect(getAllPizzaTypes()).toEqual([]);
	});

	it('with filled state', async () => {
		expect(
			getAllPizzaTypes({
				pizzaSortReducer: { ...initialState, allPizzaTypes: types },
			})
		).toEqual(types);
	});
});
